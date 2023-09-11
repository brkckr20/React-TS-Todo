import React, { useState } from "react";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import List from "../components/List";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { API_URL } from "../../config";

interface Todo {
  id?: number;
  not_name?: string | any;
  status?: string;
}

const Home = () => {
  const [todo, setTodo] = useState<Todo>();
  const [active, setActive] = useState("Active");
  const [messageActive, setMessageActive] = useState(false);

  const queryClient = useQueryClient();
  const post = async (newTodo: Todo) => {
    try {
      const response = await axios.post(`${API_URL}`, newTodo);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const mutation = useMutation(post, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ not_name: todo?.not_name });
    setTodo({ not_name: "" });
    setMessageActive(true);
  };

  if (messageActive) {
    setTimeout(() => {
      setMessageActive(false);
    }, 5000);
  }

  return (
    <React.Fragment>
      <Header />
      <div className="max-w-[1400px] mx-auto mt-4 px-3">
        <div className="mb-2 flex justify-end">
          <button className="btn bg-red-600 text-white hover:bg-red-700 duration-300">
            Clear Completed
          </button>
        </div>
        {messageActive && (
          <div className="alert alert-success rounded-none mb-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <span>Todo added successfully</span>
              <span className="block text-xs">
                This message will close in 5 seconds...
              </span>
            </div>
          </div>
        )}

        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="New Todo enter..."
              className="input w-full rounded-none bg-slate-100 text-black"
              value={todo?.not_name || ""}
              onChange={(e) => setTodo({ ...todo, not_name: e.target.value })}
              name="todo_name"
            />
          </form>
        </div>
        <div className="mt-2">
          <List status={active} />
        </div>
      </div>
      <BottomNavbar
        active={active}
        setActive={(newActive) => setActive(newActive)}
      />
    </React.Fragment>
  );
};

export default Home;
