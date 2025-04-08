import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { closeCartDrawer } from "@/store/slices/cartSlices";
import { Drawer } from "antd";
import DrawerHeader from "./DrawerHeader";

export default function BuyerCartDrawer() {
  const dispatch = useAppDispatch();
  const { cartDrawerOpen } = useAppSelector((state) => state.cart);

  const closeDrawer = () => {
    dispatch(closeCartDrawer());
  };

  return (
    <Drawer
      placement="right"
      open={cartDrawerOpen}
      onClose={() => {
        closeDrawer();
      }}
      styles={{
        header: { display: "none" },
        body: { padding: 0 },
        wrapper: { width: "100%", maxWidth: "514px" },
      }}
    >
      <DrawerHeader onClose={() => closeDrawer()} />
    </Drawer>
  );
}
