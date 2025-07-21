import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { makeServer } from "./mirage/server";
import { CustomThemeProvider } from "./theme/CustomThemeProvider";

if (
  process.env.NODE_ENV === "development" ||
  process.env.MIRAGE_ENABLED === "true"
) {
  makeServer();
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    {/* wrap the App component with CustomThemeProvider and add a default theme dark mode */}
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </Provider>
);
