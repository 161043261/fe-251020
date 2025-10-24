import { useState, type ChangeEvent } from "react";
import styles from "./index.module.css";
import Mcq from "../../components/mcq";

type TLevel = "easy" | "medium" | "hard";

interface IQuota {
  remain: number;
}

export default function Homepage() {
  const [problem, setProblem] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [level, setLevel] = useState<TLevel>("easy");
  const [quota, setQuota] = useState<IQuota>();

  const fetchQuota = async () => {};
  const generateProblem = async () => {};
  const getNextResetTime = () => {};

  const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value as TLevel);
  };

  return (
    <div className={styles["generator-container"]}>
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

      {errorMessage && (
        <div className={styles["error-message"]}>
          <p>{errorMessage}</p>
        </div>
      )}

      {problem && <Mcq problem={problem} />}
    </div>
  );
}
