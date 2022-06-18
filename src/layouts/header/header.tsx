// eslint-disable-next-line no-restricted-imports
import styles from "./header.module.scss";
import heart from "@assets/images/heart.svg";
import basket from "@assets/images/basket.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>Golda Group</div>
          <nav>
            <ul>
              <li>
                <button>Главная</button>
              </li>
              <li>
                <button>Тарифы</button>
              </li>
              <li>
                <button>О курсах</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.rightSide}>
          <button className={styles.heart}>
            <img src={heart} alt="heart" />
          </button>
          <button className={styles.basket}>
            <img src={basket} alt="basket" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
