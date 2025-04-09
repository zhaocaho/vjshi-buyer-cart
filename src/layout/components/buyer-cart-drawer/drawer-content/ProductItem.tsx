import { Checkbox } from "antd";
import { CartItem } from "@/store/slices/cartSlices";
import { CartItemAuditStatus, LicType } from "@/api/cart";

interface Props {
  item: CartItem;
  checked: boolean;
  id: number;
  price: number;
  onChange?: (itemId: number) => void;
}
export default function ProductItem({ item, id, checked, price, onChange }: Props) {
  const handleCheckboxChange = () => {
    onChange?.(id);
  };

  const onRemove = () => {
    console.log("移除此itemId：", id);
  };

  const getLicTypeName = (item: CartItem) => {
    switch (item.licType) {
      case LicType.NP:
        return "个人授权";
      case LicType.LP:
        return "企业授权";
      case LicType.LPPLUS:
        return "企业PLUS授权";
    }
  };

  return (
    <label className="group/item flex flex-shrink-0 cursor-pointer space-x-4 rounded-[12px] p-5 font-[PingFangSC] hover:bg-[#F5F5F5]">
      <label htmlFor="checkbox" className="flex h-[66px] items-center">
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          disabled={item.auditStatus === CartItemAuditStatus.FAIL}
          style={{ margin: "2px" }}
        />
      </label>
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
                {item.auditStatus === CartItemAuditStatus.FAIL && (
                  <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/50 text-sm text-[#FEFEFE]">
                    已下架
                  </div>
                )}
              </div>
            </a>
          </div>
          <div className="ml-3 flex flex-1 flex-col space-y-3 overflow-hidden font-normal">
            <div className="flex flex-1">
              <a
                className="h-6 max-w-full truncate text-base font-medium text-black"
                target="_blank"
                href="/"
              >
                {item.title}
              </a>
            </div>
            <div className="flex w-full items-center space-x-2 text-sm">
              <span className="truncate text-[#404040]">ID：{id}</span>
              <hr
                aria-orientation="vertical"
                className="h-[12px] w-[1px] border-0 border-l border-solid border-current text-[#CCCCCC]"
              />
              <span className="truncate text-[#404040]">类型：{item.softwareType}</span>
            </div>
          </div>
        </div>
        {item.bought && (
          <div className="text-[#404040;] flex w-full items-center text-sm">
            <span>你已经购买过此素材</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="none"
              version="1.1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g>
                <g style={{ opacity: 0 }}>
                  <rect x="0" y="0" width="16" height="16" rx="0" fill="#FEFEFE" fill-opacity="1" />
                </g>
                <g transform="matrix(0,-1,-1,0,22,22)">
                  <path
                    d="M14,12.942809L17.5286,16.4714L17.52977,16.47023Q17.62331,16.563760000000002,17.74552,16.61438Q17.86772,16.665,18,16.665Q18.0655,16.665,18.129730000000002,16.65222Q18.19397,16.63944,18.25448,16.61438Q18.31499,16.58931,18.36945,16.55293Q18.42391,16.51654,18.47023,16.47023Q18.51654,16.42391,18.55293,16.36945Q18.589309999999998,16.315,18.61438,16.25448Q18.63944,16.19397,18.65222,16.129730000000002Q18.665,16.0655,18.665,16Q18.665,15.86772,18.61438,15.745519999999999Q18.563760000000002,15.62331,18.47023,15.52977L18.4714,15.5286L14.4714,11.528595Q14.42497,11.482166,14.37038,11.445687Q14.31578,11.409208,14.25512,11.38408Q14.19446,11.358953,14.13006,11.346143Q14.065660000000001,11.333333,14,11.333333Q13.93434,11.333333,13.86994,11.346143Q13.80554,11.358953,13.74488,11.38408Q13.68421,11.409208,13.62962,11.445687Q13.57502,11.482166,13.5286,11.528595L9.528595,15.5286L9.529774,15.52977Q9.43624,15.62331,9.38562,15.745519999999999Q9.335,15.86772,9.335,16Q9.335,16.0655,9.347778,16.129730000000002Q9.360556,16.19397,9.38562,16.25448Q9.410685,16.315,9.447073,16.36945Q9.483461,16.42391,9.529774,16.47023Q9.576087,16.51654,9.630546,16.55293Q9.685004,16.58931,9.745516,16.61438Q9.806027,16.63944,9.870265,16.65222Q9.9345032,16.665,10,16.665Q10.132277,16.665,10.254484,16.61438Q10.376692,16.563760000000002,10.470226,16.47023L10.471405,16.4714L14,12.942809Z"
                    fillRule="evenodd"
                    fill="#404040"
                    fillOpacity="1"
                  />
                </g>
              </g>
            </svg>
          </div>
        )}
        <div className="flex w-full items-center justify-between">
          <button
            type="button"
            className="active:text-black-50 hidden cursor-pointer text-sm font-medium whitespace-nowrap transition select-none group-hover/item:block hover:text-[#808080] disabled:text-neutral-50 data-loading:text-transparent lg:block"
            onClick={onRemove}
          >
            移除
          </button>
          <div className="flex w-full items-center justify-end">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex flex-1 text-[#404040]">{getLicTypeName(item)}</div>
              <div className="flex flex-shrink-0 items-center space-x-[2px] text-black">
                <span className="text-xl font-medium">{price}</span>
                <span className="pt-[9px] pb-[7px] leading-none">元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
