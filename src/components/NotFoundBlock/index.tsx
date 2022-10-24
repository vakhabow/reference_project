import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😞</span>
        <br />
        Ничего нейдено :(
      </h1>
      <p className={styles.description}>
        К сожалению данный страницы отсутствуют в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
