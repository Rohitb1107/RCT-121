import React, { useState } from "react";
import "./style.css";

const ContactCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  function DivClick() {
    setIsClicked(!isClicked);
  }

  //   if (isClicked) {
  //     return <div onClick={DivClick}>Clicked</div>;
  //   }

  return (
    <>
      <div className="each-div card" style={{ width: "18rem" }}>
        {/* <img className="card-img-top" src={props.img} alt="Card image cap" /> */}
        <div className="card-body">
          <div className="card-title">{props.name}</div>
          <div className="card-text">{props.email}</div>
          {isClicked && <div>{props.phone}</div>}
          <a href="#" onClick={DivClick} className="btn btn-primary">
            Click to see more
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
