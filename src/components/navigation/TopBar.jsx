import React from "react";
import { BsSearch } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className="flex justify-around py-3 border">
      <div className="border py-1 flex px-1 rounded-full items-center">
        <div>
          <BsSearch />
        </div>
        <input
          type="search"
          name=""
          id=""
          className="bg-transparent px-2 focus:outline-none"
          placeholder="search"
        />
      </div>
      <div>Blogs</div>
      <div className="flex">
        <div>links</div>
        <div>menu</div>
      </div>
    </div>
  );
};

export default TopBar;
