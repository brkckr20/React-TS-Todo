import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import List from "../components/List";
import { useMutation } from "react-query";
import axios from "axios";
import { API_URL } from "../../config";

interface Todo {
  id?: number;
  todo_name?: string | any;
  status?: string;
}

const Home = () => {
  const [todo, setTodo] = useState<Todo>({});

  const { mutate } = useMutation((data: string) => {
    return axios.post(`${API_URL}/todos`, data);
  });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(todo?.todo_name);
  };

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
          <form onSubmit={submit}>
            <input
              type="text"
              placeholder="New Todo enter..."
              className="input w-full rounded-none bg-slate-100 text-black"
              value={todo.todo_name}
              onChange={(e) => setTodo({ todo_name: e.target.value })}
            />
          </form>
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
