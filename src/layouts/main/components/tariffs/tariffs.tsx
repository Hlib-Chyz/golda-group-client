// eslint-disable-next-line no-restricted-imports
import styles from "./tariffs.module.scss";
import { Props } from "enums";
import Heading from "@components/heading/heading";
import Tariff from "@layouts/main/components/tariffs/tariff";
import homeEducation from "@assets/images/home-education.png";
import freelancer from "@assets/images/freelancer.png";
import datingChat from "@assets/images/dating-chat.png";

function Tariffs() {
  return (
    <section id="tariffs" className={styles.container}>
      <Heading text={Props.Tariffs} />
      <div className={styles.tariffs}>
        <Tariff
          oldPrice="690"
          newPrice="590"
          img={homeEducation}
          backgroundColor="#EBF8FF"
          whatHaveThisTariff={[
            "Грамматика уровней А1 - А2, В1, В2",
            "Упражнения",
            "Видео материалы",
          ]}
          whatDoesNotHaveThisTariff={["Чат с преподавателем", "Speaking Clubs"]}
        />
        <Tariff
          oldPrice="1490"
          newPrice="1290"
          img={freelancer}
          backgroundColor="rgba(255, 221, 189, 0.9)"
          whatHaveThisTariff={[
            "Грамматика уровней А1 - А2, В1, В2",
            "Упражнения",
            "Видео материалы",
            "Чат с преподавателем",
            "Speaking Clubs",
          ]}
          whatDoesNotHaveThisTariff={["2 Урока со Златой"]}
          heading="с учителем"
        />
        <Tariff
          oldPrice="3390"
          newPrice="2990"
          img={datingChat}
          backgroundColor="#FFA857"
          whatHaveThisTariff={[
            "Грамматика уровней А1 - А2, В1, В2",
            "Упражнения",
            "Видео материалы",
            "Чат со Златой",
            "Speaking Clubs",
            "2 Урока со Златой",
          ]}
          heading="со Златой"
          backgroundColorButton="#E1F5FF"
        />
      </div>
    </section>
  );
}

export default Tariffs;
