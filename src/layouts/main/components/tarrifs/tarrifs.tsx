// eslint-disable-next-line no-restricted-imports
import styles from "./tarrifs.module.scss";
import { Props } from "enums";
import Heading from "@components/heading/heading";

function Tarrifs() {
  return (
    <section id="tariffs" className={styles.container}>
      <Heading text={Props.Tariffs} />
    </section>
  );
}

export default Tarrifs;
