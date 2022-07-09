// eslint-disable-next-line no-restricted-imports
import styles from "./after-training-you-will-be-able.module.scss";
import Heading from "@components/heading/heading";
import WhatWillBeAble from "@layouts/main/components/after-training-you-will-be-able/what-will-be-able/what-will-be-able";
import victory from "@assets/images/victory.png";
import { Props } from "enums";

function AfterTrainingYouWillBeAble() {
  return (
    <section className={styles.container}>
      <Heading text={Props.HeadingAfterTrainingYouWillBeAble} />
      <div className={styles.content}>
        <div className={styles.what}>
          <WhatWillBeAble
            text={Props.WhatWillBeAble1First}
            text2={Props.WhatWillBeAble1Second}
            number="01"
          />
          <WhatWillBeAble
            text={Props.WhatWillBeAble2First}
            text2={Props.WhatWillBeAble2Second}
            number="02"
            isSecond={true}
          />
          <WhatWillBeAble
            text={Props.WhatWillBeAble3First}
            text2={Props.WhatWillBeAble3Second}
            number="03"
          />
        </div>
        <div className={styles.center}>
          <img src={victory} alt="Victory" />
        </div>
        <div className={styles.what}>
          <WhatWillBeAble
            text={Props.WhatWillBeAble4First}
            text2={Props.WhatWillBeAble4Second}
            number="04"
            isLeft={false}
          />
          <WhatWillBeAble
            text={Props.WhatWillBeAble5First}
            text2={Props.WhatWillBeAble5Second}
            number="05"
            isLeft={false}
            isSecond={true}
          />
          <WhatWillBeAble
            text={Props.WhatWillBeAble6First}
            text2={Props.WhatWillBeAble6Second}
            number="06"
            isLeft={false}
          />
        </div>
      </div>
    </section>
  );
}

export default AfterTrainingYouWillBeAble;
