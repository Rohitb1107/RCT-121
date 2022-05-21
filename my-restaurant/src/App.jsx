import React, { useState, useEffect } from "react";
import "./App.css";
import MenuCard from "./Components/MenuCard";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: "http://localhost:8080/food",
      params: {
        _page: page,
        _limit: 5,
      },
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  console.log(data);

  return (
    <div className="App">
      {data.map((item) => {
        return <MenuCard key={item.id} {...item} />;
      })}
    </div>
  );
}

export default App;
