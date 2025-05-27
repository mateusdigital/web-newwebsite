
export default function DemoIframe_({ name }) {
  name = name.trim();
  const url = `https://mateus.digital/${name}`;

  return (
    <>
      <div className="proj-canvas-container">
        <iframe src={url}></iframe>
      </div>
    </>
  );
}