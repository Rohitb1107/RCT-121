import React, { useState, useEffect } from "react";
import Products from "./Products";
import Slider from "./Slider";
import axios from "axios";
import Pagination from "./Pagination";

const Home = () => {
  const [prodData, setProdData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page) => {
    axios({
      method: "get",
      url: "http://localhost:8080/ProductsData",
      params: {
        _page: page,
        _limit: 8,
      },
    })
      .then((res) => {
        setProdData(res.data);
        console.log(prodData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Slider />
      <div className="home-div">
        {prodData.map((item) => {
          return <Products key={item.id} {...item} />;
        })}
      </div>
      <div className="pagination-div">
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="page-btn btn-group mr-2" role="group" aria-label="First group">
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
