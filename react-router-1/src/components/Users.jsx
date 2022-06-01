import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    GetData();
  }, []);

  function GetData() {
    axios({
      url: `https://reqres.in/api/users`,
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }
  return (
    <>
      {loading && <div>Loading...</div>}
      {data.map((item) => {
        return (
          <div style={{ marginBottom: "1rem" }} key={item.id}>
            <div>{item.email}</div>
            <div>{item.first_name}</div>
            <Link to={`/users/${item.id}`}>See more</Link>
          </div>
        );
      })}
    </>
  );
};

export default Users;
