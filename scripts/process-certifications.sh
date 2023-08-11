#!/usr/bin/env bash
set -e;

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly SCRIPT_ROOT_DIR="$(dirname "$SCRIPT_DIR")"

readonly generate_images="";
readonly generate_jsx="";

## Cleans any previous images.
if [ -n "$generate_images" ]; then
    find $SCRIPT_ROOT_DIR/public/res/certifications -iname "*.png" -delete
fi;


old_provider="";

jsx_str=" import DefaultPage_ from '@/components/default-page'\n";
jsx_str+="import CertificationItemCard_ from '@/components/certifications-list-page/certification-item-card'\n";
jsx_str+="export default function Page() {\n"
jsx_str+="return (\n <>\n"
jsx_str+="<DefaultPage_ page_id='certifications'>\n";


for item in $(find $SCRIPT_ROOT_DIR/public/res/certifications -iname "*.pdf"); do
    dir_name="$(dirname "$item")";
    provider="$(basename "$dir_name")";

    ## We don't want process nothing in _OLD folders.
    if [ "$provider" == "_OLD" ]; then
        echo "==> Ignoring Old..."
        continue
    fi

    if [ "$provider" != "$old_provider" ]; then
        if [ -n "$old_provider" ]; then
           jsx_str+="</div>\n</section>\n\n";
        fi;
        jsx_str+="<section>\n<h1>$provider</h1>\n<div className='certificationGridContainer'>\n"
        old_provider="$provider";
    fi;

    name="$(basename "$item" ".pdf")";
    pushd "$dir_name" >/dev/null
        input="${name}.pdf"
        output="${name}"

        ## Original file has special chars that is messing on html...
        clean_output_name="$(echo "$output"                 \
            | sed s/"ã"/"a"/g | sed s/"á"/"a"/g             \
            | sed s/"ó"/"o"/g | sed s/"õ"/"o"/g             \
            | sed s/"ç"/"c"/g                               \
            | sed s/"\+"/"_plus_"/g | sed s/"\&"/"_and_"/g  \
            | sed s/"\!"/"_"/g | sed 's/#/_sharp_/g'        \
            | sed s/"\:"/"_"/g
        )";

        echo "=> Generating for: $clean_output_name";
        ## Generate the certification thumbnail and display image.
        if [ -n "$generate_images" ]; then
            pdftoppm -scale-to 366 -png "${input}" "${clean_output_name}-thumb" &
            pdftoppm               -png "${input}" "${clean_output_name}"       &
        fi;

        ## Append the element..
        jsx_str+="<CertificationItemCard_ path=\"${provider}/${clean_output_name}\" />\n";

        ## Copy the template page.
        cp "${SCRIPT_DIR}/certifications/page-detail-template.js"  \
           "${SCRIPT_ROOT_DIR}/pages/certifications/${clean_output_name}.js"

        ## Replace the contents of the templated page.
        img_url="/res/certifications/${provider}/${clean_output_name}-1.png";
        pdf_url="/res/certifications/${provider}/${clean_output_name}.pdf";

        ## @todo: very lazy....
        sed -i "s|__header_img_url__|$img_url|g" "${SCRIPT_ROOT_DIR}/pages/certifications/${clean_output_name}.js"
        sed -i "s|__pdf_url__|$pdf_url|g" "${SCRIPT_ROOT_DIR}/pages/certifications/${clean_output_name}.js"

    popd >/dev/null
done

jsx_str+="</div>\n</section>\n\n";
jsx_str+="</DefaultPage_>\n</>\n);\n}\n";

if [ -n "$generate_jsx" ]; then
    echo -e "$jsx_str" > "${SCRIPT_ROOT_DIR}/pages/certifications.js"
fi;
