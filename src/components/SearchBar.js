import React, { useState } from "react";
import { Font } from "../config/Font";
import { Colors } from "../config/Colors";
import { AiOutlineMenu, AiFillCaretDown } from "react-icons/ai";
import { BsSearch, BsTruck } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function SearchBar({ selectedCategory, queryParams }) {
  const [queryState, setQueryState] = useState(queryParams)
  return (
    <div
      className="py-2"
      style={{
        backgroundColor: Colors.Primary,
        color: "white",
        fontSize: Font.Medium,
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="mx-3 border border-radius d-flex align-items-center">
          <div
            className="p-2 px-3"
            style={{
              backgroundColor: Colors.PrimaryDark,
              fontSize: Font.Large,
            }}
          >
            <AiOutlineMenu />
          </div>
          <span
            className="px-3"
            style={{
              fontSize: Font.Medium,
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            {selectedCategory}
          </span>
          <div className="pe-3">
            <AiFillCaretDown />
          </div>
        </div>

        <div className="border border-radius d-flex align-items-center bg-white">
          <div
            className="px-3 py-2"
            style={{ backgroundColor: Colors.PrimaryLight }}
          >
            Categories {""}
            <AiFillCaretDown />
          </div>
          <input
            type="text"
            className="border-0 px-3"
            placeholder="Search"
            value={queryState}
            onChange={(e) => setQueryState(e.target.value)}
            style={{ width: "25rem", }}
          />
          <Link to={`/search?product=${queryState}&category=${selectedCategory}`} className="mx-2" style={{ fontSize: '20px', color: Colors.PrimaryDark }}>
            <FiSearch />
          </Link>
        </div>
        <div className="me-3" style={{ fontSize: '23px' }}>
          <span className="mx-3" style={{ fontSize: Font.Normal, textTransform: 'uppercase', fontWeight: '500' }}>Free Shipping</span> <BsTruck />
        </div>
      </div>
    </div>
  );
}
