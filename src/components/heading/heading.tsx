// eslint-disable-next-line no-restricted-imports
import styles from "./heading.module.scss";

function Heading({ text }: { text: string }) {
  return <h3 className={styles.heading}>{text}</h3>;
}

export default Heading;
