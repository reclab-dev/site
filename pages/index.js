import Head from "next/head";
import Header from "../components/Header";
import Section from "../components/Section";
import MutableSection from "../components/MutableSection";
import Bullets from "../components/Bullets";
import Footer from "../components/Footer";

import { IMG_PATH, ICON_PATH } from "../constants/paths";

export default function Home() {
  const links = [
    { text: "O que nos move", anchor: "#o-que-nos-move" },
    { text: "Quem somos", anchor: "#quem-somos" },
    { text: "O que fazemos", anchor: "#o-que-fazemos" },
    { text: "Contato", anchor: "#contato" },
  ];

  const listDiag = [
    "Imagem e posicionamento de marca",
    "Pontos de contato e jornadas de experiência",
    "Contextos e tendências comportamentais",
    "Comunicação interna e cultura organizacional",
    "Análises e estudos quantitativas e qualitativas",
  ];

  const listEstrat = [
    "Construção de cenários futuros com foco em inovação",
    "Novas experiências para usuários, clientes e colaboradores",
    "Novos produtos e serviços",
    "Evolução e ressignificação de marcas e negócios",
  ];

  return (
    <div>
      <Head>
        <title>RECLAB</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=0.7" />
      </Head>

      <Header links={links}></Header>
      <main>
        <MutableSection
          bgImage={`${IMG_PATH}img-header.png`}
          dotsPath="headerDots"
        >
          <h1 className="" style={{ maxWidth: "330px" }}>
            Pesquisa, cultura <span className="font-red">&amp;</span> estratégia
          </h1>
        </MutableSection>

        <Section bgColor="sand" id="o-que-nos-move">
          <h2 style={{ maxWidth: "90vw" }}>
            Ajudamos pessoas e marcas{" "}
            <span className="font-red">a entenderem o mundo.</span>
          </h2>
        </Section>

        <Section bgImage={`${IMG_PATH}img-quem-somos.png`} id="quem-somos">
          <h2 className="font-white" style={{ maxWidth: "350px" }}>
            Pelas pessoas e para as pessoas.
          </h2>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p className="highlight">
              Somos um laboratório de comportamento que entende contextos e cria
              condições para que organizações sejam mais relevantes e
              inovadoras.
            </p>
            <p>
              Desde 1993 colaboramos com marcas e empreendedores na construção
              de novas realidades e soluções, sempre colocando as pessoas no
              centro, antecipando movimentos e gerando insights transformadores.
            </p>
          </div>
        </Section>

        <Section bgColor="black" id="o-que-fazemos">
          <Bullets
            className=""
            img={`${ICON_PATH}diagnostico-insights.svg`}
            title="Diagnóstico & insights"
            list={listDiag}
          />
          <Bullets
            className=""
            img={`${ICON_PATH}estrategia.svg`}
            title="Estratégia & transformação"
            list={listEstrat}
          />
        </Section>

        <Section
          bgColor="white"
          bgImage={`${ICON_PATH}grafismo.svg`}
          bgPosition="-400px -400px"
          style={{ backgroundPosition: "center" }}
        >
          <h3
            className=""
            style={{ alignSelf: "start", margin: "8vmin 0 4vmin 0" }}
          >
            Com quem já colaboramos
          </h3>
        </Section>
        <Footer>
          <iframe
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0, filter: "grayscale(100%)" }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBrQs_MUC_Y4smIa7jtA-hrSgTqqohwsKA&q=reclab"
            allowFullScreen
          ></iframe>
        </Footer>
      </main>
    </div>
  );
}
