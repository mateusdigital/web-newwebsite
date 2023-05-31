import Link from 'next/link'


export default function Link_({ className, href, children }) {

  if (process.env.NODE_ENV === 'development') {
    const has_extension = href.endsWith('.html');
    const has_http      = href.startsWith("http");

    if(has_http == false) {
      if (has_extension == false) {
        console.log("Normal:", href);
        href = href;
      } else {
        console.log("----> ", href);
        href = href + '.html'
      }
    }
  }

  return (
    <>
      <Link className={className} href={href}>{children}</Link>
    </>
  )
}