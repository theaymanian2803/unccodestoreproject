import React from "react";
import Header from "./components/Header";
import Home from "./screens/Home";

const App = () => {
  return (
    <div>
      <Header />
      <main className=" py-3">
        <Home />
      </main>
    </div>
  );
};

export default App;
