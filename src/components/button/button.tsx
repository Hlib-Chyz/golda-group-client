// eslint-disable-next-line no-restricted-imports
import styles from "./button.module.scss";
import TextLanguage from "@components/text-language/text-language";

function Button({
  text,
  customStyle,
  type = "button",
}: {
  text: string;
  customStyle?: { [key: string]: string };
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button type={type} style={customStyle} className={styles.button}>
      <TextLanguage prop={text} />
    </button>
  );
}

export default Button;
