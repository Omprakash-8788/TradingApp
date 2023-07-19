import React from "react";
import "./Searchbars.css";
import SearchBar from "./Searchbars";
import BookData from "./Datas.json";

function MainSearch() {
  return (
    <div>
      <SearchBar placeholder="Enter your query..." data={BookData} />
    </div>
  );
}

export default MainSearch;
