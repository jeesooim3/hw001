import React from "react";

import { CartIcon } from "../../../icons";
import styles from "./list2.module.scss";

const List2 = ({ title }) => {
  return (
    <div className={styles.list_area}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img
            src="https://picsum.photos/72/72"
            width={72}
            height={72}
            className={styles.img}
          />
          <div className={styles.info_area}>
            <div>
              <div className={styles.tit_area}>치킨 샐러드</div>
              <div className={styles.price_area}>69,000원</div>
            </div>
            <span className={styles.icon_area}>
              <CartIcon className={styles.icon} />
            </span>
          </div>
        </li>
        <li className={styles.list_item}>
          <img
            src="https://picsum.photos/72/72"
            width={72}
            height={72}
            className={styles.img}
          />
          <div className={styles.info_area}>
            <div>
              <div className={styles.tit_area}>치킨 샐러드</div>
              <div className={styles.price_area}>69,000원</div>
            </div>
            <span className={styles.icon_area}>
              <CartIcon className={styles.icon} />
            </span>
          </div>
        </li>
        <li className={styles.list_item}>
          <img
            src="https://picsum.photos/72/72"
            width={72}
            height={72}
            className={styles.img}
          />
          <div className={styles.info_area}>
            <div>
              <div className={styles.tit_area}>치킨 샐러드</div>
              <div className={styles.price_area}>69,000원</div>
            </div>
            <span className={styles.icon_area}>
              <CartIcon className={styles.icon} />
            </span>
          </div>
        </li>
        <li className={styles.list_item}>
          <img
            src="https://picsum.photos/72/72"
            width={72}
            height={72}
            className={styles.img}
          />
          <div className={styles.info_area}>
            <div>
              <div className={styles.tit_area}>치킨 샐러드</div>
              <div className={styles.price_area}>69,000원</div>
            </div>
            <span className={styles.icon_area}>
              <CartIcon className={styles.icon} />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default List2;
