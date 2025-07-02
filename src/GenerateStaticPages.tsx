
import { FileUtils } from "../libs/mdweb/source/FileUtils"
import { Assert } from "../libs/mdweb/source/Assert";
import { ILogger } from "../libs/mdweb/source/Logger";
import { RenderPage } from "./Render";





//
//
//

// -----------------------------------------------------------------------------
export async function GenerateStaticPages(
  pagesDir: string,
  outputDir: string,
  log: ILogger) {
  //
  log.I("Generating all site pages...");
  log.D("Pages directory: ", pagesDir);
  log.D("Output directory: ", outputDir);

  //
  pagesDir = FileUtils.ForwardSlash(pagesDir);
  Assert(
    FileUtils.DirExists(pagesDir),
    `Pages directory does not exist - aborting...\n ${pagesDir}`
  );

  //
  FileUtils.EnsurePath(outputDir);
  Assert(
    FileUtils.DirExists(outputDir),
    `Output directory does not exist - aborting...\n ${outputDir}`
  );

  //
  const filepaths = FileUtils.ListDir(pagesDir, { recursive: true, fullpaths: true });
  log.D("Found files in pages directory: ", filepaths.length);
  for (const filepath of filepaths) {
    const clean_filepath = FileUtils.ForwardSlash(filepath.toString());
    const clean_fileurl = FileUtils.PathToUrl(clean_filepath);

    const should_skip = FileUtils.DirExists(clean_filepath)
      || clean_filepath.split("/").some((part: string) => {
        if (part.startsWith("_")) {
          return true;
        }
      });

    if (should_skip) {
      log.I("Skipping file: ", clean_filepath);
      continue;
    }

    try {
      log.D("Loading page: ", clean_filepath, " -> ", clean_fileurl);
      const page_module = await import(clean_fileurl);
      const component = page_module.default;

      if (!component) {
        log.F("No default export found in module: ", clean_fileurl);
        continue;
      }

      log.D("Page rendering: ", clean_filepath);
      _DoRenderPage(component, clean_filepath, pagesDir, outputDir, log);
      log.D("Page rendered successfully!");


    } catch (error) {
      log.E("Error importing page module: ", clean_fileurl, error);
      continue; // Skip this file if there's an error
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
  output_dir: string,
  log: ILogger) {
  try {
    const rendered_value = RenderPage(component({log}), log);

    // Save to same path in output directory, but with .html extension
    const output_filename = clean_filepath
      .replace(pages_dir, output_dir)
      .replace(/\.tsx$/, ".html")
      .toLowerCase();

    log.D("Writing page: ", output_filename);

    FileUtils.EnsurePath(output_filename);
    FileUtils.WriteAllFile(output_filename, rendered_value);
    log.D("Size: ", rendered_value.length, " bytes");

  } catch (error) {
    log.E(`Error rendering page: ${clean_filepath}`, error);
  }
}