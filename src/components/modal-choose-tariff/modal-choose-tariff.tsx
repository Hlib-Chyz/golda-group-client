import Button from "@components/button/button";
import Dropdown from "@components/dropdown/dropdown";
import {
  FormatOfStudyEnum,
  LanguageOfStudyEnum,
  LevelOfStudyEnum,
  Props,
} from "enums";
import { Context } from "index";
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "500px",
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

  useEffect(() => {
    setIsOpen(isOpen);
    setFormat(formatProp);
  }, [isOpen, formatProp]);

  function closeModal(): void {
    setIsOpen(false);
    setOpen(false);
  }

  function submitForm(): void {
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
      <h2>Какой язык и уровень изволите?</h2>
      <button onClick={closeModal}>крестик закрытия</button>
      <form>
        <Dropdown
          prop={Props[language]}
          setter={(language: LanguageOfStudyEnum) => setLanguage(language)}
          formats={[
            { id: LanguageOfStudyEnum.English, prop: Props.English },
            { id: LanguageOfStudyEnum.Deutsch, prop: Props.Deutsch },
            { id: LanguageOfStudyEnum.French, prop: Props.French },
          ]}
        />
        <Dropdown
          prop={Props[level]}
          setter={(level: LevelOfStudyEnum) => setLevel(level)}
          formats={[
            { id: LevelOfStudyEnum.A1A2, prop: Props.A1A2 },
            { id: LevelOfStudyEnum.B1, prop: Props.B1 },
            { id: LevelOfStudyEnum.B2, prop: Props.B2 },
          ]}
        />
        <NavLink to="/orderForm">
          <Button onClick={() => submitForm()} text={Props.StartLearning} />
        </NavLink>
      </form>
    </Modal>
  );
}

export default ModalChooseTariff;
