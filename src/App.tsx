import { Fragment } from "react";
import { Hero, About, Creations, Footer } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <About />
      <Creations />
      <Footer />
    </div>
  );
};

export default App;
