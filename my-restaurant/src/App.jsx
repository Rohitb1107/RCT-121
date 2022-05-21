import React, { useState, useEffect } from "react";
import "./App.css";
import MenuCard from "./Components/MenuCard";
import axios from "axios";
import PaginationComponent from "./Components/PageCompo";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [ratingOrder, setRatingOrder] = useState("asc");

  useEffect(() => {
    fetchData(page, ratingOrder);
  }, [page, ratingOrder]);

  const fetchData = async (page, ratingOrder) => {
    setLoading(true);
    axios({
      method: "get",
      url: "http://localhost:8080/food",
      params: {
        _page: page,
        _limit: 5,
        _sort: "rating",
        _order: ratingOrder,
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
  };

  return (
    <div className="App">
      <h1>My Restaurants</h1>
      {loading && <div>Loading...</div>}
      <div className="sort-div">
        <button
          disabled={ratingOrder === "desc"}
          onClick={() => setRatingOrder("desc")}
        >
          SORT BY DESC 
        </button>
        <button
          disabled={ratingOrder === "asc"}
          onClick={() => setRatingOrder("asc")}
        >
          SORT BY ASC
        </button>
      </div>
      {data.map((item) => {
        return <MenuCard key={item.id} {...item} />;
      })}
      <div className="pagination-div">
        {/* pagination */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          prev
        </button>
        <button onClick={() => setPage(page + 1)}>next</button>
        <PaginationComponent
          currentPage={page}
          lastPage={5}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export default App;
