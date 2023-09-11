import React from "react";

interface IProps {
  active?: string;
  setActive?: (newActive: string) => void;
}

const BottomNavbar: React.FC<IProps> = ({
  active = "All",
  setActive = () => {},
}) => {
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
