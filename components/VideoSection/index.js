const VideoSection = (props) => {
  const { bgImage, bgColor, children, id } = props;

  return (
    <section id={id}>
      <video autoPlay muted loop>
        <source src="assets/dots.mp4" type="video/mp4" />
      </video>
      <div>{children}</div>

      <style jsx>{`
        section {
          min-height: 100vh;
          max-height: fit-content;
          width: 100%;
          overflow: hidden;
        }

        video {
          position: absolute;
          height: 100vh;
          width: 100%;
          object-fit: cover;
          z-index: -1;
        }

        div {
          min-height: 100vh;
          max-height: fit-content;
          width: 100%;
          padding: 7vh 7vw;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          grid-auto-flow: row;
          gap: 10px;
          justify-items: stretch;
          align-items: center;
          background-size: cover;
        }
      `}</style>
    </section>
  );
};

export default VideoSection;
