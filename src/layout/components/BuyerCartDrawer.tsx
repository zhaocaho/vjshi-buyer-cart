import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { closeCartDrawer } from "@/store/slices/cartSlices";
import { Drawer } from "antd";

export function BuyerCartDrawer() {
  const dispatch = useAppDispatch();
  const { cartDrawerOpen } = useAppSelector((state) => state.cart);

  return (
    <Drawer
      placement="right"
      open={cartDrawerOpen}
      onClose={() => {
        dispatch(closeCartDrawer());
      }}
      styles={{
        header: { display: "none" },
        body: { padding: 0 },
        wrapper: { width: "100%", maxWidth: "514px" },
      }}
    ></Drawer>
  );
}
