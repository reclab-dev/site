import useWindowSize from "../../hooks/useWindowSize";

const Bullets = (props) => {
  const { title, list, img, className } = props;

  const size = useWindowSize();

  return (
    <div className={`${className} ${size.width < 960 ? "col" : ""}`}>
      <img src={img} />
      <div className="col">
        <h4>{title}</h4>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        div {
          max-width: 90vw;
          display: flex;
          color: var(--color-white);
          font-size: 1.2em;
          word-break: break-word;
          text-overflow: ellipsis;
        }

        .col {
          flex-direction: column;
        }

        h4 {
          font-size: 1.6em;
        }

        ul {
          list-style-type: "";
          padding: 0;
        }

        ul li {
          margin-left: 12px;
        }

        li::before {
          content: "•";
          color: var(--color-red);
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        img {
          width: 15vmin;
          margin: 50px;
        }
      `}</style>
    </div>
  );
};

export default Bullets;
