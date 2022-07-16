import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "index.scss";
import App from "App";
import LanguageStore from "store/language";
import CourseProgramStore from "store/course-program";
import CourseParametersStore from "store/course-parameters";

export const Context = createContext<{
  language: LanguageStore;
  courseProgram: CourseProgramStore;
  courseParameters: CourseParametersStore;
} | null>(null);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        language: new LanguageStore(),
        courseProgram: new CourseProgramStore(),
        courseParameters: new CourseParametersStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
