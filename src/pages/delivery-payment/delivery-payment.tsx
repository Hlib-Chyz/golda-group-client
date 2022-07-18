/* eslint-disable no-restricted-imports */
import styles from "../contract-offer/contract-offer.module.scss";
import stylesCurrent from "./delivery-payment.module.scss";
import { Subheading } from "@pages/contract-offer/contract-offer";

function DeliveryPayment() {
  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>Оплата. Доставка.</h3>
      <div className={styles.dash}></div>
      <Subheading text="Оплата. Доставка." />
      <p className={stylesCurrent.text}>Шановні клієнти.</p>
      <p className={stylesCurrent.text}>
        Відправлення здійснюється протягом 1-2 робочих днів з моменту обробки
        замовлення. Замовлення надсилаються на електронну адресу або Telegram.
      </p>
      <p className={stylesCurrent.text}>Товар відправляємо на повну оплату.</p>
      <p className={stylesCurrent.text}>Увага.</p>
      <p className={stylesCurrent.text}>Спосіб оплати:</p>
      <p className={stylesCurrent.text}>
        1. Банківський переказ – оплата вартості на картку MonoBank;
      </p>
      <p className={stylesCurrent.text}>
        2. Оплата через LiqPay - швидкі та безпечні платежі;
      </p>
      <p className={stylesCurrent.text}>
        - Усі відправлення замовлень здійснюється лише після повної оплати.
      </p>
      <p className={stylesCurrent.text}>Обробка замовлень</p>
      <p className={stylesCurrent.text}>
        Відправка замовлень здійснюється у строки від одного до двох робочих
        днів з моменту оформлення замовлення.
      </p>
      <p className={stylesCurrent.text}>
        Робочі дні - понеділок - п'ятниця - 09:00 - 18:30 вихідні: субота та
        Неділя.
      </p>
      <p className={stylesCurrent.text}>Доставка</p>
      <p className={stylesCurrent.text}>Доставка безкоштовно по gmail.</p>
      <p className={stylesCurrent.text}>
        Час доставки – від одного до двох робочих днів
      </p>
      <p className={stylesCurrent.text}>
        Звернути увагу! З метою більш коректного та швидкого оформлення Вашого
        замовлення
      </p>
      <p className={stylesCurrent.text}>
        дзвоніть у робочий час за телефонами:
      </p>
      <p className={stylesCurrent.text}>+38 (066) 652 59 58.</p>
      <p className={stylesCurrent.text}>
        За відгуками та пропозиціями дзвонити за телефоном: +38 (066) 652 59 58
      </p>
      <p className={stylesCurrent.text}>ПОВЕРНЕННЯ ТА ОБМІН</p>
      <p className={stylesCurrent.text}>Товар поверненню не підлягає.</p>
    </section>
  );
}

export default DeliveryPayment;
