// eslint-disable-next-line no-restricted-imports
import styles from "./tariff.module.scss";
import Button from "@components/button/button";
import { Props } from "enums";
import hryvnia from "@assets/images/hryvnia.svg";
import hryvniaSmall from "@assets/images/hryvnia-small.svg";

function Tariff({
  whatHaveThisTariff,
  backgroundColor,
  img,
  oldPrice,
  newPrice,
  whatDoesNotHaveThisTariff,
  heading,
  backgroundColorButton,
}: {
  whatHaveThisTariff: string[];
  backgroundColor: string;
  img: string;
  oldPrice: string;
  newPrice: string;
  whatDoesNotHaveThisTariff?: string[];
  heading?: string;
  backgroundColorButton?: string;
}) {
  return (
    <section
      style={{ backgroundColor }}
      id="tariffs"
      className={styles.container}
    >
      <h4>
        BOOK <strong>{heading}</strong>
      </h4>
      <div className={styles.content}>
        <ul className={styles.top}>
          {whatHaveThisTariff.map((item: string) => (
            <li>{item}</li>
          ))}
          {whatDoesNotHaveThisTariff?.map((item: string) => (
            <li className={styles.inactive}>{item}</li>
          ))}
        </ul>
        <div className={styles.bottom}>
          <div className={styles.price + " " + styles.oldPrice}>
            <p>{oldPrice}</p>
            <div>
              <img src={hryvniaSmall} alt="hryvnia small" />
            </div>
          </div>
          <div className={styles.price + " " + styles.newPrice}>
            <p>{newPrice}</p>
            <div>
              <img src={hryvnia} alt="hryvnia" />
            </div>
          </div>
          <Button
            customStyle={{
              padding: "20px 32px",
              fontSize: "16px",
              backgroundColor: backgroundColorButton ?? "",
            }}
            text={Props.ChooseTariff}
          />
          <img className={styles.imgEducation} src={img} alt="describe" />
        </div>
      </div>
    </section>
  );
}

export default Tariff;
