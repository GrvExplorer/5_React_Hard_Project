import React from "react";
import { categories } from '../utils/categories' 

function SideBar({ setSelectedCategory, selectedCategory}) {

  return (
      <div className="p-4 text-Primary h-screen overflow-y-auto flex flex-col gap-8  bg-Neutral mt-20 px-6">
       {
        categories.map((v, i) => (
          <div key={i} className={`change1 flex gap-5 px-4 py-2 hover:bg-Active  ${v.name=== selectedCategory ? 'bg-Active ': ''} rounded-full`}
          onClick={() => {
            setSelectedCategory(v.name)
          }}
          >
            <div className={`text-xl change2 text-Active ${v.name=== selectedCategory ? 'text-Primary': ''}  flex items-center`}>
            {v.icon}
            </div>
            <p className="text-xl font-medium">{v.name}</p>
          </div>
        ))
       }
      </div>      
  );
}

export default SideBar;
