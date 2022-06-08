import React, { useState, useEffect } from "react";
import Products from "./Products";
import Slider from "./Slider";
import axios from "axios";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [prodData, setProdData] = useState([]);
  const [page, setPage] = useState(1);
  const [ratingOrder, setRatingOrder] = useState("asc");
  const [costOrder, setCostOrder] = useState("asc");

  useEffect(() => {
    fetchData({ page, ratingOrder, costOrder });
  }, [page, ratingOrder, costOrder]);

  const fetchData = async ({ page, ratingOrder, costOrder }) => {
    setLoading(true);
    axios({
      method: "get",
      url: "http://localhost:8080/ProductsData",
      params: {
        _page: page,
        _limit: 8,
        _sort: "rating.rate,price",
        _order: `${ratingOrder},${costOrder}`,
      },
    })
      .then((res) => {
        setProdData(res.data);
        setLoading(false);
        console.log(prodData);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      {/* <Slider /> */}
      <div className="home-div">
        {loading && <div>Loading...</div>}
        <div className="filter-div">
          <div className="sort-div">
            <button
              disabled={costOrder === "asc"}
              onClick={() => setCostOrder("asc")}
            >
              COST SORT BY ASC
            </button>
            <button
              disabled={costOrder === "desc"}
              onClick={() => setCostOrder("desc")}
            >
              COST SORT BY DESC
            </button>
          </div>
          <div className="sort-div-2">
            <button
              disabled={ratingOrder === "asc"}
              onClick={() => setRatingOrder("asc")}
            >
              RATING SORT BY ASC
            </button>
            <button
              disabled={ratingOrder === "desc"}
              onClick={() => setRatingOrder("desc")}
            >
              RATING SORT BY DESC
            </button>
          </div>
        </div>
        <div className="products-div-2">
          {prodData.map((item) => {
            return <Products key={item.id} {...item} />;
          })}
        </div>
      </div>

      <div className="pagination-div">
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div
            className="page-btn btn-group mr-2"
            role="group"
            aria-label="First group"
          >
            <button
              type="button"
              className="btn btn-secondary"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>

        <Pagination currentPage={page} lastPage={3} onPageChange={setPage} />
      </div>
    </>
  );
};

export default Home;
