import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const { id } = params;
    axios({
      url: `https://reqres.in/api/users/${id}`,
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [params.id]);

  console.log(data);

  return (
    <>
      {loading && <div>Loading...</div>}

      <div style={{ marginBottom: "1rem" }} key={data.id}>
        <img width={75} src={data.avatar} alt="icon" />
        <div>Email:{data.email}</div>
        <div>First Name:{data.first_name}</div>
        <div>Last Name: {data.last_name}</div>
      </div>
    </>
  );
};

export default Users;
