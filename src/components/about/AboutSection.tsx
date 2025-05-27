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
//  File      : about-section.js                                              //
//  Project   : new-website                                                   //
//  Date      : 2023-03-15                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2023 - 2025                                  //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

//
// Component
//

type AboutSectionProps = {
  title: string;
  photo: string;
  children?: any
};

// -----------------------------------------------------------------------------
export function AboutSection({ title, photo, children }: AboutSectionProps) {

  const photo_url = `/img/about/${photo}.png`;
  return (<>
    <section>
      <h2>{title}</h2>
      <img className="aboutPageHeaderImage" src={photo_url} />
      <div class="about-section-text">
        {children}
      </div>
    </section>
  </>);
}


// -----------------------------------------------------------------------------
(AboutSection as any).__location = import.meta.url;
export default AboutSection;