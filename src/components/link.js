import Link from 'next/link'


export default function Link_({className, active, href, children}) {
    if (!href.endsWith('.html')) {
        if (process.env.NODE_ENV === 'development') {
            href = href; // + '.html'
        }
        else {
            href = href + '.html'
        }
    }

    return (
        <>
            <Link className={className} href={href}>{children}</Link>
        </>
    )
}