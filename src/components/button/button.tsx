// eslint-disable-next-line no-restricted-imports
import styles from "./button.module.scss";

function Button({ text }: { text: string }) {
  return <button className={styles.button}>{text}</button>;
}

export default Button;
