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

    const active_class_name = (active) ? "active" : "no-active";
    const modified_class_name = `${className} ${active_class_name}`;


    return (
        <>
            <Link className={modified_class_name} href={href}>{children}</Link>
        </>
    )
}