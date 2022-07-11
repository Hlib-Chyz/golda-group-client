// eslint-disable-next-line no-restricted-imports
import styles from "./footer.module.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <NavLink to="/contacrtOffer">ДОГОВIР ОФЕРТИ</NavLink>
    </footer>
  );
}

export default Footer;
