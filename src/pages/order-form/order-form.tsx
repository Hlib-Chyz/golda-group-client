/* eslint-disable indent */
// eslint-disable-next-line no-restricted-imports
import styles from "./order-form.module.scss";
import Button from "@components/button/button";
import { Props } from "enums";
import { ChangeEvent, useEffect, useRef, useState } from "react";

function OrderForm() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      setWidthLabelName(refLabelName.current!.clientWidth);
      setWidthLabelEmail(refLabelEmail.current!.clientWidth);
      setWidthLabelPhone(refLabelPhone.current!.clientWidth);
    }, 0);
  }, []);

  const refLabelName = useRef<HTMLLabelElement>(null);
  const refLabelEmail = useRef<HTMLLabelElement>(null);
  const refLabelPhone = useRef<HTMLLabelElement>(null);

  const [widthLabelName, setWidthLabelName] = useState<number>(0);
  const [widthLabelEmail, setWidthLabelEmail] = useState<number>(0);
  const [widthLabelPhone, setWidthLabelPhone] = useState<number>(0);

  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");

  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [nameDirty, setNameDirty] = useState<boolean>(false);
  const [phoneDirty, setPhoneDirty] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<string>(
    "Email не может быть пустым"
  );
  const [nameError, setNameError] = useState<string>(
    "ФИО не может быть пустым"
  );
  const [phoneError, setPhoneError] = useState<string>(
    "Телефон не может быть пустым"
  );

  const emailHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    const isValidEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).test(
      e.target.value
    );

    if (e.target.value === "") {
      setEmailError("Email не может быть пустым");
      return;
    }
    if (!isValidEmail) {
      setEmailError("Некорректный email");
      return;
    }
    setEmailError("");
  };

  const phoneHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setPhone(e.target.value);
    const isValidPhone = new RegExp(/^[0-9]*$/).test(e.target.value);
    if (!e.target.value) {
      setPhoneError("Телефон не может быть пустым");
      return;
    }
    if (!isValidPhone) {
      setPhoneError("Поле может содержать только цифры");
      return;
    }
    setPhoneError("");
  };

  const nameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
    const isValidName = new RegExp(/^[a-zA-Z\s]*$/).test(e.target.value);
    if (!e.target.value) {
      setNameError("ФИО не может быть пустым");
      return;
    }
    if (!isValidName) {
      setNameError("Поле может содержать только буквы и пробелы");
      return;
    }
    setNameError("");
  };

  const blurHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        return;
      case "phone":
        setPhoneDirty(true);
        return;
      case "name":
        setNameDirty(true);
        return;
      default:
        return;
    }
  };

  const submitForm = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!emailError && !nameError && !phoneError) {
      console.log(email, name, phone);
      return;
    }
    setPhoneDirty(true);
    setNameDirty(true);
    setEmailDirty(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Оформление заказа</h3>
        <form onSubmit={(e: any) => submitForm(e)} className={styles.form}>
          <div className={styles.inputError}>
            <div>
              <label
                className={nameDirty && nameError ? styles.error : ""}
                ref={refLabelName}
              >
                ФИО
              </label>
              <input
                value={name}
                className={nameDirty && nameError ? styles.error : ""}
                onBlur={(e: ChangeEvent<HTMLInputElement>) => blurHandle(e)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => nameHandler(e)}
                name="name"
                style={{
                  marginBottom: nameDirty && nameError ? "" : "26.25px",
                  marginLeft: `${widthLabelName - 14}px`,
                  width: `${355 - widthLabelName}px`,
                }}
              />
            </div>
            {nameDirty && nameError && (
              <div className={styles.errorMessage}>{nameError}</div>
            )}
          </div>
          <div className={styles.inputError}>
            <div>
              <label
                className={emailDirty && emailError ? styles.error : ""}
                ref={refLabelEmail}
              >
                EMAIL
              </label>
              <input
                value={email}
                className={emailDirty && emailError ? styles.error : ""}
                onBlur={(e: ChangeEvent<HTMLInputElement>) => blurHandle(e)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => emailHandler(e)}
                name="email"
                style={{
                  marginBottom: emailDirty && emailError ? "" : "26.25px",
                  marginLeft: `${widthLabelEmail - 14}px`,
                  width: `${355 - widthLabelEmail}px`,
                }}
              />
            </div>
            {emailDirty && emailError && (
              <div className={styles.errorMessage}>{emailError}</div>
            )}
          </div>
          <div className={styles.inputError}>
            <div>
              <label
                className={phoneDirty && phoneError ? styles.error : ""}
                ref={refLabelPhone}
              >
                ТЕЛЕФОН
              </label>
              <input
                value={phone}
                className={phoneDirty && phoneError ? styles.error : ""}
                onBlur={(e: ChangeEvent<HTMLInputElement>) => blurHandle(e)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => phoneHandler(e)}
                name="phone"
                style={{
                  marginBottom: phoneDirty && phoneError ? "" : "26.25px",
                  marginLeft: `${widthLabelPhone - 14}px`,
                  width: `${355 - widthLabelPhone}px`,
                }}
              />
            </div>
            {phoneDirty && phoneError && (
              <div className={styles.errorMessage}>{phoneError}</div>
            )}
          </div>
          <Button
            customStyle={{
              padding: "25px 0",
              fontSize: "14px",
              maxWidth: "300px",
            }}
            text={Props.Сheckout}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
