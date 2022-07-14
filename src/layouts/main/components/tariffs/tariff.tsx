// eslint-disable-next-line no-restricted-imports
import styles from "./tariff.module.scss";
import Button from "@components/button/button";
import { Props } from "enums";
import hryvnia from "@assets/images/hryvnia.svg";
import hryvniaSmall from "@assets/images/hryvnia-small.svg";
import { NavLink } from "react-router-dom";
import TextLanguage from "@components/text-language/text-language";

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
  whatHaveThisTariff: { value: string | Props; isNotProp?: boolean }[];
  backgroundColor: string;
  img: string;
  oldPrice: string;
  newPrice: string;
  whatDoesNotHaveThisTariff?: { value: string | Props; isNotProp?: boolean }[];
  heading?: Props;
  backgroundColorButton?: string;
}) {
  return (
    <section
      style={{ backgroundColor }}
      id="tariffs"
      className={styles.container}
    >
      <h4>
        BOOK{" "}
        <strong>
          <TextLanguage prop={heading} />
        </strong>
      </h4>
      <div className={styles.content}>
        <ul className={styles.top}>
          {whatHaveThisTariff.map(
            (item: { value: string | Props; isNotProp?: boolean }) => (
              <li>
                {item.isNotProp ? (
                  item.value
                ) : (
                  <TextLanguage prop={item.value} />
                )}
              </li>
            )
          )}
          {whatDoesNotHaveThisTariff?.map(
            (item: { value: string | Props; isNotProp?: boolean }) => (
              <li className={styles.inactive}>
                {item.isNotProp ? (
                  item.value
                ) : (
                  <TextLanguage prop={item.value} />
                )}
              </li>
            )
          )}
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
          <NavLink to="/orderForm">
            <Button
              customStyle={{
                padding: "20px 32px",
                fontSize: "16px",
                backgroundColor: backgroundColorButton ?? "",
              }}
              text={Props.ChooseTariff}
            />
          </NavLink>
          <img className={styles.imgEducation} src={img} alt="describe" />
        </div>
      </div>
    </section>
  );
}

export default Tariff;
