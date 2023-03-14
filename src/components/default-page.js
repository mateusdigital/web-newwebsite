
import Head_       from "@/components/head";
import Header_     from "@/components/header";
import Nav_        from "@/components/nav";

export default function DefaultPage_({children}) {


    return (
        <>
            <Head_   />
            <Header_ />
            <Nav_    />


            {children}
        </>
    )
}
