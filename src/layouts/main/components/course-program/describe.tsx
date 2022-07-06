// eslint-disable-next-line no-restricted-imports
import styles from "./describe.module.scss";

function Describe({
  heading,
  what,
  isDone,
}: {
  heading: string;
  what: string[];
  isDone?: boolean;
}) {
  return (
    <div className={styles.container}>
      <h3>{heading}</h3>
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
