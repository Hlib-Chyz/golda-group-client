// eslint-disable-next-line no-restricted-imports
import styles from "./for-whom-training.module.scss";
import Heading from "@components/heading/heading";
import girlPicture from "@assets/images/girl-picture.png";
import youtubePicture from "@assets/images/youtube-picture.png";
import travelPicture from "@assets/images/travel-picture.png";
import Button from "@components/button/button";
import Reason from "@layouts/main/components/for-whom-training/reason/reason";
import { Props } from "enums";

function ForWhomTraining() {
  return (
    <section id="afterTrainingYouWillBeAble" className={styles.container}>
      <Heading text={Props.HeadingForWhomeTraining} />
      <div className={styles.reasons}>
        <Reason text={Props.Reason1} img={girlPicture} />
        <Reason text={Props.Reason2} img={travelPicture} />
        <Reason text={Props.Reason3} img={youtubePicture} />
      </div>
      <Button text={Props.StartLearning} />
    </section>
  );
}

export default ForWhomTraining;
