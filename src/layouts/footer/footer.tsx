// eslint-disable-next-line no-restricted-imports
import styles from "./footer.module.scss";
import { NavLink } from "react-router-dom";
import email from "@assets/images/email.svg";
import mastercard from "@assets/images/mastercard.svg";
import visa from "@assets/images/visa.svg";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <NavLink to="/">Golda Group</NavLink>
            </div>
            <div className={styles.email}>
              <img src={email} alt="email" />
              <p>goldagrooup@gmail.com</p>
            </div>
            <div className={styles.contract}>
              <img src={visa} alt="Visa" />
              <img src={mastercard} alt="MasterCard" />
              <NavLink to="/contacrtOffer">Договор Оферты</NavLink>
            </div>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                <a
                  href="https://youtube.com/channel/UCR-4ROUrG080PPAv34yd75g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/channel/UCR-4ROUrG080PPAv34yd75g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://vm.tiktok.com/ZMNP3wYvK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.dash}></div>
        <div className={styles.bottom}>
          <p>Copyright to Golda Group - 2022. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
