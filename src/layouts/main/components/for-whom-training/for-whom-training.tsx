// eslint-disable-next-line no-restricted-imports
import styles from "./for-whom-training.module.scss";
import Heading from "@components/heading/heading";

import girlPicture from "@assets/images/girl-picture.png";
import youtubePicture from "@assets/images/youtube-picture.png";
import travelPicture from "@assets/images/travel-picture.png";
import Button from "@components/button/button";
import Reason from "@layouts/main/components/for-whom-training/reason/reason";

function ForWhomTraining() {
  return (
    <section className={styles.container}>
      <Heading text="Обучение подойдет для тех, кто" />
      <div className={styles.reasons}>
        <Reason text="Хочет получить новую профессию" img={girlPicture} />
        <Reason
          text="Хочет свободно 
путешествовать по миру"
          img={travelPicture}
        />
        <Reason
          text="Хочет свободно 
путешествовать по миру"
          img={youtubePicture}
        />
      </div>
      <Button text="Начать обучение" />
    </section>
  );
}

export default ForWhomTraining;
