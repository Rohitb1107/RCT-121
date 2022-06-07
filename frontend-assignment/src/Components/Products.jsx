import React from "react";

const Products = (props) => {
  return (
    <>
      <div className="products-div">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="prod-img card-img-top"
            src={props.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            {/* <p className="card-text">{props.description}</p> */}
            <div className="price-div">
              <p>Price: {props.price}</p>
              <p>Rating: {props.rating.rate}</p>
            </div>
            <a href="#" className="btn btn-primary">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
