// eslint-disable-next-line no-restricted-imports
import styles from "./dropdown.module.scss";
import arrow from "@assets/images/arrow.svg";

function Dropdown({ text }: { text: string }) {
  return (
    <div className={styles.dropdown}>
      <p>{text}</p>
      <div className={styles.arrow}>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
}

export default Dropdown;
