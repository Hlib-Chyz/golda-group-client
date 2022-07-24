/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-restricted-imports
import styles from "./modal-menu.module.scss";
import cross from "@assets/images/cross.svg";
import { observer } from "mobx-react-lite";
import { Languages } from "enums";
import { Context } from "index";
import { RefObject, useContext } from "react";
import TextLanguage from "@components/text-language/text-language";

const ModalMenu = observer(
  ({
    navigation,
  }: {
    navigation: {
      prop: string;
      ref: RefObject<HTMLDivElement>;
    }[];
  }) => {
    const { language } = useContext(Context)!;
    return (
      <div className={styles.container}>
        <button className={styles.cross}>
          <img src={cross} alt="cross" />
        </button>
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
    );
  }
);

export default ModalMenu;
