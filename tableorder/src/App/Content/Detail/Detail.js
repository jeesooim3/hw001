import React from "react";

import { StarIcon, Hot2Icon } from "../../../icons";
import styles from "./detail.module.scss";
import Content from "../Content";

const Detail = () => {
  return (
    <div>
      <img className={styles.img_area} />
      <Content>
        <div className={styles.info_area}>
          <div className={styles.inner}>
            <div className={styles.tit_area}>
              뉴올리언스 비프스튜
              <Hot2Icon className={styles.icon} />
            </div>
            <div className={styles.etc_area}>
              <span className={styles.txt_price}>18,900원</span>
              <span className={styles.txt_price_fixed}>42,900원</span>
              <span className={styles.txt_rate}>
                <StarIcon className={styles.icon} />
                4.7
              </span>
              <span className={styles.txt_order}>
                주문 <em>239</em>
              </span>
            </div>
            <div className={styles.txt_area}>
              각종 해산물 및 육류를 오랫동안 끓여내 바게트와 곁들여 먹는 매콤한
              맛의 뉴올리언스 전통 스튜입니다. 바게트는 매장에서 매일 직접
              굽습니다.
            </div>
          </div>
        </div>
        <div className={styles.photo_area}>
          <div className={styles.title_area}>
            이용자 사진 <em>78</em>
          </div>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <img
                src="https://picsum.photos/104/104"
                width={104}
                height={104}
                className={styles.img}
              />
            </li>
            <li className={styles.list_item}>
              <img
                src="https://picsum.photos/104/104"
                width={104}
                height={104}
              />
              <span className={styles.count}>4</span>
            </li>
            <li className={styles.list_item}>
              <img
                src="https://picsum.photos/104/104"
                width={104}
                height={104}
              />
            </li>
            <li className={styles.list_item}>
              <img
                src="https://picsum.photos/104/104"
                width={104}
                height={104}
              />
            </li>
          </ul>
        </div>
      </Content>
    </div>
  );
};

export default Detail;
