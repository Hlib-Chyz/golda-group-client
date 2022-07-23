/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-restricted-imports
import styles from "./modal-choose-tariff.module.scss";
import Button from "@components/button/button";
import Dropdown from "@components/dropdown/dropdown";
import {
  FormatOfStudyEnum,
  LanguageOfStudyEnum,
  LevelOfStudyEnum,
  Props,
} from "enums";
import { Context } from "index";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import cross from "@assets/images/cross.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "32px",
    backgroundColor: "#E1F5FF",
    border: "none",
    padding: "64px",
  },
};

function ModalChooseTariff({
  isOpen,
  setOpen,
  formatProp,
}: {
  isOpen: boolean;
  setOpen: Function;
  formatProp: FormatOfStudyEnum;
}) {
  const { courseParameters } = useContext(Context)!;

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const [format, setFormat] = useState<FormatOfStudyEnum | null>(null);
  const [language, setLanguage] = useState<LanguageOfStudyEnum>(
    LanguageOfStudyEnum.English
  );
  const [level, setLevel] = useState<LevelOfStudyEnum>(LevelOfStudyEnum.A1A2);

  const [checkboxContractOffer, setCheckboxContractOffer] =
    useState<boolean>(false);
  const [checkboxPrivacyPolicy, setCheckboxPrivacyPolicy] =
    useState<boolean>(false);

  const [showError, setShowError] = useState<boolean>(false);

  const [levels, setLevels] = useState<{ id: LevelOfStudyEnum; prop: Props }[]>(
    [
      { id: LevelOfStudyEnum.A1A2, prop: Props.A1A2 },
      { id: LevelOfStudyEnum.B1, prop: Props.B1 },
      { id: LevelOfStudyEnum.B2, prop: Props.B2 },
    ]
  );
  const [languages, setLanguages] = useState<
    { id: LanguageOfStudyEnum; prop: Props }[]
  >([
    { id: LanguageOfStudyEnum.English, prop: Props.English },
    { id: LanguageOfStudyEnum.Deutsch, prop: Props.Deutsch },
    { id: LanguageOfStudyEnum.French, prop: Props.French },
  ]);

  useEffect(() => {
    setIsOpen(isOpen);
    setFormat(formatProp);
    if (formatProp === FormatOfStudyEnum.TutorialWithZlata) {
      setLanguages([{ id: LanguageOfStudyEnum.English, prop: Props.English }]);
    }
    if (formatProp === FormatOfStudyEnum.TutorialWithTeacher) {
      setLevels([
        { id: LevelOfStudyEnum.A1A2, prop: Props.A1A2 },
        { id: LevelOfStudyEnum.B1, prop: Props.B1 },
      ]);
    }
  }, [isOpen, formatProp]);

  useEffect(() => {
    if (format === FormatOfStudyEnum.Textbook) {
      if (
        [LanguageOfStudyEnum.Deutsch, LanguageOfStudyEnum.French].includes(
          language
        )
      ) {
        if (level === LevelOfStudyEnum.B2) {
          setLevel(LevelOfStudyEnum.B1);
        }
        setLevels([
          { id: LevelOfStudyEnum.A1A2, prop: Props.A1A2 },
          { id: LevelOfStudyEnum.B1, prop: Props.B1 },
        ]);
      } else {
        setLevels([
          { id: LevelOfStudyEnum.A1A2, prop: Props.A1A2 },
          { id: LevelOfStudyEnum.B1, prop: Props.B1 },
          { id: LevelOfStudyEnum.B2, prop: Props.B2 },
        ]);
      }
    }
  }, [language]);

  function closeModal(): void {
    setIsOpen(false);
    setOpen(false);
  }

  function submitForm(e: any): void {
    if (!checkboxContractOffer || !checkboxPrivacyPolicy) {
      e.stopPropagation();
      e.preventDefault();
      setShowError(true);
      return;
    }

    setIsOpen(false);
    courseParameters.setCourseParameters({
      level,
      format: format!,
      language,
    });
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      appElement={document.getElementById("root") || undefined}
    >
      <button className={styles.cross} onClick={closeModal}>
        <img src={cross} alt="cross" />
      </button>
      <div className={styles.container}>
        <form>
          <div className={styles.item}>
            <label className={styles.label}>
              <p>Яку мову бажаєте ?</p>
            </label>
            <Dropdown
              prop={Props[language]}
              setter={(language: LanguageOfStudyEnum) => setLanguage(language)}
              formats={languages}
              backgroundColor="white"
              padding="26px 36px"
              width="353px"
              marginItem="6px 0"
              colorText="#080808"
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>
              <p>Який рівень бажаєте ?</p>
            </label>
            <Dropdown
              prop={Props[level]}
              setter={(level: LevelOfStudyEnum) => setLevel(level)}
              formats={levels}
              backgroundColor="white"
              padding="26px 36px"
              width="353px"
              marginItem="6px 0"
              colorText="#080808"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <NavLink style={{ color: "#080808" }} to="/orderForm">
              <Button
                customStyle={{
                  width: "225px",
                  height: "70px",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#0A0808",
                  padding: "0",
                  marginBottom: "73px",
                }}
                onClick={(e: any) => submitForm(e)}
                text={Props.Сheckout}
              />
            </NavLink>
          </div>
          <CheckboxWithLabel
            text="Я погоджуюсь з умовами договору - оферти"
            id="1"
            customStyle={{
              marginBottom: "24px",
            }}
            messageError="Жмякни"
            value={checkboxContractOffer}
            setValue={setCheckboxContractOffer}
            isShowErrorMessage={showError && !checkboxContractOffer}
          />
          <CheckboxWithLabel
            text="Я погоджуюсь з умовами політики конфіденційності"
            id="2"
            messageError="Жмякни"
            value={checkboxPrivacyPolicy}
            setValue={setCheckboxPrivacyPolicy}
            isShowErrorMessage={showError && !checkboxPrivacyPolicy}
          />
        </form>
      </div>
    </Modal>
  );
}

export default ModalChooseTariff;

function CheckboxWithLabel({
  id,
  text,
  customStyle,
  messageError,
  isShowErrorMessage,
  value,
  setValue,
}: {
  id: string;
  text: string;
  messageError: string;
  value: boolean;
  setValue: Function;
  isShowErrorMessage: boolean;
  customStyle?: { [key: string]: string };
}) {
  return (
    <div className={styles.checkboxWithLabel} style={customStyle}>
      <input
        checked={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.checked)
        }
        id={id}
        type="checkbox"
      />
      <label htmlFor={id}>{text}</label>
      {isShowErrorMessage ? (
        <p
          style={{
            paddingTop: "5px",
            fontWeight: "500",
            fontSize: "13px",
            color: "#ff4d4d",
            position: "absolute",
          }}
        >
          {messageError}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
