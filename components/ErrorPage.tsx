import React from "react";
import { SEO } from "./SEO";

import styles from "./styles.module.css";

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  return (
    <>
      <SEO title="Error" />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Error Loading Page</h1>

          {statusCode && <p>Error code: {statusCode}</p>}

          <img src="/error.png" alt="Error" className={styles.errorImage} />
        </main>
      </div>
    </>
  );
};
