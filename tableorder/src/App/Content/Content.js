import React from "react";
import styles from "./content.module.scss";

import {
  CoinIcon,
  ArrowIcon,
  QuotationStartIcon,
  QuotationEndIcon,
  GraphIcon
} from "../../icons";

import List from "./List/List";
import List2 from "./List/List2";

const Content = ({
  event,
  notice,
  list,
  list2,
  children,
  title,
  title2,
  standard
}) => {
  return (
    <div className={styles.content}>
      {event && (
        <div className={styles.event_area}>
          <CoinIcon className={styles.icon} />
          <div className={`${styles.txt_area} ${styles.active}`}>
            <div className={styles.txt}>
              첫 주문시&nbsp;<em>3천원,</em>이후부터&nbsp;<em>1천원</em> 적립!
              <a>
                <ArrowIcon className={styles.icon_arrow} />
              </a>
            </div>
            <div className={styles.txt_opened}>
              테이블주문 최초 1회 3천원, 이후 주문건부터 1천원 적립
              <br />- 최소 3천원 이상 결제 시, 1일 3회까지
              <br />- 결제 후 이틀 내 페이 포인트로 적립
            </div>
          </div>
        </div>
      )}
      {notice && (
        <div className={styles.notice_area}>
          <span className={styles.inner}>
            <span className={styles.txt}>
              <QuotationStartIcon className={styles.icon_start} />
              <strong className={styles.label_num}>19</strong>
              주류는 <em>19세 이상만 주문</em> 가능합니다.
              <QuotationEndIcon className={styles.icon_end} />
            </span>
          </span>
        </div>
      )}
      {title && (
        <div className={styles.title_area}>
          <span className={styles.tit}>
            <span className={styles.inner}>{title}</span>
          </span>
        </div>
      )}
      {title2 && (
        <div className={styles.title_area}>
          <span className={styles.tit}>{title2}</span>
          {standard && (
            <span className={styles.sub_tit}>
              <GraphIcon className={styles.icon} />
              3개월 주문 기준
            </span>
          )}
        </div>
      )}
      {list2 && <List2 />}
      {list && <List title={list.title} />}
      {children}
    </div>
  );
};

export default Content;
