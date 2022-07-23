// eslint-disable-next-line no-restricted-imports
import styles from "./about-us.module.scss";
import { Props } from "enums";
import Heading from "@components/heading/heading";
import user from "@assets/images/user.svg";
import zlata from "@assets/images/zlata.svg";

function AboutUs() {
  return (
    <div id="aboutUs" className={styles.container}>
      <section className={styles.section}>
        <Heading text={Props.AboutUs} />
        <div className={styles.firstBlock}>
          <div className={styles.leftSide}>
            <div className={styles.name}>
              <img src={user} alt="name" />
              <p>Злата Бочкарева</p>
            </div>
            <div className={styles.describe}>
              <div className={styles.experience}>
                <div className={styles.line}>
                  <div className={styles.dash}></div>
                  <div className={styles.circle}></div>
                  <div className={styles.dash}></div>
                </div>
                <p className={styles.text}>Более 4х лет практики</p>
              </div>
              <div className={styles.experience}>
                <div className={styles.line}>
                  <div className={styles.dash}></div>
                  <div className={styles.circle}></div>
                  <div className={styles.dash}></div>
                </div>
                <p className={styles.text}>Более 55 учеников</p>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.top}>
              <div className={styles.leftSide}>
                <div className={styles.name}>
                  <img src={user} alt="name" />
                  <p>Злата Бочкарева</p>
                </div>
                <div className={styles.describe}>
                  <div className={styles.experience}>
                    <div className={styles.line}>
                      <div className={styles.dash}></div>
                      <div className={styles.circle}></div>
                      <div className={styles.dash}></div>
                    </div>
                    <p className={styles.text}>Более 4х лет практики</p>
                  </div>
                  <div className={styles.experience}>
                    <div className={styles.line}>
                      <div className={styles.dash}></div>
                      <div className={styles.circle}></div>
                      <div className={styles.dash}></div>
                    </div>
                    <p className={styles.text}>Более 55 учеников</p>
                  </div>
                </div>
              </div>
              <p>
                Злата начала свое изучение английского в 14 лет самостоятельно.
                Этот путь был сложный и тернистый, но однозначно возможный.
                Спустя несколько лет она впервые начала пробовать заниматься с
                преподователями и покупать курсы связанные с английским языком,
                вскоре после её уровень языка поднялся до С1.
              </p>
            </div>
            <p>
              С1 К моменту лета 2022 года Злата обучила свыше 55 человек на
              индивидуальных занятиях, и теперь она готова разделить свои знания
              вместе с другими желающими точно так же как и она - выучить язык
              самостоятельно.
            </p>
          </div>
        </div>
        <div className={styles.secondBlock}>
          <div className={styles.heading}>
            <h3>Злата о целях проекта :</h3>
          </div>
          <div className={styles.believe}>
            <h3>Верь в себя!</h3>
          </div>
          <div className={styles.zlata}>
            <img src={zlata} alt="Zlata" />
          </div>
          <div className={styles.text}>
            <p>
              Когда я только начинала изучать язык, финансовое положение не
              позволяло взять преподавателя. Поэтому мне ничего не оставалось
              как начать учить все самой.
            </p>
            <p>
              Конечно часто что-то было непонятно, часто опускались руки, но
              когда у вас есть четкая цель для чего все это, энергия будет с
              вами до конца. Верьте в себя и свои силы несомтря ни на что, а я
              помогу вам в таком непростом деле как изучение нового языка.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
