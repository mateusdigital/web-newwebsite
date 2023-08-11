import Link_ from "@/components/link";

export default function ProjectItemCard_({ path }) {

  const provider = path.split("/")[0];
  const filename = path.split("/")[1];

  const year  = filename.split("_")[0];
  const month = filename.split("_")[1];
  const day   = filename.split("_")[2];

  const name = filename.split("_").splice(3, 1000).join(" ");

  const page_detail_url=`/certifications/${filename}`;
  const img_path=`res/certifications/${provider}/${filename}-thumb-1.png`;
  const alt_text=`Image of ${name}`;

  const title = name;

  return (
    <>
      <div className="certificationGridCard">
        <Link_ href={page_detail_url}>
          <div>
            <img src={img_path} alt={alt_text} />
            <span className="certificationCardTitle">{name}</span>
          </div>
        </Link_>
      </div>
    </>
  )
}
