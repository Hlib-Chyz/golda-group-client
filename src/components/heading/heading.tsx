// eslint-disable-next-line no-restricted-imports
import styles from "./heading.module.scss";
import TextLanguage from "@components/text-language/text-language";

function Heading({ text }: { text: string }) {
  return (
    <h3 className={styles.heading}>
      <TextLanguage prop={text} />
    </h3>
  );
}

export default Heading;
