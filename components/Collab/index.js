import Image from "next/image";

import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const LOGOS_DIR = path.join(process.cwd(), "public", "assets", "logos");
  const logos = await fs.readdir(LOGOS_DIR);
  console.log(logos);

  return {
    props: {
      logos: logos.length,
    },
  };
}

const Collab = (props) => {
  const { id } = props;

  return (
    <div id={id}>
      <div className="collab">
        {new Array(16).fill(0).map((_, index) => {
          return (
            <img
              key={index}
              alt="Logo de colaborador"
              src={`assets/logos/logo-${index + 1}.png`}
              width={200}
              height={200}
            />
          );
        })}
      </div>

      <style jsx>{`
        .collab {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          height: fit-content;
          justify-content: center;
        }

        .collab__logo {
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default Collab;
