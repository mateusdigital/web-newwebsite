import Link_ from "@/components/link";
import GamesInformation_ from "@/components/games/games-information";
import RetroIcon from "@/components/icons/address-book-solid"
export default function ProjectItemCard_({ name }) {
  const info = GamesInformation_(name);

  if (!info) {
    debugger
    return <></>;
  }

  const title = info.title;
  const year = info.year;
  const platform = info.platform_icons;
  const type = info.type;

  const details_page_url = `/projects/${name}`;
  const img_path = `/img/${type}/${name}.${info.type == "demo" ? 'gif' : 'png'}`; // @todo: make get the image available...
  const alt_text = `Screenshot of "${title}"`;

  console.log(platform)
  return (
    <>
      <div className="projectsGridCard">
        <Link_ href={details_page_url}>
          <div>
            <img src={img_path} alt={alt_text} />
          </div>

          <div className="projectsGridCardInfo">

            <span className="projectListCardInfoTitle">{title}</span>
            <div className="projectListCardInfoRightContainer">
              {/* <span className="projectListCardInfoPlatform" dangerouslySetInnerHTML={{ __html: platform }} /> */}
               {platform}

              <span className="projectListCardInfoYear">{year}</span>
            </div>
          </div>
        </Link_>
      </div>
    </>
  )
}
