/* eslint-disable no-restricted-imports */
import styles from "../contract-offer/contract-offer.module.scss";
import stylesCurrent from "./delivery-payment.module.scss";

function DeliveryPayment() {
  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>Оплата. Доставка.</h3>
      <div className={styles.dash}></div>
      <p className={stylesCurrent.text}>
        Друзі, відправка книги здійснюється протягом 1 дня з моменту оплати
        замовлення. Матеріал відправляється за допомогою: електронної пошти або
        Telegram. Відправка здійснюється після повної сплати!
      </p>
      <p className={stylesCurrent.text}>Способи оплати:</p>
      <p className={stylesCurrent.text}>
        1. Банківський переказ на картку MonoBank;
      </p>
      <p className={stylesCurrent.text}>
        2. Оплата через LiqPay - швидкі та безпечні платежі;
      </p>
      <p className={stylesCurrent.text}>Доставка</p>
      <p className={stylesCurrent.text}>
        Доставка безкоштовна на електронну пошту.
      </p>
      <p className={stylesCurrent.text}>ПОВЕРНЕННЯ ТА ОБМІН</p>
      <p className={stylesCurrent.text}>Товар поверненню не підлягає.</p>
    </section>
  );
}

export default DeliveryPayment;
