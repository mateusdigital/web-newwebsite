import { useRouter } from "next/router";
import GamesInformation_ from "@/components/games/games-information";

export default function GetProjectPageInfo() {
    const router = useRouter();
    const { pathname } = router;
    const filename = pathname.substring(pathname.lastIndexOf('/') + 1);

    const info = GamesInformation_(filename);
    return info;
}