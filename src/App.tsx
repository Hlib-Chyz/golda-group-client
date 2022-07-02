/* eslint-disable no-unused-vars */
import Footer from "@layouts/footer/footer";
import Header from "@layouts/header/header";
import Main from "@layouts/main/main";
import { Languages } from "enums";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", Languages.UA);
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
