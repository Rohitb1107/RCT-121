import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    GetData();
  }, [params.user_id]);

  function GetData() {
    const { id } = params;
    axios({
      url: `https://reqres.in/api/users/${params.user_id}`,
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

      {/* <div style={{ marginBottom: "1rem" }} key={data.data.id}>
        <div>{data.data.email}</div>
        <div>{data.data.first_name}</div>
      </div> */}
    </>
  );
};

export default Users;
