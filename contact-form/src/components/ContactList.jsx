import React, { useState } from "react";
import ContactCard from "./ContactCard";
import UsersData from "./ContactData";
import "./style.css";

const ContactList = () => {
  const [Data, setData] = useState(UsersData);

  console.log(Data);

  return (
    <>
      <div className="header">Contact Form Conditional Rendering</div>
      <div className="main-div">
        {Data.map((e) => (
          <ContactCard
            key={e.id}
            name={e.name}
            email={e.email}
            phone={e.phone}
            // img={e.img}
          />
        ))}
      </div>
    </>
  );
};

export default ContactList;
