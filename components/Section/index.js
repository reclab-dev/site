const Section = (props) => {
  const {
    bgImage,
    bgColor,
    bgPosition,
    children,
    id,
    topBgImage,
    withoutGrid,
  } = props;

  return (
    <section id={id}>
      <div>{children}</div>

      <style jsx>{`
        section {
          min-height: 100vh;
          max-height: fit-content;
          width: 100%;
          overflow: hidden;
        }
        div {
          min-height: 100vh;
          max-height: fit-content;
          width: 100%;
          padding: 7vh 7vw;
          background-image: url(${topBgImage}),
            ${"bgImage" in props ? `url(${bgImage})` : "none"};
          background-color: ${"bgColor" in props
            ? `var(--color-${bgColor})`
            : "#fff"};
          background-position: ${"bgPosition" in props ? bgPosition : "center"};
          background-repeat: no-repeat;
          display: ${withoutGrid ? "block" : "grid"};
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

export default Section;
