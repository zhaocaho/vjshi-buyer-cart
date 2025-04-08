import { Checkbox } from "antd";

export default function BuyerPanel() {
  return (
    <div className="w-full h-[170px] pl-10 pr-10 pt-7 pb-7 flex flex-col justify-between">
      <div className="w-full flex justify-between">
        <div className="flex items-center">
          <Checkbox />
          <span>全选</span>
        </div>
        <div className="flex flex-1 justify-end space-x-3 items-center text-base">
          <div className="flex space-x-1 text-neutral-60">
            <span>已选</span>
            <span>4</span>
            <span>件</span>
          </div>
          <div className="flex space-x-1 items-center">
            <span className="font-medium">总计：</span>
            <div className="flex space-x-1 items-center text-[#EE4A4A]">
              <span className="text-4xl font-medium">194</span>
              <span className="leading-none pt-[18px] pb-[10px]">元</span>
            </div>
          </div>
        </div>
      </div>
      <button className="w-full h-14 bg-black text-white rounded-[55px] text-base">
        立即购买
      </button>
    </div>
  );
}
