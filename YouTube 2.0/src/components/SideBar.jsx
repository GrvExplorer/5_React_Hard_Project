import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/categories";

function SideBar({ setSelectedCategory, selectedCategory }) {
  return (
    <div className="mt-20 flex h-screen flex-col gap-8 overflow-y-auto bg-Neutral  p-4 px-6 text-Primary">
      {categories.map((v, i) => (
        <>
          <Link to="/feed">
            <div
              key={i}
              className={`change1 flex gap-5 px-4 py-2 hover:bg-Active  ${
                v.name === selectedCategory ? "bg-Active " : ""
              } rounded-full`}
              onClick={() => {
                setSelectedCategory(v.name);
              }}
            >
              <div
                className={`change2 text-xl text-Active ${
                  v.name === selectedCategory ? "text-Primary" : ""
                }  flex items-center`}
              >
                {v.icon}
              </div>
              <p className="text-xl font-medium">{v.name}</p>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
}

export default SideBar;
