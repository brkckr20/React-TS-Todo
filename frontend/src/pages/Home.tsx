import React from "react";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="max-w-[1400px] mx-auto bg-white mt-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="New Todo"
            className="input input-bordered input-accent w-full rounded-none"
          />
        </div>
        <div>Todo List</div>
      </div>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default Home;
