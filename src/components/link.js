import Link from 'next/link'


export default function Link_({ className, href, children }) {
  const is_abs_url = href.startsWith("http")
  if(is_abs_url) {
    return (<Link className={className} href={href}>{children}</Link>);
  }

  const has_extension = href.endsWith('.html');
  if(has_extension) {
    return (<Link className={className} href={href}>{children}</Link>);
  }

  if (process.env.NODE_ENV === 'development') {
    // console.log("IS IN DEVELOPMENT");
    if(!has_extension) {
        href = href;
    }
  } else {
    if(!has_extension && href.length > 1) {
      href = href + ".html"
    }
  }

  return (<Link className={className} href={href}>{children}</Link>);
}