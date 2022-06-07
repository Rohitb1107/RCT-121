import React, { useState, useEffect } from "react";
import Products from "./Products";
import Slider from "./Slider";
import axios from "axios";

const Home = () => {
  const [prodData, setProdData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/ProductsData")
      .then((res) => {
        setProdData(res.data);
        console.log(prodData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Slider />
      <div className="home-div">
        {prodData.map((item) => {
          return <Products key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default Home;
