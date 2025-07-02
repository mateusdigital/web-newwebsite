import { fromPath } from "pdf2pic";
import path from "path";
import fs from "fs";
import { FileUtils } from "../libs/mdweb/source/FileUtils";
import { Assert } from "../libs/mdweb/source/Assert";
import { ILogger } from "../libs/mdweb/source/Logger";
import { Str } from "../libs/mdweb/source/Str";

// -----------------------------------------------------------------------------
export async function GenerateCertificationsThumbnails(
  certsDir: string,
  outputDir: string,
  log: ILogger) {

  certsDir = FileUtils.ForwardSlash(certsDir);
  outputDir = FileUtils.ForwardSlash(path.join(outputDir, "res/certifications"));

  Assert(FileUtils.DirExists(certsDir), `Certifications directory does not exist: ${certsDir}`);
  FileUtils.EnsurePath(outputDir, { isDir: true });

  const files = FileUtils.ListDir(certsDir, {
    recursive: true, fullpaths: true,
    returnFiles: true, returnDirs: false
  }).filter((file: any) => file.endsWith(".pdf"));

  log.D(`Found certifications count: ${files.length}`);
  for (let i = 0; i < files.length; i++) {
    const pdf_filename = FileUtils.ForwardSlash(files[i] as string);
    log.D(`Processing certification: ${i + 1}/${files.length} - ${pdf_filename}`);

    const img_name = Str.RemoveAccents(path.basename(pdf_filename, ".pdf"));
    const convert_output_dir = path.dirname(
      pdf_filename.replace(certsDir, outputDir)
    );

    log.D(`Paths: PDF: ${pdf_filename}\n\tImage: ${img_name}\n\tOutput: ${convert_output_dir}`);

    FileUtils.EnsurePath(convert_output_dir, { isDir: true });
    Assert(
      FileUtils.DirExists(convert_output_dir),
      `Output directory does not exist: ${convert_output_dir}`
    );

    try {
      log.D(`Converting ${pdf_filename} to image`);
      const convert = fromPath(pdf_filename, {
        saveFilename: img_name,
        savePath: convert_output_dir,
        quality: 50,
        format: "png",
        preserveAspectRatio: true,
      });

      await convert.bulk(1);
      log.D(`Converted ${pdf_filename} to images in ${convert_output_dir}`);
    }
    catch (err) {
      log.E("Error:", err);
      throw new Error(`Failed to convert PDF to image: ${pdf_filename}`);
    }
  }
}
