import { useState, type ChangeEvent } from "react";
import styles from "./index.module.scss";
import Problem from "../../components/problem";
import type { IProblemDetails, TLevel } from "../../types";

interface IQuota {
  remain: number;
}

export default function Home() {
  const [problemDetails, setProblemDetails] = useState<IProblemDetails>({
    description: "Default Problem",
    answerIdx: -1,
    level: "easy",
    options: ["A: Answer 1", "B: Answer 2", "C: Answer 3", "D: Answer 4"],
    solution: "Default Solution",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("Hello, World!");
  const [level, setLevel] = useState<TLevel>("easy");
  const [quota, setQuota] = useState<IQuota>();

  const fetchQuota = async () => {};
  const generateProblem = async () => {};
  const getNextResetTime = () => {};

  const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value as TLevel);
  };

  return (
    <div className={styles["home-container"]}>
      <h2>Coding Problem Generator</h2>
      <div className={styles["quota-container"]}>
        <p>Quota remain: {quota?.remain ?? 0}</p>
        {quota?.remain === 0 && <p>Next reset time: {0}</p>}
      </div>

      <div className={styles["level-container"]}>
        <label htmlFor="level-selector">Select level</label>
        <select
          id="level-selector"
          value={level}
          onChange={handleLevelChange}
          disabled={isLoading}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button
        type="button"
        onClick={generateProblem}
        disabled={isLoading || quota?.remain === 0}
        className={styles["generate-button"]}
      >
        {isLoading ? "Generating..." : "Generate a coding problem"}
      </button>

      <Problem details={problemDetails} />

      {errorMessage && (
        <div className={styles["error-message"]}>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
