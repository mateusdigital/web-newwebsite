import Link from 'next/link'

const Link_ = ({ active, href, ...rest }) => {
    const class_name= (active) ? "active" : "no-active";

    if (!href.endsWith('.html')) {
        if (process.env.NODE_ENV === 'development') {
            href = href; // + '.html'
        }
        else {
            href = href + '.html'
        }
    }

    return <Link className={class_name} href={href} {...rest} />
}

export default Link_