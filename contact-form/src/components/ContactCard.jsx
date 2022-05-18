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
      <div onClick={DivClick} className="main-div">
        <div>{props.name}</div>
        <div>{props.email}</div>
        {isClicked && <div>{props.phone}</div>}
      </div>
    </>
  );
};

export default ContactCard;
