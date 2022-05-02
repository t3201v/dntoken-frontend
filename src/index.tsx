import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { io } from "socket.io-client";

export const socket = io(process.env.REACT_APP_API || "http://localhost:3001");

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
