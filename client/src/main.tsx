import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Toaster
          position="top-center"
          toastOptions={{ duration: 1500 }}
          reverseOrder={false}
        />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
