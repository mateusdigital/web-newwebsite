
export default function YTVideo_({video_id}) {

    const video_url =`https://www.youtube.com/embed/${video_id}?controls=0&autoplay=1&mute=1`
    return (
        <>
            <iframe
                src={video_url}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>
            </iframe>
    </>
  )
}
