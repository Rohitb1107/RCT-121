import React from "react";

const Products = () => {
  return (
    <>
      <div className="products-div">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="prod-img card-img-top"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h5>
            <p className="card-text">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
