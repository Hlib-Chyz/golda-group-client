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
                Этот проект был создан в первую очередь чтобы помочь как можно
                большему количеству людей поверить в свои собственные силы и
                изучить иностранный язык.
              </p>
            </div>
            <p>
              Иностранный язык - это путь к возможностям и я помогу тебе достичь
              это! Будучи 14-летним подростком я начала изучать английский язык.
              Сначала это был не осознанный интерес к чему-то новому, после
              понимание, что это не так легко, как я себе представляла в начале,
              но жажда познания привела меня к тому, что сейчас я могу свободно
              общаться на иностранном языке и показать на своем примере, что это
              возможно.
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
              Я горжусь тем, что уже более 60 человек могут реализовывать свои
              планы и мечты , благодаря собственному стремлению и тем знаниям,
              которые они получили от меня.
            </p>
            <p>
              Этот проект я создавала базируясь на своем опыте. Зная, как это
              -самостоятельно изучать язык, какие ошибки могут быть допущены,
              какие методы точно работают - получился материал, который и тебе
              поможет изучить язык самостоятельно.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
