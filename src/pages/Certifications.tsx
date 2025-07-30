// -----------------------------------------------------------------------------
import { FileUtils } from '../../libs/mdweb/source/FileUtils';
import { ILogger } from '../../libs/mdweb/source/Logger';
import { PathUtils } from '../../libs/mdweb/source/PathUtils';
import { Str } from '../../libs/mdweb/source/Str';
// -----------------------------------------------------------------------------
import { DefaultPage } from '../components/DefaultPage';
import { Link } from '../components/Link';


// -----------------------------------------------------------------------------
export default function CertificationsPage({ log }: { log: ILogger }) {
  const dict = new Map<string, Array<string>>();

  const items = FileUtils.ListDir("public/res/certifications", {
    recursive: true, fullpaths: true,
    returnDirs: false
  }).filter((item: string) => {
    return item.endsWith(".pdf");
  }).forEach((item: string) => {
    item = PathUtils.ForwardSlash(item);

    const comps = item.split("/");
    const provider = comps[comps.length - 2];
    if (!dict.has(provider)) {
      dict.set(provider, []);
    }

    dict.get(provider)!.push(item);
  });

  log.D("Certifications items:", items);
  return (<>
    <DefaultPage pageId="certifications">
      {Array.from(dict.entries()).map(([key, items]) => {
        return (<>
          <_CertificationPageSection
            title={key}
            subtitle=""
            columns="5"
            certs={items}
            log={log} />
        </>)
      })}
    </DefaultPage >
  </>);
}


//
// Private Components
//

// -----------------------------------------------------------------------------
function _CertificationItemCard({ cert, log }: { cert: any; log: ILogger }) {
  const item_filepath = PathUtils.ForwardSlash(cert.toString());
  const img_filepath = item_filepath.replace(".pdf", ".1.png");
  const clean_filename = PathUtils.GetFilename(item_filepath);

  const img_url = img_filepath.substring(img_filepath.indexOf("public") + 6, img_filepath.length);
  const clean_img_url = Str.RemoveAccents(img_url);
  const clean_pdf_url = clean_img_url.replace(".1.png", ".pdf");

  const components = clean_filename.replace(".pdf", "").split("_");
  const date = components[0] + "-" + components[1] + "-" + components[2];
  const title = components.slice(3).join(" ");

  return (<>
    <a href={clean_pdf_url} className="certificationItemCard">
      <img src={clean_img_url} alt={title} />
      <div>
        {/* <span className="date">{date}</span> */}
        <span className="title">{title}</span>
      </div>
    </a>
  </>);
}

// -----------------------------------------------------------------------------
function _CertificationPageSection({ title, subtitle, certs, log }: any) {
  return (<>
    <section>
      <h1>{title} <span>{subtitle}</span></h1>
      <div className="certificationGridContainer">
        {certs.map((cert: any, index: any) => (
          <_CertificationItemCard key={`${title}-${index}`} cert={cert} log={log} />
        ))}
      </div >
    </section>
  </>)
};
