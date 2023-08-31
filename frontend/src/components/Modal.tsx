import React, { useState } from "react";
import { XCircle } from "lucide-react";

const Modal = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <span onClick={() => setOpen(!open)}>
        <XCircle color="white" />
      </span>
      <dialog className="modal" open={open}>
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Delete Confirmation</h3>
          <p className="py-4">This action cannot be undone! Are you sure?</p>
          <div className="modal-action">
            <button className="btn bg-inherit" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button className="btn bg-error-content">Yes</button>
          </div>
        </form>
      </dialog>
    </React.Fragment>
  );
};

export default Modal;
