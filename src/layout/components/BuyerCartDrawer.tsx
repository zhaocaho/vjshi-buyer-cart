import { useAppSelector } from "@/hooks/reduxHooks";
import { Drawer } from "antd";

export function BuyerCartDrawer() {
  const { cartDrawerOpen } = useAppSelector((state) => state.cart);

  return (
    <Drawer title="购物车" placement="right" open={cartDrawerOpen}></Drawer>
  );
}
