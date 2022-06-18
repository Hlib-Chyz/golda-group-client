// eslint-disable-next-line no-restricted-imports
import styles from "./why-we-are-the-best.module.scss";
import Reason from "@layouts/main/components/why-we-are-the-best/components/reason/reason";
import brainstorming from "@assets/images/brainstorming.svg";
import surfing from "@assets/images/surfing.svg";
import ranking from "@assets/images/ranking.svg";

function WhyWeAreTheBest() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h3>Почему мы лучшие?</h3>
        <div className={styles.reasons}>
          <Reason
            img={ranking}
            heading="Возможности"
            text="Ты сможешь учиться, работать и развиваться в других странах"
          />
          <Reason
            img={brainstorming}
            heading="Коммуникация"
            text="Ты сможешь начать говорить и понимать других с новым языком"
          />
          <Reason
            img={surfing}
            heading="Путешествия"
            text="Ты сможешь комфортно путешествовать без границ"
          />
        </div>
      </section>
    </div>
  );
}

export default WhyWeAreTheBest;
