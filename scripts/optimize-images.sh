#!/bin/bash

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly SCRIPT_ROOT_DIR="$(dirname "$SCRIPT_DIR")"
readonly TARGET_DIR="${SCRIPT_ROOT_DIR}/public"

readonly GIF_WIDTH=900;
readonly THREADS=32;
readonly COLORS=256;

readonly IN_PLACE="true";

function display_stats() {
    # Set file paths
    local file1="$1";
    local file2="$2";

    # Get sizes of files in bytes
    file1_size=$(stat -c "%s" "$file1");
    file2_size=$(stat -c "%s" "$file2");

    # Calculate difference in bytes and percentage
    diff_bytes=$(( file2_size - file1_size ));
    diff_percent=$(( diff_bytes * 100 / file1_size ));

    # Print results
    echo "File 1 size: $file1_size bytes"
    echo "File 2 size: $file2_size bytes"
    echo "Difference in bytes: $diff_bytes bytes"
    echo "Difference in percent: $diff_percent %"
}

function optimize_gif {
    local filename="$1"

    ## Make sure to make it use max 255 colors...
    ## @notice: needs to be first or sometime gif fails in other steps...
    gifsicle -m                         \
        --colors $COLORS                \
        --use-colormap=web              \
        --threads=$THREADS              \
        "$filename" > "${filename%.gif}-${COLORS}.gif"

    ## Unoptimize it
    ## @notice: needs to optimize before optimize or risk failing...
    gifsicle -m                         \
        -U                              \
        --colors $COLORS                \
        --use-colormap=web              \
        --threads=$THREADS              \
        "${filename%.gif}-${COLORS}.gif" > "${filename%.gif}-unoptimized.gif"

    # Optimize GIF
    gifsicle -m                         \
        -O3                             \
        --colors $COLORS                \
        --use-colormap=web              \
        --resize-width="$GIF_WIDTH"     \
        --threads=$THREADS              \
        --unoptimize                    \
        "${filename%.gif}-unoptimized.gif" > "${filename%.gif}-optimized.gif";

    display_stats "${filename}" "${filename%.gif}-optimized.gif";
    if [ -z "$IN_PLACE" ]; then
        mv "${filename%.gif}-optimized.gif" "${filename}";
    fi;
}

find "$TARGET_DIR" -iname "*${COLORS}.gif"   -delete;
find "$TARGET_DIR" -iname '*unoptimized.gif' -delete;
find "$TARGET_DIR" -iname '*optimized.gif'   -delete;

find "$TARGET_DIR" -iname '*.gif' -print0 | while IFS= read -r -d '' file
do
    echo "$file";
    optimize_gif "$file"
done

find "$TARGET_DIR" -iname "*${COLORS}.gif" -delete;
find "$TARGET_DIR" -iname '*unoptimized.gif' -delete;
