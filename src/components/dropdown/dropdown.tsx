// eslint-disable-next-line no-restricted-imports
import styles from "./dropdown.module.scss";
import arrow from "@assets/images/arrow.svg";
import { Props } from "enums";
import TextLanguage from "@components/text-language/text-language";
import { MutableRefObject, useEffect, useRef, useState } from "react";

function Dropdown({
  prop,
  formats,
  setter,
  width = "200px",
}: {
  prop: Props;
  setter: Function;
  formats: IDropdown[];
  width?: string;
}) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const lungeRef = useRef() as MutableRefObject<HTMLInputElement>;

  function checkHideBlock(e: any): void {
    if (!e.path.some((el: HTMLElement) => el === lungeRef.current)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", checkHideBlock);
    return () => {
      document.removeEventListener("click", checkHideBlock);
    };
  }, []);

  function setElement(id: string): void {
    setOpen(false);
    setter(id);
  }

  return (
    <div className={styles.container}>
      <div ref={lungeRef}>
        <div
          style={{ width }}
          onClick={() => setOpen(!isOpen)}
          className={styles.dropdown}
        >
          <p>
            <TextLanguage prop={prop} />
          </p>
          <div
            className={
              isOpen ? styles.arrowTop + " " + styles.arrow : styles.arrow
            }
          >
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div
          style={{
            width,
            padding: isOpen ? "10px 16px" : 0,
            visibility: isOpen ? "visible" : "hidden",
            fontSize: isOpen ? "20px" : 0,
            border: isOpen ? "1px solid #4a74ba" : "none",
            transition: "all 0.5s",
          }}
          className={styles.items}
        >
          {formats.map((item: IDropdown) => (
            <div
              onClick={() => setElement(item.id)}
              className={
                item.id === prop
                  ? styles.item + " " + styles.active
                  : styles.item
              }
              key={item.id}
            >
              <TextLanguage prop={item.prop} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dropdown;

export interface IDropdown {
  id: string;
  prop: Props;
}
