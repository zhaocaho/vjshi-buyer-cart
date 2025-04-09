import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { worker } from "../mocks/browser.ts";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";
import "@ant-design/v5-patch-for-react-19";

//TODO 为了方便项目掩饰，mock接口这里未区分环境。
worker.start().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  );
});
