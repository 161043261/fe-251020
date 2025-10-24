import type { ReactNode } from "react";

export type TLevel = "easy" | "medium" | "hard";

export interface IProblemDetails {
  answerIdx: number;
  description: string;
  level: TLevel;
  options: ReactNode[];
  solution: ReactNode;
}
