// eslint-disable-next-line no-restricted-imports
import styles from "./footer.module.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.dash}></div>
      <div className={styles.bottom}></div>
      <NavLink to="/contacrtOffer">ДОГОВIР ОФЕРТИ</NavLink>
    </footer>
  );
}

export default Footer;
