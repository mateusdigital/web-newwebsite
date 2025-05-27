
// -----------------------------------------------------------------------------
import FileUtils from "../../../libs/mdweb/source/FileUtils";
import { MakePlatformIcons } from "../../models/ProjectsInfo";
import Link from "../Link";
import RetroIcon from "../icons/address-book-solid"

//
//
//

// -----------------------------------------------------------------------------
interface ProjectItemCardProps {
  item: any;
}

// -----------------------------------------------------------------------------
export default function ProjectItemCard({ item }: ProjectItemCardProps) {
  const {
    project_name,
    project_title,
    project_type,
    project_subtype,
    year_start,
    year_end,
    year_release,
    tech,
    platform
  } = item;

  const details_page_url = `/projects/${project_name}`;
  const alt_text = `Screenshot of "${project_title} at ${year_release}"`;

  const png_img = `/img/projects/${project_subtype}/${project_name}.png`;
  const jpg_img = `/img/projects/${project_subtype}/${project_name}.jpg`;
  const gif_img = `/img/projects/${project_subtype}/${project_name}.gif`;

  const cwd = FileUtils.JoinPath(FileUtils.GetCwd(), "public");
  const img_path =
    FileUtils.FileExists(FileUtils.JoinPath(cwd, png_img)) ? png_img :
      FileUtils.FileExists(FileUtils.JoinPath(cwd, jpg_img)) ? jpg_img :
        FileUtils.FileExists(FileUtils.JoinPath(cwd, gif_img)) ? gif_img :
          "/img/projects/placeholder.png";

  const platform_icons = MakePlatformIcons(platform);

  return (
    <div className="projectCard" key={project_name}>
      <Link href={details_page_url}>
        <img src={img_path} alt={alt_text} />

        <div className="projectCardInfoContainer">
          <span className="projectCardTitle">{project_title}</span>
          <div className="projectCardRightContainer">
            <span className="projectCardPlatformsContainer">{platform_icons}</span>
            <span className="projectListCardInfoYear">{year_release}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}