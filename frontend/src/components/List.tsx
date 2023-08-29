import React from "react";
import { XCircle } from "lucide-react";

// line-through -> yazının üzerini çizmek

const List = () => {
  return (
    <React.Fragment>
      <div className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus">
        liste 1 <XCircle color="white" />
      </div>
      <div className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus">
        liste 2 <XCircle color="white" />
      </div>
      <div className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus">
        liste 3 <XCircle color="white" />
      </div>
      <div className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus">
        liste 4 <XCircle color="white" />
      </div>
      <div className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus">
        liste 5 <XCircle color="white" />
      </div>
    </React.Fragment>
  );
};

export default List;
