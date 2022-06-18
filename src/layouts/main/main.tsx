// eslint-disable-next-line no-restricted-imports
import styles from "./main.module.scss";
import GeneralSection from "@layouts/main/components/general-section/general-section";
import WhyWeAreTheBest from "@layouts/main/components/why-we-are-the-best/why-we-are-the-best";

function Main() {
  return (
    <div className={styles.main}>
      <GeneralSection />
      <WhyWeAreTheBest />
    </div>
  );
}

export default Main;
