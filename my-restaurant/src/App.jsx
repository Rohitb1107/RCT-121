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
  const [costOrder, setCostOrder] = useState("asc");

  useEffect(() => {
    fetchData({ page, ratingOrder, costOrder });
  }, [page, ratingOrder, costOrder]);

  const fetchData = async (page, ratingOrder, costOrder) => {
    setLoading(true);
    axios({
      method: "get",
      url: "http://188.166.98.109:5000/str",
      params: {
        _page: page,
        _limit: 5,
        _sort: "rating,cost",
        _order: `${ratingOrder},${costOrder}`,
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
          disabled={costOrder === "desc"}
          onClick={() => setCostOrder("desc")}
        >
          COST SORT BY DESC
        </button>
        <button
          disabled={costOrder === "asc"}
          onClick={() => setCostOrder("asc")}
        >
          COST SORT BY ASC
        </button>
      </div>
      <div>
        <button
          disabled={ratingOrder === "desc"}
          onClick={() => setRatingOrder("desc")}
        >
          RATING SORT BY DESC
        </button>
        <button
          disabled={ratingOrder === "asc"}
          onClick={() => setRatingOrder("asc")}
        >
          RATING SORT BY ASC
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
