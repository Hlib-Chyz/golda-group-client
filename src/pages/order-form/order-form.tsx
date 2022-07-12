// eslint-disable-next-line no-restricted-imports
import styles from "./order-form.module.scss";
import Button from "@components/button/button";
import { Props } from "enums";

function OrderForm() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Оформление заказа</h3>
        <form className={styles.form}>
          <input type="email" required />
          <input />
          <input />
          <Button
            customStyle={{
              padding: "25px 42px",
              fontSize: "16px",
            }}
            text={Props.Сheckout}
          />
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
