/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-restricted-imports
import styles from "./header.module.scss";
import { Languages, Props } from "enums";
import { RefObject, useContext, useEffect, useState } from "react";
import TextLanguage from "@components/text-language/text-language";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import { Refs } from "App";
import { NavLink } from "react-router-dom";

const Header = observer(({ refs }: { refs: Refs }) => {
  const { language } = useContext(Context)!;

  const navigation: {
    prop: string;
    ref: RefObject<HTMLDivElement>;
  }[] = [
    {
      prop: Props.AboutCourse,
      ref: refs.courseProgramRef,
    },
    {
      prop: Props.AboutUs,
      ref: refs.aboutUsRef,
    },
    {
      prop: Props.Tariffs,
      ref: refs.tariffsRef,
    },
  ];

  const [isScrollStarted, setScrollStarted] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    setScrollStarted(window.pageYOffset > 0);
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
            <div className={styles.logo}>
              <NavLink
                onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
                to="/"
              >
                Golda Group
              </NavLink>
            </div>
            <nav className={styles.nav}>
              <ul>
                {navigation.map(
                  (
                    {
                      prop,
                      ref,
                    }: {
                      prop: string;
                      ref: RefObject<HTMLDivElement>;
                    },
                    index: number
                  ) => (
                    <li key={prop}>
                      {index === navigation.length - 1 ? (
                        <a
                          onClick={() =>
                            ref.current?.scrollIntoView({ behavior: "smooth" })
                          }
                          className={styles.name}
                        >
                          <TextLanguage prop={prop} />
                        </a>
                      ) : (
                        <>
                          <a
                            onClick={() =>
                              ref.current?.scrollIntoView({
                                behavior: "smooth",
                              })
                            }
                            className={styles.name}
                          >
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
          </div>
        </div>
      </header>
    </>
  );
});

export default Header;
