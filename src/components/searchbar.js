import React from "react";
import { Search } from "../utils/iconsComponent";
import "../styles/searchbar.css";
function Searchbar() {
  return (
    <div class="body">
      <Search />
      <input class="search" placeholder="Search" />
    </div>
  );
}
export default Searchbar;
