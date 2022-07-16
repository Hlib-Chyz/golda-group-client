/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-restricted-imports
import styles from "./for-whom-training.module.scss";
import Heading from "@components/heading/heading";
import girlPicture from "@assets/images/girl-picture.png";
import youtubePicture from "@assets/images/youtube-picture.png";
import travelPicture from "@assets/images/travel-picture.png";
import Button from "@components/button/button";
import Reason from "@layouts/main/components/for-whom-training/reason/reason";
import { Props } from "enums";
import { RefObject } from "react";

function ForWhomTraining({
  refTrffic,
}: {
  refTrffic: RefObject<HTMLDivElement>;
}) {
  return (
    <section className={styles.container}>
      <Heading text={Props.HeadingForWhomeTraining} />
      <div className={styles.reasons}>
        <Reason text={Props.Reason1} img={girlPicture} />
        <Reason text={Props.Reason2} img={travelPicture} />
        <Reason text={Props.Reason3} img={youtubePicture} />
      </div>
      <a
        onClick={() =>
          refTrffic.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <Button text={Props.StartLearning} />
      </a>
    </section>
  );
}

export default ForWhomTraining;
