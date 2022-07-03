/* eslint-disable react-hooks/exhaustive-deps */
import { Languages } from "enums";
import { useEffect, useState } from "react";

function TextLanguage({ textRu, textUa }: { textRu: string; textUa: string }) {
  const [isLanguageUa, setLanguageUa] = useState<string>();
  useEffect(() => {
    setLanguageUa(localStorage.getItem("language")!);
  }, [localStorage.getItem("language")]);
  return <>{isLanguageUa === Languages.UA ? textUa : textRu}</>;
}

export default TextLanguage;
