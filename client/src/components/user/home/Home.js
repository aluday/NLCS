import React, { useState } from "react";
import "./Home.css";
import slider1 from "../../../assets/slides/slider_2.webp";
import slider2 from "../../../assets/slides/slider_3.webp";
import SliderComponent from "../../shared-components/Slider";
import ProductDetails from "./ProductDetails";
import Header from "../../shared-components/Header";

export const HomePage = () => {
  const [forceRerender, setForceRerender] = useState(1);
  return (
    <>
      <Header />
      <div className="body">
        <SliderComponent arrImg={[slider1, slider2]} />
        <div className="container">
          <ProductDetails setForceRerender={setForceRerender} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
