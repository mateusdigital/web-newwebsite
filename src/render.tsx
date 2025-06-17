import { render } from "preact-render-to-string";
import { JSX } from "preact";



// -----------------------------------------------------------------------------
export function RenderPage(component: JSX.Element): string {
  return "<!DOCTYPE html>\n" + render(component);
}
