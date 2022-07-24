// eslint-disable-next-line no-restricted-imports
import styles from "./about-us.module.scss";
import { Props } from "enums";
import Heading from "@components/heading/heading";
import user from "@assets/images/user.svg";
import zlata from "@assets/images/zlata.svg";
import TextLanguage from "@components/text-language/text-language";

function AboutUs() {
  return (
    <div id="aboutUs" className={styles.container}>
      <section className={styles.section}>
        <Heading text={Props.AboutUs} />
        <div className={styles.firstBlock}>
          <div className={styles.leftSide}>
            <div className={styles.name}>
              <img src={user} alt="name" />
              <p>
                <TextLanguage prop={Props.ZlataBochkareva} />
              </p>
            </div>
            <div className={styles.describe}>
              <div className={styles.experience}>
                <div className={styles.line}>
                  <div className={styles.dash}></div>
                  <div className={styles.circle}></div>
                  <div className={styles.dash}></div>
                </div>
                <p className={styles.text}>
                  <TextLanguage prop={Props.Morethan4years} />
                </p>
              </div>
              <div className={styles.experience}>
                <div className={styles.line}>
                  <div className={styles.dash}></div>
                  <div className={styles.circle}></div>
                  <div className={styles.dash}></div>
                </div>
                <p className={styles.text}>
                  <TextLanguage prop={Props.Over55students} />
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.top}>
              <div className={styles.leftSide}>
                <div className={styles.name}>
                  <img src={user} alt="name" />
                  <p>
                    <TextLanguage prop={Props.ZlataBochkareva} />
                  </p>
                </div>
                <div className={styles.describe}>
                  <div className={styles.experience}>
                    <div className={styles.line}>
                      <div className={styles.dash}></div>
                      <div className={styles.circle}></div>
                      <div className={styles.dash}></div>
                    </div>
                    <p className={styles.text}>
                      <TextLanguage prop={Props.Morethan4years} />
                    </p>
                  </div>
                  <div className={styles.experience}>
                    <div className={styles.line}>
                      <div className={styles.dash}></div>
                      <div className={styles.circle}></div>
                      <div className={styles.dash}></div>
                    </div>
                    <p className={styles.text}>
                      <TextLanguage prop={Props.Over55students} />
                    </p>
                  </div>
                </div>
              </div>
              <p>
                <TextLanguage prop={Props.AboutUs1} />
              </p>
            </div>
            <p>
              <TextLanguage prop={Props.AboutUs2} />
            </p>
          </div>
        </div>
        <div className={styles.secondBlock}>
          <div className={styles.heading}>
            <h3>
              <TextLanguage prop={Props.AboutGoalOfProject} />
            </h3>
          </div>
          <div className={styles.believe}>
            <h3>
              <TextLanguage prop={Props.BelieveInYourself} />
            </h3>
          </div>
          <div className={styles.zlata}>
            <img src={zlata} alt="Zlata" />
          </div>
          <div className={styles.text}>
            <p>
              <TextLanguage prop={Props.AboutUs3} />
            </p>
            <p>
              <TextLanguage prop={Props.AboutUs4} />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
