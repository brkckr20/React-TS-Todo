import React from "react";
import DeleteModal from "../components/Modal";

// line-through -> yazının üzerini çizmek
import axios from "axios";
import { API_URL } from "../../config";
import { useQuery } from "react-query";

interface Todo {
  id?: number;
  todo_name?: string;
  status?: string;
}

const List = () => {
  const { isLoading, error, data } = useQuery<Todo[]>(
    "todo/getTodos",
    async () => {
      const response = await axios.get(`${API_URL}/todos`);
      return response.data;
    }
  );

  if (error) {
    console.log(error);
  }

  if (isLoading) {
    return "Loading...";
  }

  return (
    <React.Fragment>
      {data?.map((item) => (
        <div
          key={item.id}
          className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus"
        >
          {item.todo_name} <DeleteModal />
        </div>
      ))}
    </React.Fragment>
  );
};

export default List;
