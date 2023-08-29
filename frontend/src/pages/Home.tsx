import React from "react";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import List from "../components/List";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="max-w-[1400px] mx-auto  mt-4">
        <div className="mb-2 flex justify-end">
          <button className="btn bg-red-600 text-white hover:bg-red-700 duration-300">
            Clear Completed
          </button>
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="New Todo enter..."
            className="input w-full rounded-none bg-slate-300"
          />
        </div>
        <div className="mt-2">
          <List />
        </div>
      </div>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default Home;
