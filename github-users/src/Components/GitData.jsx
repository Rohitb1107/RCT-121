import axios from "axios";
import GithubCard from "./GitCard";
import React, { useState, useEffect } from "react";

const getGithubUsers = (q = "rohitb1107", page = 1) => {
  return axios("https://api.github.com/search/users", {
    method: "GET",
    params: {
      q,
      per_page: 5,
      page,
    },
  });
};

function GitData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("react");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getGithubUsers(query, page)
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [query, page]);

  const handleClick = (query) => setQuery(query);
  return (
    <div>
      <h2>Github Users</h2>
      {loading && <div>...loading</div>}
      {error && <div>...error</div>}
      <SearchBox handleClick={handleClick} />
      {data?.items?.map((item) => (
        <GithubCard key={item.id} {...item} />
      ))}
      <div>
        <button className="btn" disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button onClick={() => setPage(page + 1)}>NEXT</button>
      </div>
    </div>
  );
}

const SearchBox = ({ handleClick }) => {
  const [text, setText] = useState("");
  return (
    <div className="input-feild">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleClick(text)}> SEARCH </button>
    </div>
  );
};

export default GitData;
