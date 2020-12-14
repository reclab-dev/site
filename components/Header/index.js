import { useEffect, useState } from "react";
import Link from "next/link";

import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Header.module.css";
import { IMG_PATH } from "../../constants/paths";
import useWindowSize from "../../hooks/useWindowSize";

import getScrollPercent from "../../utils/scroll";

const Header = ({ links }) => {
  const size = useWindowSize();
  const [color, setColor] = useState("sand");
  const [logo, setLogo] = useState("logo-fundo-preto.svg");

  useEffect(() => {
    const handleScroll = (event) => {
      // sand, black, white, sand, black...
      const percent = getScrollPercent();

      if (percent >= 38 && percent < 58) {
        setColor("black");
        setLogo("logo-fundo-branco.svg");
      } else if (percent >= 58 && percent < 78) {
        setColor("white");
        setLogo("logo-fundo-vermelho.svg");
      } else if (percent >= 70 && percent < 98) {
        setColor("sand");
        setLogo("logo-fundo-preto.svg");
      } else if (percent > 100) {
        setColor("black");
        setLogo("logo-fundo-branco.svg");
      } else {
        setColor("sand");
        setLogo("logo-fundo-preto.svg");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderIcons = () => {
    return (
      <div className={`${styles.icons} ${styles[color]}`}>
        <Link href="https://www.instagram.com/reclab_pesquisas/" passHref>
          <a target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </Link>
        <Link
          href="https://www.facebook.com/reclabconectantoinformacoes"
          passHref
        >
          <a target="_blank">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
        </Link>
      </div>
    );
  };

  const renderMenu = () => {
    if (size.width >= 1100) {
      return (
        <>
          <ul className={`${styles.links} ${styles[color]}`}>
            {links.map((link, index) => {
              return (
                <Link key={index} href={link.anchor} passHref>
                  <a>
                    <li>{link.text}</li>
                  </a>
                </Link>
              );
            })}
          </ul>
          {renderIcons()}
        </>
      );
    } else {
      // return (
      //   <Menu right customBurgerIcon={<FontAwesomeIcon icon={faBars} />}>
      //     <ul className={styles.hamburgerLinks}>
      //       {links.map((link, index) => {
      //         return (
      //           <Link key={index} href={link.anchor} passHref>
      //             <a>
      //               <li>{link.text}</li>
      //             </a>
      //           </Link>
      //         );
      //       })}
      //     </ul>
      //   </Menu>
      // );
    }
  };

  return (
    <header>
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <a>
            <img className={styles.logo} src={`${IMG_PATH}${logo}`} />
          </a>
        </Link>
        {renderMenu()}
      </nav>
    </header>
  );
};

export default Header;
