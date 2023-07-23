import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/store";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={true}
          draggable={true}
          closeOnClick
          pauseOnHover
        />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
