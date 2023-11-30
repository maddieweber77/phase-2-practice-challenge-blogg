import React, {useState} from "react";

function Header({onSearch, searchTerm}) {
  



  return (
    <div>
      <header className="logo">
        <h1>the bLOGg</h1>

        {/* This is the search box */}
        <input
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
          style={{
            width: "500px",
            height: "20px",
            borderRadius: "15px",
            border: "none",
            backgroundColor: "rgb(88, 204, 208)",
            padding: "10px",
            color: "white",
          }}
          placeholder="Search an article or the author"
          type="text"
        ></input>
      </header>
    </div>
  );
}

export default Header;

//create state
//add value and onchange as props in input
//has to have a callback function that is passed to app because we need to compare the search term to the titles and authors