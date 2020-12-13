const Footer = (props) => {
  const { children } = props;

  return (
    <footer>
      {children}
      <div className="contact-info">
        <div className="contact-info__title">
          <span>RECLAB</span>
          <span>Pesquisa, Cultura & Estratégia</span>
        </div>
        <div className="contact-info__address">
          <span>Rua Coronel Lucas de Oliveira, 505</span>
          <span>Salas 504, 505 e 506</span>
          <span>Bairro Mont Serrat, Porto Alegre - RS.</span>
        </div>
        <div className="contact-info__contact">
          <span>51 3328 4489</span>
          <span>contato@reclab.com.br</span>
        </div>
      </div>

      <style jsx>{`
        footer {
          min-height: 50vh;
          max-height: fit-content;
          width: 100%;
          padding: 7vh 7vw;
          background-color: var(--color-black);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          grid-auto-flow: row;
          gap: 10px;
          justify-items: stretch;
          align-items: center;
          place-items: center;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 250px;
          padding: 1.2em;
          width: 300px;
          color: var(--color-white);
          letter-spacing: 1px;
        }

        .contact-info > * {
          display: flex;
          flex-direction: column;
        }

        .contact-info__title span:first-child {
          text-transform: uppercase;
          font-weight: bold;
        }

        .contact-info__title span:nth-child(2) {
          color: var(--color-red);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
