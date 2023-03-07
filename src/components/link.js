import Link from 'next/link'

const Link_ = ({ href, ...rest }) => {
  if (!href.endsWith('.html')) {

    if (process.env.NODE_ENV === 'development') {
      href = href; // + '.html'
    }
    else {
      href = href + '.html'
    }
  }

  return <Link href={href} {...rest} />
}

export default Link_