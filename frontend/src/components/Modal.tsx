import React, { useState } from "react";
import { XCircle } from "lucide-react";
import { useMutation } from "react-query";
import axios from "axios";
import { API_URL } from "../../config";

interface IModal {
  itemId?: number;
  handleDelete: () => void;
}
const Modal: React.FC<IModal> = ({ handleDelete }) => {
  const [open, setOpen] = useState(false);

  /* const deleteItem = useMutation((id: any) => {
    const response = axios.delete(`${API_URL}/todos/${id}`);
    return response;
  }); */

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
            <button
              className="btn bg-error-content"
              // onClick={() => deleteItem.mutate(itemId)}
              onClick={handleDelete}
            >
              Yes
            </button>
          </div>
        </form>
      </dialog>
    </React.Fragment>
  );
};

export default Modal;
