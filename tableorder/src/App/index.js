import React from "react";
import styles from "./styles.module.scss";

import Header from "./Header/";
import Content from "./Content/Content";
import Detail from "./Content/Detail/Detail";
import Button from "./Button";
const App = () => {
  return (
    <div className={styles.wrapper}>
      {/* <Detail /> */}
      <Header />
      <Content event list2 notice title="최근 주문" />
      <Content list title2="인기 랭킹" standard />
      <Content list title2="사장님 추천" />
      <Button />
    </div>
  );
};

export default App;
