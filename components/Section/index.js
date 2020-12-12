import { IMG_PATH } from "../../constants/paths";

const Section = (props) => {
  const { bgImage, bgColor, children, id } = props;
  return (
    <section id={id}>
      {children}
      <style jsx>{`
        section {
          min-height: 100vh;
          max-height: fit-content;
          width: 100%;
          padding: 7vh 7vw;
          background-image: ${"bgImage" in props ? `url(${bgImage})` : "none"};
          background-color: ${"bgColor" in props
            ? `var(--color-${bgColor})`
            : "#fff"};
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

export default Section;
