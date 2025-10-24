// MCQ: Multiple Choice Question
interface IProps {
  problem: string;
}

export default function Mcq(props: IProps) {
  console.log(props);
  return <>Multiple Choice Question</>;
}
