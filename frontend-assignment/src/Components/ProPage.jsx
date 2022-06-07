import React from "react";

const ProPage = () => {
  return (
    <>
      <div className="product-page">
        <div className="left-part">
          <img
            className="sigle-prod-img"
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt=""
          />
        </div>
        <div className="right-part">
          <h1>Mens Cotton Jacket</h1>
          <p>
            great outerwear jackets for Spring/Autumn/Winter, suitable for many
            occasions, such as working, hiking, camping, mountain/rock climbing,
            cycling, traveling or other outdoors. Good gift choice for you or
            your family member. A warm hearted love to Father, husband or son in
            this thanksgiving or Christmas Day.
          </p>
          <p>Price: 55.99Rs.</p>
          <button type="button" class="btn btn-primary">
            Buy now
          </button>
          <button type="button" class="btn btn-info">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProPage;
