import { Link }  from "../components/link";
import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import DemoPage_ from "../components/project-detail-page/demo-page";

export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <DemoPage_ info={info}>
        <section>
          <p>
            Inspired by the <a href="https://www.youtube.com/watch?v=ccYLb7cLB1I&ab_channel=TheCodingTrain">The Coding Train</a>,
            I created this version of Metaballs!
          </p>
        </section>
      </DemoPage_>
    </>
  )
}
