// eslint-disable-next-line no-restricted-imports
import styles from "./after-training-you-will-be-able.module.scss";
import Heading from "@components/heading/heading";
import WhatWillBeAble from "@layouts/main/components/after-training-you-will-be-able/what-will-be-able/what-will-be-able";
import victory from "@assets/images/victory.png";

function AfterTrainingYouWillBeAble() {
  return (
    <section className={styles.container}>
      <Heading text="После обучения вы сможете" />
      <div className={styles.content}>
        <div className={styles.what}>
          <WhatWillBeAble text="Понимать все" text2="времена" number="01" />
          <WhatWillBeAble
            text="Побороть языковой"
            text2="барьер"
            number="02"
            isSecond={true}
          />
          <WhatWillBeAble text="Воспринимать" text2="на слух" number="03" />
        </div>
        <div className={styles.center}>
          <img src={victory} alt="Victory" />
        </div>
        <div className={styles.what}>
          <WhatWillBeAble
            text="Смотреть и читать"
            text2="в оригинале"
            number="04"
            isLeft={false}
          />
          <WhatWillBeAble
            text="Найти"
            text2="единомышленников"
            number="05"
            isLeft={false}
            isSecond={true}
          />
          <WhatWillBeAble
            text="Увеличить словарный"
            text2="запас"
            number="06"
            isLeft={false}
          />
        </div>
      </div>
    </section>
  );
}

export default AfterTrainingYouWillBeAble;
