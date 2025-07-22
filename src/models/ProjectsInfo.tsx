// -----------------------------------------------------------------------------
import DLCIcon from "../components/icons/download-solid";
import GameBoyIcon from "../components/icons/floppy-disk-solid";
// import MiddlewareIcon from "../components/icons/puzzle-piece-solid";
import MobileIcon from "../components/icons/mobile-screen-solid";
import PCIcon from "../components/icons/desktop-solid";
import PlaystationIcon from "../components/icons/playstation";
import RetroIcon from "../components/icons/floppy-disk-solid";
import SteamIcon from "../components/icons/steam";
import WebIcon from "../components/icons/code-solid";
import XboxIcon from "../components/icons/xbox";


import { FileUtils } from "../../libs/mdweb/source/FileUtils";
import { JsonUtils } from "../../libs/mdweb/source/JsonUtils";
import { Assert } from "../../libs/mdweb/source/Assert";
import { DefaultLogger, ILogger } from "../../libs/mdweb/source/Logger";




//
// Types
//

// -----------------------------------------------------------------------------
export interface Project {
  //
  project_name: string;
  project_title: string;
  short_project_title?: string;

  //
  project_type:
  | "tool"
  | "game"
  | "library"
  | "demo"
  | "app"
  | "web";

  project_subtype:
  | ""
  // Game
  | "game-professional"
  | "game-retro"
  | "game-personal"
  | "game-old"
  // Tool
  | "tool-vscode"
  | "tool-terminal"
  | "tool-game"
  // Theme
  | "theme-vscode"


  //
  project_license?: string;
  project_description: string;

  //
  year_start: number;
  year_end: number;
  year_release: number;

  //
  tech: string[];
  platform: string[];

  //
  //
  company?: string;
  role?: string;

  //
  is_playable_on_canvas?: boolean;
  youtube_video_id?: string;
  html?: [];

  //
  default_icon?: string;
}


type ListOProject = Project[];


//
//
//

// -----------------------------------------------------------------------------
class ProjectsInfo {
  projects: ListOProject;

  // ---------------------------------------------------------------------------
  constructor(log: ILogger = DefaultLogger) {
    const cwd = FileUtils.GetCwd();
    const projects_json_filepath = FileUtils.JoinPath(cwd, "data/projects/projects.json");
    log.D("Loading projects info from: ", projects_json_filepath);

    if (!FileUtils.FileExists(projects_json_filepath)) {
      Assert(false, `File projects.json not found - ${projects_json_filepath}`);
    }

    const text_data = FileUtils.ReadAllFile(projects_json_filepath);
    const json_data = JsonUtils.Deserialize(text_data);

    this.projects = json_data;
  }

  // ---------------------------------------------------------------------------
  FindProject(predicate: any): ListOProject {
    const projects = [];
    for (const project of this.projects) {
      if (predicate(project)) {
        projects.push(project);
      }
    }
    return projects;
  }
}


// -----------------------------------------------------------------------------
export function MakePlatformIcons(
  platforms: Array<string>,
  log: ILogger = DefaultLogger) {

  const icons = [];
  for (let i = 0; i < platforms.length; ++i) {
    const platform = platforms[i].trim().toLowerCase();

    if (false) {
      // empty...
    }
    else if (platform == "dlc") {
      icons.push(<DLCIcon />);
    }
    else if (platform == "gameboy") {
      icons.push(<GameBoyIcon />);
    }
    else if (platform == "mobile") {
      icons.push(<MobileIcon />);
    }
    else if (platform == "msdos") {
      icons.push(<RetroIcon />);
    }
    else if (platform == "pc") {
      icons.push(<PCIcon />);
    }
    else if (platform == "playstation") {
      icons.push(<PlaystationIcon />);
    }
    else if (platform == "retro") {
      icons.push(<RetroIcon />);
    }
    else if (platform == "steam") {
      icons.push(<SteamIcon />);
    }
    else if (platform == "web") {
      icons.push(<WebIcon />);
    }
    else if (platform == "xbox") {
      icons.push(<XboxIcon />);
    }
    else {
      log.Error(`Unknown platform icon: ${platform}`);
    }
  }

  return icons;
}


// //
// //
// //

let _info: any = null;
// -----------------------------------------------------------------------------
export function GetProjectsInfo(log: ILogger = DefaultLogger): ProjectsInfo {
  if (!_info) {
    log.D("Loading projects info...");
    _info = new ProjectsInfo(log);
  }

  return _info;
}
