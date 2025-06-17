
import { FileUtils } from "../libs/mdweb/source/FileUtils"
import { Assert } from "../libs/mdweb/source/Assert";
import { RenderPage } from "./Render";

//
//
//

export async function GenerateAllSitePages(cwd: string = FileUtils.GetCwd()) {
  const pages_dir = FileUtils.ForwardSlash(`${cwd}/src/pages`);
  const output_dir = FileUtils.ForwardSlash(`${cwd}/_dist`);

  Assert(FileUtils.DirExists(pages_dir), `Pages directory does not exist - aborting...\n ${pages_dir}`);

  //
  const filepaths = FileUtils.ListDir(pages_dir, { recursive: true, fullpaths: true });
  for (const filepath of filepaths) {
    const clean_filepath = FileUtils.ForwardSlash(filepath.toString());
    const clean_filename = FileUtils.GetFilename(clean_filepath);

    const should_skip = FileUtils.DirExists(clean_filepath)
      || clean_filepath.split("/").some((part: string) => {
        if (part.startsWith("_")) {
          return true;
        }
      });

    if (should_skip) {
      console.log("Skipping file: ", clean_filepath);
      continue;
    }

    const fileurl = FileUtils.PathToUrl(clean_filepath);
    console.log("Loading page: ", clean_filepath, " -> ", fileurl);

    const page_module = await import(fileurl);
    const component = page_module.default;

    try {
      const rendered_value = RenderPage(component(0));
      // Save to same path in output directory, but with .html extension
      const output_filename = clean_filepath
        .replace(pages_dir, output_dir)
        .replace(/\.tsx$/, ".html")
        .toLowerCase();

      console.log("Writing page: ", output_filename);

      FileUtils.EnsurePath(output_filename);
      FileUtils.WriteAllFile(output_filename, rendered_value);

    } catch (error) {
      console.error(`Error rendering page: ${clean_filepath}`, error);
      continue;
    }
  }
}
