interface Props {
  title: string;
  count: number;
}

export default function TabTitle({ title, count }: Props) {
  return (
    <div className="text-[#0D0D0D flex items-center justify-between pr-1 pl-1 text-base">
      <span>{title}</span>
      <span className="ml-1">{count}</span>
    </div>
  );
}
