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
  what: Props[];
  isDone?: boolean;
}) {
  return (
    <div className={styles.container}>
      <h3>
        <TextLanguage prop={heading} />
      </h3>
      <ul>
        {what.map((item: Props) => (
          <li className={isDone ? styles.done : ""} key={item}>
            <TextLanguage prop={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Describe;
