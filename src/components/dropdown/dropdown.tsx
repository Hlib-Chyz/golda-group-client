// eslint-disable-next-line no-restricted-imports
import styles from "./dropdown.module.scss";
import arrow from "@assets/images/arrow.svg";
import { Props } from "enums";
import TextLanguage from "@components/text-language/text-language";
import { useState } from "react";

function Dropdown({ prop, formats }: { prop: Props; formats: Props[] }) {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div onClick={() => setOpen(!isOpen)} className={styles.dropdown}>
        <p>
          <TextLanguage prop={prop} />
        </p>
        <div
          className={
            isOpen ? styles.arrowTop + " " + styles.arrow : styles.arrow
          }
        >
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      {isOpen ? (
        <div className={styles.items}>
          {formats.map((prop: Props) => (
            <div className={styles.item} key={prop}>
              <TextLanguage prop={prop} />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Dropdown;
