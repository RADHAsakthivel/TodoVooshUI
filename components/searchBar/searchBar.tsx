import React from "react";

function SearchBar() {
  return (
    <div className="bg-white shadow-md flex justify-between min-h-10 border-2 ">
      <div>
        <label>Search:</label>
        <input
          id="search"
          name="search"
          type="text"
          required
          placeholder="search..."
          className="px-[5px] py-[2px] m-[2px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label>Sort By:</label>
        <select className="px-[5px] py-[2px] m-[2px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Recent</option>
            <option>Status</option>
            <option>Date</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
