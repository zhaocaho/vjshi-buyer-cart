import { Checkbox, CheckboxChangeEvent } from "antd";

interface Props {
  checked: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
}

export default function BuyerPanel({ checked = false, onChange }: Props) {
  return (
    <div className="flex h-[170px] w-full flex-col justify-between pt-7 pr-10 pb-7 pl-10">
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <Checkbox checked={checked} onChange={onChange} />
          <span>全选</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-3 text-base">
          <div className="text-neutral-60 flex space-x-1">
            <span>已选</span>
            <span>4</span>
            <span>件</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-medium">总计：</span>
            <div className="flex items-center space-x-1 text-[#EE4A4A]">
              <span className="text-4xl font-medium">194</span>
              <span className="pt-[18px] pb-[10px] leading-none">元</span>
            </div>
          </div>
        </div>
      </div>
      <button className="h-14 w-full rounded-[55px] bg-black text-base text-white">立即购买</button>
    </div>
  );
}
