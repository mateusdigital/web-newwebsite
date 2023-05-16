import Link_ from "@/components/link";
import GamesInformation_ from "@/components/games/games-information";
import { useEffect, useState } from 'react';

function checkImageExists(imagePath) {
  const img = new Image();
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imagePath;
  });
}

export default function ProjectItemCard_({ name }) {
  const info = GamesInformation_(name);
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    const imagePath = `/img/${info.type}/${name}.gif`;
    checkImageExists(imagePath)
      .then(exists => setImageExists(exists))
      .catch(error => console.error(error));
  }, [info.type, name]);

  if (!info) {
    debugger
    return <></>;
  }

  const title = info.title;
  const year = info.year;
  const platform = info.platform_icons.join(" ");
  const type = info.type;

  const details_page_url = `/projects/${name}`;
  const img_path = `/img/${type}/${name}.${imageExists ? 'gif' : 'png'}`;
  const alt_text = `Screenshot of "${title}"`;

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
              <span className="projectListCardInfoPlatform" dangerouslySetInnerHTML={{ __html: platform }} />
              <span className="projectListCardInfoYear">{year}</span>
            </div>
          </div>
        </Link_>
      </div>
    </>
  )
}
