import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import type { IProblemDetails } from "../../types";
import Problem from "../../components/problem";

export default function History() {
  const [problemDetailList, setProblemDetailList] = useState<IProblemDetails[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("Hello, World!");

  const fetchHistoryList = async () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHistoryList();
  }, []);

  if (isLoading) {
    return <div className={styles["loading-container"]}></div>;
  }

  if (errorMessage) {
    return (
      <div className={styles["error-message"]}>
        <p>{errorMessage}</p>
        <button type="button" onClick={fetchHistoryList}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={styles["history-container"]}>
      <h1>History</h1>
      {problemDetailList.length === 0 ? (
        <p>No history.</p>
      ) : (
        <div className={styles["history-list"]}>
          {problemDetailList.map((detail) => (
            <Problem details={detail} key={detail.id} showTips />
          ))}
        </div>
      )}
    </div>
  );
}
