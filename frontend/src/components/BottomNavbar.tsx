import { useState } from "react";

const BottomNavbar = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="btm-nav">
      <button
        className={`${active === "All" && "active"}`}
        onClick={() => setActive("All")}
      >
        All
      </button>
      <button
        className={`${active === "Active" && "active"}`}
        onClick={() => setActive("Active")}
      >
        Active
      </button>
      <button
        className={`${active === "Completed" && "active"}`}
        onClick={() => setActive("Completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default BottomNavbar;
