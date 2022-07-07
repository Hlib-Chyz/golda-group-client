// eslint-disable-next-line no-restricted-imports
import styles from "./describe.module.scss";
import { Props } from "enums";
import TextLanguage from "@components/text-language/text-language";

function Describe({
  heading,
  what,
  isDone,
}: {
  heading: Props;
  what: string[];
  isDone?: boolean;
}) {
  return (
    <div className={styles.container}>
      <h3>
        <TextLanguage prop={heading} />
      </h3>
      <ul>
        {what.map((item: string) => (
          <li className={isDone ? styles.done : ""} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Describe;
