import React, { useState } from "react";
import ContactCard from "./ContactCard";
import UsersData from "./ContactData";
import "./style.css";

const ContactList = () => {
  const [Data, setData] = useState(UsersData);

  console.log(Data);

  return (
    <>
      <div>
        {Data.map((e) => (
          <ContactCard key={e.id} name={e.name} email={e.email} />
        ))}
      </div>
    </>
  );
};

export default ContactList;
