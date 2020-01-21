import React from "react";
import styles from "./header.module.scss";
import { LogoIcon, TableOrderIcon, DeliveryOrderIcon } from "../../icons";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.tit_area}>
        <a href="#" className={styles.logo_area}>
          <LogoIcon className={styles.icon} />
        </a>
        <a href="" className={styles.tit}>
          커피부케
        </a>
        <span className={styles.list}>
          <span className={styles.list_item}>쿠폰</span>
          <span className={styles.list_item}>주문내역</span>
        </span>
      </div>
      <div className={styles.tab_area}>
        <span className={`${styles.tab} ${styles.active}`}>
          <TableOrderIcon className={styles.icon} />
          테이블주문
        </span>
        <span className={styles.tab}>
          <DeliveryOrderIcon className={styles.icon} />
          포장주문
        </span>
      </div>
      <div className={styles.category_area}>
        <a className={`${styles.item} ${styles.active}`}>오늘뭐먹지</a>
        <a className={styles.item}>콜드 브루</a>
        <a className={styles.item}>리저브</a>
        <a className={styles.item}>에스프레소</a>
      </div>
    </div>
  );
};

export default Header;
