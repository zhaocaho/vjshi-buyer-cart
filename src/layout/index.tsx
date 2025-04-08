import { ReactNode } from "react";
import GlobalActions from "./components/global-actions";
import BuyerCartDrawer from "./components/buyer-cart-drawer";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div>
      {children}
      <GlobalActions />
      <BuyerCartDrawer />
    </div>
  );
}
