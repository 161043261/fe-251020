import { useState } from "react";
import Mcq from "../mcq";
import styles from "./index.module.css";

type TLevel = "easy" | "medium" | "hard";

interface IQuota {
  remain: number;
}

export function ProblemGen() {
  const [problem, setProblem] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");
  const [level, setLevel] = useState<TLevel>("easy");
  const [quota, setQuota] = useState<IQuota>();

  const fetchQuota = async () => {};
  const genProblem = async () => {};
  const getNextResetTime = () => {};

  return (
    <div className={styles["gen-container"]}>
      <h2>Coding Problem Generator</h2>
      <div className={styles["quota-container"]}>
        <p>Quota remain: {quota?.remain ?? 0}</p>
      </div>
    </div>
  );
}
