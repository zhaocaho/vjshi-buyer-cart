import { Checkbox } from "antd";
import { CartItem } from "@/store/slices/cartSlices";

interface Props {
  item: CartItem;
  checked: boolean;
  onChange?: (item: CartItem) => void;
}
export default function ProductItem({ item, checked, onChange }: Props) {
  const handleCheckboxChange = () => {
    onChange?.(item);
  };

  const getItemId = (item: CartItem) => {
    if ("vid" in item) return item.vid;
    if ("fid" in item) return item.fid;
    if ("mid" in item) return item.mid;
  };

  return (
    <label className="group/item flex flex-shrink-0 cursor-pointer space-x-4 rounded-[12px] p-5 hover:bg-[#F5F5F5]">
      <Checkbox checked={checked} onChange={handleCheckboxChange} />
      <div className="flex flex-1 flex-col space-y-3 overflow-hidden">
        <div className="flex items-center text-base">
          <div className="relative flex h-[66px] w-[99px] flex-shrink-0 overflow-hidden rounded-sm">
            <a className="inline-block h-full w-full" target="_blank" href="/">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  loading="lazy"
                  className="bg-alpha-channel h-full w-full object-cover"
                  alt={item.title}
                  src={item.coverImage}
                />
              </div>
            </a>
          </div>
          <div className="ml-3 flex flex-1 flex-col space-y-3 overflow-hidden">
            <div className="flex flex-1">
              <a
                className="h-6 max-w-full truncate text-base font-medium text-black"
                target="_blank"
                href="/"
              >
                {item.title}
              </a>
            </div>
            <div className="flex w-full items-center space-x-3 text-sm">
              <span className="text-neutral-60 truncate">ID：{getItemId(item)}</span>
              <hr
                aria-orientation="vertical"
                className="h-[12px] w-[1px] border-0 border-l border-solid border-current text-[#CCCCCC]"
              />
              <span className="text-neutral-60 truncate">类型：{item.softwareType}</span>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <button className="active:text-black-50 hidden cursor-pointer text-base font-medium whitespace-nowrap transition select-none group-hover/item:block hover:text-[#808080] disabled:text-neutral-50 data-loading:text-transparent lg:block">
            移除
          </button>
          <div className="flex w-full items-center justify-end">
            <div className="flex items-center space-x-4 text-sm">
              <div className="text-neutral-60 flex flex-1">个人授权</div>
              <div className="flex flex-shrink-0 items-center space-x-[2px] text-black">
                <span className="text-xl font-medium">{item.price}</span>
                <span className="pt-[9px] pb-[7px] leading-none">元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
