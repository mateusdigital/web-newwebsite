//----------------------------------------------------------------------------//
//                               *       +                                    //
//                         '                  |                               //
//                     ()    .-.,="``"=.    - o -                             //
//                           '=/_       \     |                               //
//                        *   |  '=._    |                                    //
//                             \     `=./`,        '                          //
//                          .   '=.__.=' `='      *                           //
//                 +                         +                                //
//                      O      *        '       .                             //
//                                                                            //
//  File      : certification-item-card.js                                    //
//  Project   : new-website                                                   //
//  Date      : 2023-08-11                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2023 - 2025                                  //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//
import { Link }  from "../components/Link";

//
// Component
//

// -----------------------------------------------------------------------------
type CardProps = {
  index: number;
  year: number;
  provider: string;
  name: string;
  displayName: string;
  imagePath: string;
};

// -----------------------------------------------------------------------------
export function Card({ index, year, provider, name, displayName, imagePath }: CardProps) {

  const page_detail_url=`/certifications/${name}`;
  const alt_text=`Image of ${name}`;

  const title = displayName.split("_").join(" ");

  return (
    <>
      <div className="certificationGridCard">
        <Link href={page_detail_url}>
          <div>

            <img src={imagePath} alt={alt_text} />
            <span className="certificationCardTitle">
            {index} - {title}

              </span>
          </div>
        </Link>
      </div>
    </>
  )
}
