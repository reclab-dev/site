import { useState } from "react";
import useRandomInterval from "../../hooks/useRandomInterval";

import { IMG_PATH } from "../../constants/paths";

const MutableSection = (props) => {
  const { bgImage, bgColor, dotsPath, children, id } = props;

  const [headerImg, setHeaderImg] = useState(`${IMG_PATH}${dotsPath}/1.svg`);

  let counter = 1;
  const randomImg = () => {
    if (dotsPath) {
      setHeaderImg(`${IMG_PATH}${dotsPath}/${counter++ % 7}.svg`);
    }
  };

  useRandomInterval(randomImg, 300, 1500);

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
          background-image: url(${headerImg}),
            ${"bgImage" in props ? `url(${bgImage})` : "none"};
          background-color: ${"bgColor" in props
            ? `var(--color-${bgColor})`
            : "#fff"};
          background-position: ${"bgPosition" in props ? bgPosition : "center"};
          background-repeat: "no-repeat";
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

export default MutableSection;
