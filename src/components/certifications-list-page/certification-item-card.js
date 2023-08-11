import Link_ from "@/components/link";

export default function Card_({ index, year, provider, name, display_name, img_path }) {

  const page_detail_url=`/certifications/${name}`;
  const alt_text=`Image of ${name}`;

  const title = display_name.split("_").join(" ");

  return (
    <>
      <div className="certificationGridCard">
        <Link_ href={page_detail_url}>
          <div>
            <img src={img_path} alt={alt_text} />
            {title}
            {/* <span className="certificationCardTitle"> */}

              {/* </span> */}
          </div>
        </Link_>
      </div>
    </>
  )
}
