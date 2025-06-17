
// -----------------------------------------------------------------------------
import FileUtils from "../../libs/mdweb/source/FileUtils";
import { MakePlatformIcons, Project } from "../models/ProjectsInfo";
import { Link } from "./Link";
import RetroIcon from "./icons/address-book-solid"

//
//
//

// -----------------------------------------------------------------------------
interface ProjectItemCardProps {
  item: Project;
}

// -----------------------------------------------------------------------------
export function ProjectItemCard({ item }: ProjectItemCardProps) {
  let {
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


  if (!project_subtype) {
    project_subtype = "";
  }

  const details_page_url = `/projects/${project_name}`;
  const alt_text = `Screenshot of "${project_title} at ${year_release}"`;

  // Make the image path....
  const png_img = `/img/projects/${project_subtype}/${project_name}.png`;
  const jpg_img = `/img/projects/${project_subtype}/${project_name}.jpg`;
  const gif_img = `/img/projects/${project_subtype}/${project_name}.gif`;

  console.log(png_img, jpg_img, gif_img);

  const cwd = FileUtils.JoinPath(FileUtils.GetCwd(), "public");
  const img_path = // Check which image exists, in this order: PNG, JPG, GIF
    FileUtils.FileExists(FileUtils.JoinPath(cwd, png_img)) ? png_img :
      FileUtils.FileExists(FileUtils.JoinPath(cwd, jpg_img)) ? jpg_img :
        FileUtils.FileExists(FileUtils.JoinPath(cwd, gif_img)) ? gif_img :
          "/img/projects/placeholder.png";

  // Instead of PC, Mobile etc, we use the little cute icons instead...
  const platform_icons = MakePlatformIcons(platform);


  return (<>
    <div className="projectItemCard" key={project_name}>
      <Link href={details_page_url}>
        <img src={img_path} alt={alt_text} />

        <div className="infoContainer">
          <span className="title">{project_title}</span>
          <div className="rightContainer">
            <span className="platformIcons">{platform_icons}</span>
            <span className="year">{year_release}</span>
          </div>
        </div>
      </Link>
    </div>
  </>)
}