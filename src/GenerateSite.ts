import FileUtils from "../libs/mdweb/source/FileUtils";
import { GenerateAllProjectPages } from "./ProjectPageGenerator";
import { GenerateAllSitePages } from "./SitePageGenerator";




// -----------------------------------------------------------------------------
GenerateAllProjectPages();
GenerateAllSitePages();
CopyResources();

function CopyResources( cwd: string = FileUtils.GetCwd()) {
  console.log("Copy start");
  FileUtils.CopyDir( `${cwd}/public`, `${cwd}/_dist`, { force: true });
  console.log("Copy end");
}
