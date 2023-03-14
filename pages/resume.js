import Head_            from "@/components/head";
import Header_          from "@/components/header";
import Nav_             from "@/components/nav";
import ProjectItemCard_ from "@/components/project-item-card";

export default function Games() {
  return (
    <>
        <Head_ />

        <Header_ />
        <Nav_ />

        <main className="resume">
            <iframe src="/html/resume.html" frameborder="0"></iframe>
        </main>
    </>
  )
}
