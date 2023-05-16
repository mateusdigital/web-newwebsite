import Link from 'next/link'


export default function Link_({className, active, href, children}) {

    if (!href.endsWith('.html') && !href.startsWith("http")) {
        if (process.env.NODE_ENV === 'development') {
            href = href; 
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