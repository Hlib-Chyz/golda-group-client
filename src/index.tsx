import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "index.scss";
import App from "App";
import LanguageStore from "store/language";

export const Context = createContext<{ language: LanguageStore } | null>(null);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        language: new LanguageStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
