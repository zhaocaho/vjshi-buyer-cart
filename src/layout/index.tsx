import { ReactNode } from "react";
import { CartIcon } from "./components/cartIcon";
import { BuyerCartDrawer } from "./components/BuyerCartDrawer";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div>
      {children}
      <CartIcon />
      <BuyerCartDrawer />
    </div>
  );
}
