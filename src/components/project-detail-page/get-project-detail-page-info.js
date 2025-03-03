// -----------------------------------------------------------------------------
import {useRouter} from "next/router";
// -----------------------------------------------------------------------------
import GamesInformation_ from "@/components/games/games-information";

//
//
//

// -----------------------------------------------------------------------------
export default function GetProjectPageInfo(name)
{
  if (!name) {
    const router     = useRouter();
    const {pathname} = router;
    const filename   = pathname.substring(pathname.lastIndexOf('/') + 1);

    name = filename;
  }

  const info = GamesInformation_(name);
  return info;
}
