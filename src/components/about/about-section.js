export default function AboutSection_({title, photo, children}) {

    const photo_url = `/img/about/${photo}.png`;
    return (
        <>
         <section>
                <h2>{title}</h2>
                <hr />
                <img className="header-img" src={photo_url}/>
                <div class="about-section-text">
                    {children}
                </div>
            </section>
        </>
    )
}