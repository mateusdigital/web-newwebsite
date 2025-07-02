import { FileUtils } from "../libs/mdweb/source/FileUtils";
import { ILogger } from "../libs/mdweb/source/Logger";

// -----------------------------------------------------------------------------
export function CopyResources(publicDir: string, distDir: string, log: ILogger) {
  try {
    log.D("Copy start - from:", publicDir, "to:", distDir);
    FileUtils.CopyDir(publicDir, distDir, { force: true });
    log.D("Copy end");
  } catch (error) {
    log.E("Error during resource copy:", error);
    throw new Error(`Failed to copy resources from ${publicDir} to ${distDir}`);
  }
}