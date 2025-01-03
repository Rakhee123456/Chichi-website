import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/section/Banner";
import CookedFood from "./component/section/CookedFood";
import SmallBanner from "./component/section/SmallBanner";
import Grab from "./component/section/Grab";
import Brands from "./component/section/Brands";
import Footer from "./component/Footer";

function App() {
  const components = [
    <Banner key="2" />,
    <CookedFood
      key="3"
      title={"Cooked Food, Great Taste!"}
      category="SmallBanner"
    />,
    <SmallBanner key="4" />,

    <CookedFood
      key="3"
      title={"Drink Up, Cool Down!"}
      category="Drinks"
    />,

    <Grab key="5" />,
    <Brands key="6" />,
  ];



  return (
    <div className="App">
      <Navbar key="1" />,
      {components.map((component) => (
        <div key={component.key} className="sections-components">
          {component}
        </div>
      ))}
      <Footer key="7" />,
    </div>
  );
}

export default App;
