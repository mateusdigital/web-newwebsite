
import { FileUtils } from "../libs/mdweb/source/FileUtils"
import { Assert } from "../libs/mdweb/source/Assert";
import { RenderPage } from "./Render";



import { GamesPage } from "./pages/Games";
import IndexPage from "./pages/Index";
import ProjectsPage from "./pages/Projects";
import ResumePage from "./pages/Resume";
import SoftwarePage from "./pages/Software";





//
//
//

export async function GenerateAllSitePages(cwd: string = FileUtils.GetCwd()) {
  //
  const pages_dir = FileUtils.ForwardSlash(`${cwd}/src/pages`);
  Assert(FileUtils.DirExists(pages_dir), `Pages directory does not exist - aborting...\n ${pages_dir}`);

  const output_dir = FileUtils.ForwardSlash(`${cwd}/_dist`);
  FileUtils.EnsurePath(output_dir);
  Assert(FileUtils.DirExists(output_dir), `Output directory does not exist - aborting...\n ${output_dir}`);

  //

  // //
  const filepaths = FileUtils.ListDir(pages_dir, { recursive: true, fullpaths: true });
  for (const filepath of filepaths) {
    const clean_filepath = FileUtils.ForwardSlash(filepath.toString());
    const clean_fileurl = FileUtils.PathToUrl(clean_filepath);

    const page_module = await import(clean_fileurl);
    const component = page_module.default;

    console.log("Loading page: ", clean_filepath, " -> ", clean_fileurl);
    _DoRenderPage(component, clean_filepath, pages_dir, output_dir);
    console.log("Page rendered successfully!");

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


  }
}


//
// Private Functions
//

// -----------------------------------------------------------------------------
function _DoRenderPage(
  component: any,
  clean_filepath: string,
  pages_dir: string,
  output_dir: string) {
  try {
    const rendered_value = RenderPage(component(0));
    // Save to same path in output directory, but with .html extension
    const output_filename = clean_filepath
      .replace(pages_dir, output_dir)
      .replace(/\.tsx$/, ".html")
      .toLowerCase();

    console.log("Writing page: ", output_filename);

    FileUtils.EnsurePath(output_filename);
    console.log("Size: ", rendered_value.length, " bytes");
    FileUtils.WriteAllFile(output_filename, rendered_value);
    console.log("Size: ", rendered_value.length, " bytes");

  } catch (error) {
    console.error(`Error rendering page: ${clean_filepath}`, error);
  }
}