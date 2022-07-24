/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-restricted-imports
import styles from "./subheader.module.scss";
import Button from "@components/button/button";
import bitcoinMining from "@assets/images/bitcoin-mining.svg";
import { Props } from "enums";
import TextLanguage from "@components/text-language/text-language";
import { RefObject } from "react";

function Subheader({ refTrffic }: { refTrffic: RefObject<HTMLDivElement> }) {
  return (
    <div className={styles.subheader}>
      <section className={styles.leftSide}>
        <h1>
          <TextLanguage prop={Props.HeadingH1First} />{" "}
          <TextLanguage prop={Props.HeadingH1Second} />
        </h1>
        <p>
          <TextLanguage prop={Props.SubHeadingH1First} />
          <br />
          <TextLanguage prop={Props.SubHeadingH1Second} />
        </p>
        <a
          onClick={() =>
            refTrffic.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <Button text={Props.StartLearning} />
        </a>
      </section>
      <div className={styles.rightSide}>
        <img src={bitcoinMining} alt="Zlata" />
      </div>
    </div>
  );
}

export default Subheader;
