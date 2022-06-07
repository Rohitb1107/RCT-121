import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProPage = () => {
  const [singleProd, setSingleProd] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/ProductsData/${params.id}`)
      .then((res) => {
        setSingleProd(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <>
      <div className="product-page">
        <div className="left-part">
          <img className="single-prod-img" src={singleProd.image} alt="" />
        </div>
        <div className="right-part">
          <h1>{singleProd.title}</h1>
          <p>{singleProd.description}</p>
          <h5>Price: {singleProd.price} Rs.</h5>
          <button type="button" className="btn btn-primary">
            Buy now
          </button>
          <button type="button" className="btn btn-info">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProPage;
