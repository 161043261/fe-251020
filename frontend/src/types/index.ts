import type { ReactNode } from "react";

export type TLevel = "Easy" | "Medium" | "Hard";

export interface IProblemDetails {
  id: number;
  answerIdx: number;
  description: string;
  level: TLevel;
  options: ReactNode[];
  solution: ReactNode;
}
