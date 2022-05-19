import React, { useState, useEffect } from "react";
import "./style.css";

const MenuCard = () => {
  function SaySomething() {
    console.log(
      "Good Night Rohit Take Care You are a very good boy and you definately get an amazing job offer Best of luck for your future"
    );
  }
  return (
    <>
      <h1>MenuCard</h1>
      <div className="card">
        <div className="left-part">
          <div className="left-img">
            <img
              src="https://avatarfiles.alphacoders.com/893/thumb-89303.gif"
              alt=""
            />
          </div>
          <div className="right-in-left-part">
            <div className="dish-name">URU Brewpark</div>
            <div className="dish-type">Pizza, Asian, Desserts</div>
            <div className="rate-time">
              <span>Min 50Rs. </span> <span>Up to 30 min</span>
            </div>
            <div className="pay-method">Accepts online payments only</div>
          </div>
        </div>
        <div className="right-part">
          <div className="ratings">4.3</div>
          <div className="vote">766 votes</div>
          <div className="reviews">512 reviews</div>
        </div>
        <div className="order-part">
          <button>Add to cart</button>
        </div>
        <div className="order-part">
          <button onClick={SaySomething}>Order Now</button>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
