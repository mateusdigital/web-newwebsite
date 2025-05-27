import PlayIcon from "../components/icons/play-solid"

export default function CallToPlayButton_({ info, children }) {
  const name = info.name;
  const url  = `https://mateus.digital/${name}`;

  return (
    <>
      <a className="button-call-to-play-online center" href={url}>
        <PlayIcon/> Play online
        {children}
      </a>
    </>
  )
}
