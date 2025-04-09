import { Checkbox, CheckboxChangeEvent } from "antd";

interface Props {
  checked: boolean;
  totalPrice: number;
  selectCount: number;
  disabled?: boolean;
  onChange?: (e: boolean) => void;
}

export default function BuyerPanel({
  checked = false,
  selectCount,
  disabled,
  totalPrice,
  onChange,
}: Props) {
  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    const newChecked = e.target.checked;
    onChange?.(newChecked);
  };

  return (
    <div className="flex h-[170px] w-full flex-col justify-between pt-7 pr-10 pb-7 pl-10">
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <Checkbox checked={checked} onChange={handleCheckboxChange} />
          <span className="ml-2">全选</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-3 text-base">
          <div className="text-[#404040;] flex space-x-1 text-sm">
            <span>已选</span>
            <span>{selectCount}</span>
            <span>件</span>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <span className="font-medium">总计：</span>
            <div className="flex items-center space-x-1 text-[#EE4A4A]">
              <span className="text-[28px] font-medium">{totalPrice}</span>
              <span className="pt-[14px] pb-[10px] leading-none">元</span>
            </div>
          </div>
        </div>
      </div>
      <button
        disabled={disabled}
        className="h-14 w-full rounded-[55px] bg-black text-base text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:bg-[#ccc]"
      >
        立即购买
      </button>
    </div>
  );
}
