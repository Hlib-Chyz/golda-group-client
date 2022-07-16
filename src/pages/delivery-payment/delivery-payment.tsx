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
      <p className={stylesCurrent.text}>Уважаемые клиенты.</p>
      <p className={stylesCurrent.text}>
        Отправка осуществляется в течение 1-2 рабочих дней с момента обработки
        заказа. Заказы отправляются по электронному адресу или Telegram.
      </p>
      <p className={stylesCurrent.text}>Товар отправляем по полной оплате.</p>
      <p className={stylesCurrent.text}>Внимание.</p>
      <p className={stylesCurrent.text}>Способы оплаты:</p>
      <p className={stylesCurrent.text}>
        1. Банковский перевод - оплата стоимости на карту MonoBank;
      </p>
      <p className={stylesCurrent.text}>
        2. Оплата через LiqPay - быстрые и безопасные платежи;
      </p>
      <p className={stylesCurrent.text}>
        - Все отправки заказов осуществляется только после полной оплаты.
      </p>
      <p className={stylesCurrent.text}>Обработка заказов</p>
      <p className={stylesCurrent.text}>
        Отправка заказов осуществляется в сроки от одного до двух рабочих дней с
        момента оформления заказа.
      </p>
      <p className={stylesCurrent.text}>
        Рабочие дни - понедельник - пятница - 09:00 - 18:30 выходные: суббота и
        воскресенье.
      </p>
      <p className={stylesCurrent.text}>Доставка</p>
      <p className={stylesCurrent.text}>Доставка бесплатно по gmail.</p>
      <p className={stylesCurrent.text}>
        Время доставки - от одного до двух рабочих дней
      </p>
      <p className={stylesCurrent.text}>
        Обратить внимание! С целью более корректного и быстрого оформления
        Вашего заказа
      </p>
      <p className={stylesCurrent.text}>
        звоните в рабочее время по телефонам:
      </p>
      <p className={stylesCurrent.text}>+38 (066) 652 59 58.</p>
      <p className={stylesCurrent.text}>
        По отзывов и предложений звонить по телефону: +38 (066) 652 59 58
      </p>
      <p className={stylesCurrent.text}>ВОЗВРАТ И ОБМЕН</p>
      <p className={stylesCurrent.text}>Товар возврату не подлежит.</p>
    </section>
  );
}

export default DeliveryPayment;
