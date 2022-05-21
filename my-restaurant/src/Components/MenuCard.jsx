import React, { useState, useEffect } from "react";
import "./style.css";

const MenuCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="left-part">
          <div className="left-img">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="right-in-left-part">
            <div className="dish-name">{props.name}</div>
            <div className="dish-type">{props.cuisine}</div>
            <div className="rate-time">
              <span>Min {props.cost} Rs. </span>
            </div>
            <div className="pay-method">{props.paymentMethods}</div>
          </div>
        </div>
        <div className="right-part">
          <div className="ratings">{props.rating} Ratings</div>
          <div className="vote">{props.votes} Votes</div>
          <div className="reviews">{props.reviews} Reviews</div>
        </div>
        <div className="order-part">
          <button>Add to cart</button>
        </div>
        <div className="order-part">
          <button>Order Now</button>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
