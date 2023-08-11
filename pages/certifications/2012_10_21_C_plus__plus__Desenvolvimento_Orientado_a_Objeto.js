
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/Bradesco/2012_10_21_C_plus__plus__Desenvolvimento_Orientado_a_Objeto-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/Bradesco/2012_10_21_C_plus__plus__Desenvolvimento_Orientado_a_Objeto-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/Bradesco/2012_10_21_C++_Desenvolvimento_Orientado_a_Objeto.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
