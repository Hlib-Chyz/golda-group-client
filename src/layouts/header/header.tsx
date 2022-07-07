/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-restricted-imports
import styles from "./header.module.scss";
import heart from "@assets/images/heart.svg";
import basket from "@assets/images/basket.svg";
import { Languages, Props } from "enums";
import { useContext, useEffect, useState } from "react";
import TextLanguage from "@components/text-language/text-language";
import { Context } from "index";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  const { language } = useContext(Context)!;

  const navigation: { prop: string; href: string }[] = [
    {
      prop: Props.AboutCourse,
      href: "afterTrainingYouWillBeAble",
    },
    {
      prop: Props.AboutUs,
      href: "afterTrainingYouWillBeAbl",
    },
    {
      prop: Props.Tariffs,
      href: "afterTrainingYouWillBeAble",
    },
  ];

  const [isScrollStarted, setScrollStarted] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 0) {
      setScrollStarted(true);
    } else {
      setScrollStarted(false);
    }
  }

  return (
    <>
      <header
        className={
          isScrollStarted
            ? styles.backgroundWhite + " " + styles.header
            : styles.header
        }
      >
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <div className={styles.logo}>Golda Group</div>
            <nav className={styles.nav}>
              <ul>
                {navigation.map(
                  (
                    { prop, href }: { prop: string; href: string },
                    index: number
                  ) => (
                    <li key={prop}>
                      {index === navigation.length - 1 ? (
                        <a href={"#" + href} className={styles.name}>
                          <TextLanguage prop={prop} />
                        </a>
                      ) : (
                        <>
                          <a href={"#" + href} className={styles.name}>
                            <TextLanguage prop={prop} />
                          </a>
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
                onClick={() => language.setLanguage(Languages.UA)}
                className={
                  language.getLanguage === Languages.UA ? styles.active : ""
                }
              >
                {Languages.UA}
              </button>{" "}
              /{" "}
              <button
                onClick={() => language.setLanguage(Languages.RU)}
                className={
                  language.getLanguage === Languages.UA ? "" : styles.active
                }
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
        </div>
      </header>
    </>
  );
});

export default Header;
