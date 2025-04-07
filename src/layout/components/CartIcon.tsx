import { useAppDispatch } from "@/hooks/reduxHooks";
import { openCartDrawer } from "@/store/slices/cartSlices";

export function CartIcon() {
  const dispatch = useAppDispatch();

  const handleIconClick = () => {
    dispatch(openCartDrawer());
  };

  return <div onClick={handleIconClick}>购物车</div>;
}
