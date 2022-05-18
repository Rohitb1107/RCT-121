import React, { useState } from 'react';

import UsersData from "./ContactData";

const ContactList = () => {
  const [Data, setData] = useState(UsersData);
  console.log(UsersData);

  return (
    <>
      <div></div>
    </>
  );
};

export default ContactList;
