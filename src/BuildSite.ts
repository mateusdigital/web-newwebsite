// -----------------------------------------------------------------------------
import { FileUtils } from "../libs/mdweb/source/FileUtils";
import { GenerateProjectsPagesFromData } from "./GenerateProjectsPagesFromData";
import { GenerateStaticPages } from "./GenerateStaticPages";
import { CopyResources } from "./CopyResources";
import { Logger } from "../libs/mdweb/source/Logger";
import { GenerateCertificationsThumbnails } from "./GenerateCertificationsThumbnails";
import { Assert } from "../libs/mdweb/source/Assert";
import { PathUtils } from "../libs/mdweb/source/PathUtils";

// -----------------------------------------------------------------------------
const cwd = FileUtils.GetCwd();
const LOGGER = Logger;

// -----------------------------------------------------------------------------
const DIST_DIR = PathUtils.ForwardSlash(`${cwd}/_dist`);
const PAGES_DIR = PathUtils.ForwardSlash(`${cwd}/src/pages`);
const PUBLIC_DIR = PathUtils.ForwardSlash(`${cwd}/public`);
const CERTS_DIR = PathUtils.ForwardSlash(`${cwd}/public/res/certifications`);

// -----------------------------------------------------------------------------
FileUtils.EnsurePath(DIST_DIR, { isDir: true });

Assert(FileUtils.DirExists(PAGES_DIR), `Pages directory does not exist: ${PAGES_DIR}`);
Assert(FileUtils.DirExists(CERTS_DIR), `Certifications directory does not exist: ${CERTS_DIR}`);
Assert(FileUtils.DirExists(DIST_DIR), `Dist directory does not exist: ${DIST_DIR}`);

async function main() {

  // -----------------------------------------------------------------------------
  try {
    await GenerateProjectsPagesFromData(DIST_DIR, LOGGER);
    await GenerateStaticPages(PAGES_DIR, DIST_DIR, LOGGER);
    // await GenerateCertificationsThumbnails(CERTS_DIR, DIST_DIR, LOGGER);

    await CopyResources(PUBLIC_DIR, DIST_DIR, LOGGER);
  } catch (error) {
    LOGGER.E("Error during site build:", error);
    process.exit(1);
  }

}

main();