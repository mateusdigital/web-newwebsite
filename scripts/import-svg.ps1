$svg_directory    = $args[0];
$output_directory = $args[1];

## Ensure the output directory exists
New-Item -ItemType Directory -Path $output_directory -Force;

## Get all SVG files in the directory
$svg_files = Get-ChildItem -Path $svg_directory -Filter "*.svg"
foreach ($svg_file in $svg_files) {
  Write-Host "Processing: $($svg_file.FullName)"

  $filename = [System.IO.Path]::GetFileNameWithoutExtension($svg_file.Name)
  $js_file  = Join-Path          `
    -Path      $output_directory `
    -ChildPath "$filename.js"

  $viewbox = Select-String       `
    -Path $svg_file.FullName     `
    -Pattern 'viewBox="([^"]*)"' `
    | ForEach-Object {           `
      $_.Matches.Groups[1].Value `
    }

  [xml]$xmlContent = Get-Content -Path $svg_file.FullName
  $paths = $xmlContent.svg.path | ForEach-Object { $_.OuterXml }

  # Generate the JavaScript output
  @"
export default function Icon_() {
  return (
    <>
      <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="$viewbox">
        {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
        $paths
      </svg>
    </>
  )
}
"@ | Set-Content -Path $js_file;
}

Write-Host "Wrote to $js_file"
