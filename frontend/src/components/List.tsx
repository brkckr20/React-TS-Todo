import React from "react";
import DeleteModal from "../components/Modal";
import axios from "axios";
import { API_URL } from "../../config";
import { useQuery, useMutation, QueryClient } from "react-query";
// line-through -> yazının üzerini çizmek

interface Todo {
  id?: number;
  todo_name?: string;
  status?: string;
}

interface IListProps {
  isLoading?: boolean;
  error?: string | any;
  data?: Todo[];
}

const List: React.FC<IListProps> = ({ isLoading }) => {
  const queryClient = new QueryClient(); // queryClient'i burada tanımlayın

  const fetchItems = async () => {
    const response = await axios.get(`${API_URL}/todos`); // API endpointinizi buraya ekleyin
    return response.data;
  };

  const { data: items } = useQuery("todos", fetchItems);

  const deleteItem = async (itemId: any) => {
    await axios.delete(`${API_URL}/todos/${itemId}`);
  };
  const mutation = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <React.Fragment>
      {isLoading && <div>Loading...</div>}
      {items?.map((item: any) => (
        <div
          key={item.id}
          className="my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus"
        >
          {item.todo_name}{" "}
          <DeleteModal
            itemId={item.id}
            handleDelete={() => mutation.mutate(item.id)}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default List;
