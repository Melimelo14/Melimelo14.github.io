import React from "react";

import styles from "./styles.module.css";

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Error Loading Page</h1>

          {statusCode && <p>Error code: {statusCode}</p>}
        </main>
      </div>
    </>
  );
};
