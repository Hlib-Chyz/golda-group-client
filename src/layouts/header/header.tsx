/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-restricted-imports
import styles from "./header.module.scss";
import heart from "@assets/images/heart.svg";
import basket from "@assets/images/basket.svg";
import { Languages } from "enums";
import { useEffect, useState } from "react";
import Subheader from "@layouts/header/subheader";
import TextLanguage from "@components/text-language/text-language";

function Header() {
  const navigation: { name: string; nameUa: string }[] = [
    {
      name: "О курсах",
      nameUa: "Про курси",
    },
    {
      name: "О нас",
      nameUa: "Про нас",
    },
    {
      name: "Тарифы",
      nameUa: "Тарифи",
    },
  ];

  const [isLanguageUa, setLanguageUa] = useState<boolean>(true);

  useEffect(() => {
    checkLanguage();
  }, []);

  function setLenguage(language: Languages): void {
    localStorage.setItem("language", language);
    checkLanguage();
  }

  function checkLanguage(): void {
    if (localStorage.getItem("language") === Languages.UA) {
      setLanguageUa(true);
      return;
    }
    setLanguageUa(false);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>Golda Group</div>
          <nav className={styles.nav}>
            <ul>
              {navigation.map(
                (infoNav: { name: string; nameUa: string }, index: number) => (
                  <li key={infoNav.name}>
                    {index === navigation.length - 1 ? (
                      <span className={styles.name}>
                        <TextLanguage
                          textRu={infoNav.name}
                          textUa={infoNav.nameUa}
                        />
                      </span>
                    ) : (
                      <>
                        <span className={styles.name}>
                          <TextLanguage
                            textRu={infoNav.name}
                            textUa={infoNav.nameUa}
                          />
                        </span>
                        <span className={styles.dash}></span>
                      </>
                    )}
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.languages}>
            <button
              onClick={() => setLenguage(Languages.UA)}
              className={isLanguageUa ? styles.active : ""}
            >
              {Languages.UA}
            </button>{" "}
            /{" "}
            <button
              onClick={() => setLenguage(Languages.RU)}
              className={isLanguageUa ? "" : styles.active}
            >
              {Languages.RU}
            </button>
          </div>
          <div className={styles.icons}>
            <button className={styles.heart}>
              <img src={heart} alt="heart" />
            </button>
            <button className={styles.basket}>
              <img src={basket} alt="basket" />
            </button>
          </div>
        </div>
      </header>
      <Subheader />
    </>
  );
}

export default Header;
