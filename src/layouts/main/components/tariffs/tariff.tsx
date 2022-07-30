/* eslint-disable indent */
// eslint-disable-next-line no-restricted-imports
import styles from "./tariff.module.scss";
import Button from "@components/button/button";
import { FormatOfStudyEnum, Props } from "enums";
import hryvnia from "@assets/images/hryvnia.svg";
import hryvniaSmall from "@assets/images/hryvnia-small.svg";
import TextLanguage from "@components/text-language/text-language";
import ModalChooseTariff from "@components/modal-choose-tariff/modal-choose-tariff";
import { useState } from "react";

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
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

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
              <li key={item.value}>
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
              <li key={item.value} className={styles.inactive}>
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
          <Button
            onClick={() => setOpenModal(true)}
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
      <ModalChooseTariff
        setOpen={(e: boolean) => setOpenModal(e)}
        isOpen={isOpenModal}
        formatProp={
          newPrice === "690"
            ? FormatOfStudyEnum.Textbook
            : newPrice === "1490"
            ? FormatOfStudyEnum.TutorialWithTeacher
            : FormatOfStudyEnum.TutorialWithZlata
        }
      />
    </section>
  );
}

export default Tariff;
