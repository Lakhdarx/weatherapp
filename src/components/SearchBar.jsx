import { useState } from "react";
import "../styles/SearchBar.css";
export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <form className="searchPanel" onSubmit={handleSearch}>
      <input
        className="searchInput"
        type="text"
        placeholder="Search city"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <button type="submit" className="searchBtn">
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
}
