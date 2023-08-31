import React from "react";
import DeleteModal from "../components/Modal";

// line-through -> yazının üzerini çizmek

const List = () => {
  return (
    <React.Fragment>
      <div className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus">
        liste 1 <DeleteModal />
      </div>
      <div className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus">
        liste 2 <DeleteModal />
      </div>
      <div className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus">
        liste 3 <DeleteModal />
      </div>
      <div className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus">
        liste 4 <DeleteModal />
      </div>
      <div className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus">
        liste 5 <DeleteModal />
      </div>
    </React.Fragment>
  );
};

export default List;
