import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { closeCartDrawer } from "@/store/slices/cartSlices";
import { Drawer } from "antd";

export function BuyerCartDrawer() {
  const dispatch = useAppDispatch();
  const { cartDrawerOpen } = useAppSelector((state) => state.cart);

  return (
    <Drawer
      title="购物车"
      placement="right"
      open={cartDrawerOpen}
      onClose={() => {
        dispatch(closeCartDrawer());
      }}
    ></Drawer>
  );
}
