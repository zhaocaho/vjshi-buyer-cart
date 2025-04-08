import { Checkbox } from "antd";

export default function BuyerPanel() {
  return (
    <div className="w-full h-[170px] pl-10 pr-10 pt-7 pb-7 flex flex-col justify-between">
      <div className="w-full flex justify-between">
        <div>
          <Checkbox />
          <span>全选</span>
        </div>
        <div>
          <span>已选0件</span>
          <span>总价：0元</span>
        </div>
      </div>
      <button className="w-full h-14 bg-black text-white rounded-[55px] text-base">
        立即购买
      </button>
    </div>
  );
}
