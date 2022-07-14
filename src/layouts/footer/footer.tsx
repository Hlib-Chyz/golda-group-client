// eslint-disable-next-line no-restricted-imports
import styles from "./footer.module.scss";
import { NavLink } from "react-router-dom";
import email from "@assets/images/email.svg";
import mastercard from "@assets/images/mastercard.svg";
import visa from "@assets/images/visa.svg";
import { useEffect, useState } from "react";
import TextLanguage from "@components/text-language/text-language";
import { Props } from "enums";

function Footer() {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setCurrentPath(window.location.pathname.substring(1));
  }, []);

  function setCurrentPathAndMoveToTop(path: string): void {
    setCurrentPath(path);
    window.scroll({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <NavLink
                onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
                to="/"
              >
                Golda Group
              </NavLink>
            </div>
            <div className={styles.email}>
              <img src={email} alt="email" />
              <p>goldagrooup@gmail.com</p>
            </div>
            <div className={styles.namesCards}>
              <img src={visa} alt="Visa" />
              <img src={mastercard} alt="MasterCard" />
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
        <div className={styles.contractsLinks}>
          <NavLink
            className={currentPath === "contacrtOffer" ? styles.active : ""}
            onClick={() => setCurrentPathAndMoveToTop("contacrtOffer")}
            to="/contacrtOffer"
          >
            <TextLanguage prop={Props.ContractOffer} />
          </NavLink>
          <span className={styles.dash}></span>
          <NavLink
            className={currentPath === "privacyPolicy" ? styles.active : ""}
            onClick={() => setCurrentPathAndMoveToTop("privacyPolicy")}
            to="/privacyPolicy"
          >
            <TextLanguage prop={Props.PrivacyPolicy} />
          </NavLink>
          <span className={styles.dash}></span>
          <NavLink
            className={currentPath === "deliveryPayment" ? styles.active : ""}
            onClick={() => setCurrentPathAndMoveToTop("deliveryPayment")}
            to="/deliveryPayment"
          >
            <TextLanguage prop={Props.ShippingAndPayment} />
          </NavLink>
        </div>
        <div className={styles.dash}></div>
        <div className={styles.bottom}>
          <p> Copyright to Golda Group - 2022. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
