import { render } from "preact-render-to-string";
import { JSX } from "preact";
import { ILogger } from "../libs/mdweb/source/Logger";



// -----------------------------------------------------------------------------
export function RenderPage(component: JSX.Element, log: ILogger): string {
  try {
    return "<!DOCTYPE html>\n" + render(component);
  }
  catch(error) {
    log.E("Error rendering page: ", error);
    log.E("Component: ", component);

    throw new Error(`Failed to render page: ${error}`);
  }
}
