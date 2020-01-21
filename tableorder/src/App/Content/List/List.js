import React from "react";

import { CartIcon, StarIcon, Hot2Icon } from "../../../icons";
import styles from "./list.module.scss";

const List = ({ title }) => {
  return (
    <div className={styles.list_area}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <div className={styles.thumb_area}>
            <img
              src="https://picsum.photos/110/100"
              width={100}
              height={110}
              className={styles.thumb}
            />
          </div>
          <div className={styles.info_area}>
            <div className={styles.tit_area}>
              <span className={styles.inner}>어쩌고 쇼콜라</span>
              <span className={styles.label_area}>
                <Hot2Icon className={styles.label} />
                <span className={`${styles.label_represent} ${styles.label}`}>
                  대표
                </span>
                <span className={`${styles.label_hot} ${styles.label}`}>
                  인기
                </span>
                <span className={`${styles.label_new} ${styles.label}`}>N</span>
              </span>
            </div>
            <div className={styles.etc_area}>
              <span className={styles.item}>
                <StarIcon className={styles.icon} />
                <em>4.7</em>
              </span>
              <span className={styles.item}>
                주문&nbsp;<em>239</em>
              </span>
            </div>
            <div className={styles.txt_area}>
              나이트로 커피 정통의 캐스케이딩과 부드러운 콜드 크레마
            </div>
            <div className={styles.price_area}>69,000원</div>
            <span className={styles.icon_area}>
              <CartIcon className={styles.icon} />
            </span>
          </div>
        </li>

        <li className={styles.list_item}>
          <div className={styles.thumb_area}>
            <img
              src="https://picsum.photos/110/100"
              width={100}
              height={110}
              className={styles.thumb}
            />
          </div>
          <div className={styles.info_area}>
            <div className={styles.tit_area}>
              <span className={styles.inner}>어쩌고 쇼콜라</span>
              <span className={styles.label_area}>
                <Hot2Icon className={styles.label} />
                <span className={`${styles.label_represent} ${styles.label}`}>
                  대표
                </span>
                <span className={`${styles.label_hot} ${styles.label}`}>
                  인기
                </span>
                <span className={`${styles.label_new} ${styles.label}`}>N</span>
              </span>
            </div>
            <div className={styles.etc_area}>
              <span className={styles.item}>
                <StarIcon className={styles.icon} />
                <em>4.7</em>
              </span>
              <span className={styles.item}>
                주문&nbsp;<em>239</em>
              </span>
            </div>
            <div className={styles.txt_area}>
              나이트로 커피 정통의 캐스케이딩과 부드러운 콜드 크레마
            </div>
            <div className={styles.price_area}>69,000원</div>
            <span className={styles.icon_area}>
              <CartIcon className={styles.icon} />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default List;
