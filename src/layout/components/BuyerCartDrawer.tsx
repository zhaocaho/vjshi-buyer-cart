import { useAppSelector } from "@/hooks/reduxHooks";

export function BuyerCartDrawer() {
  const { showDrawerOpen } = useAppSelector((state) => state.cart);
  console.log("showDrawerOpen:", showDrawerOpen);
  return (
    <div className="w-[100px] h-[100px] bg-amber-300 absolute right-0 top-0">
      购物车弹窗
    </div>
  );
}
