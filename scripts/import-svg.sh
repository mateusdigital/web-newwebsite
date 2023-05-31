#!/bin/bash

# Directory containing the SVG files
svg_directory="$1"

# Output directory for the JavaScript files
output_directory="$2"
mkdir -p $output_directory;


# Loop through SVG files in the directory
for svg_file in "$svg_directory"/*.svg; do
    # Get the filename without extension
    filename=$(basename "$svg_file" .svg)

    # Create the JavaScript output file path
    js_file="$output_directory/${filename}.js"
    viewbox=$(grep -o 'viewBox="[^"]*"' "$svg_file" | sed 's/^viewBox="//;s/"$//')


   # Generate the JavaScript output
      echo "export default function Icon_() {" > "$js_file"
    echo "  return (" >> "$js_file"
    echo "    <>" >> "$js_file"
    echo "      <svg className=\"svgIcon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"${viewbox}\">" >> "$js_file"
    echo "        {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}" >> "$js_file"
    value=$(xmlstarlet sel -N svg="http://www.w3.org/2000/svg" -t -c "//svg:path" "$svg_file")
    echo "          $value" >> "$js_file"
    echo "      </svg>" >> "$js_file"
    echo "    </>" >> "$js_file"
    echo "  )" >> "$js_file"
    echo "}" >> "$js_file"
done
