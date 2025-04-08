interface Props {
  title: string;
  count: number;
}

export default function TabTitle({ title, count }: Props) {
  return (
    <div className="flex justify-between items-center pl-1 pr-1 text-base font-medium">
      <span>{title}</span>
      <span className="ml-1">{count}</span>
    </div>
  );
}
