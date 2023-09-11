import React from "react";
import DeleteModal from "../components/Modal";
import axios from "axios";
import { API_URL } from "../../config";
import { useQuery, useMutation, useQueryClient } from "react-query";
// line-through -> yazının üzerini çizmek

interface Todo {
  id?: number;
  not_name?: string;
  status?: string;
}

interface IListProps {
  status?: string;
}

const List: React.FC<IListProps> = ({ status }) => {
  const queryClient = useQueryClient();

  const fetchItems = async () => {
    const response = await axios.get(`${API_URL}`); // API endpointinizi buraya ekleyin
    return response.data;
  };

  const { data: items, isLoading } = useQuery("todos", fetchItems);

  const deleteItem = async (itemId: any) => {
    await axios.delete(`${API_URL}/${itemId}`);
  };
  const mutation = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const updateItem = async (itemId: number | undefined) => {
    await axios.put(`${API_URL}/${itemId}`);
  };
  const updateMutation = useMutation(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  if (isLoading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <React.Fragment>
      {status === "All"
        ? items.map((item: Todo) => (
            <div
              key={item.id}
              className={`my-2 p-2 border border-secondary flex items-center justify-between cursor-pointer hover:bg-secondary-focus ${
                item.status !== "active" &&
                "line-through bg-accent border-accent text-white"
              }`}
              onClick={() => updateMutation.mutate(item?.id)}
            >
              {item.not_name}{" "}
              <DeleteModal
                itemId={item.id}
                handleDelete={() => mutation.mutate(item.id)}
              />
            </div>
          ))
        : items
            .filter((item: Todo) => item.status === status?.toLowerCase())
            .map((item: Todo) => (
              <div
                key={item.id}
                className={`flex items-center my-2 p-2 border border-secondary justify-between cursor-pointer hover:bg-secondary-focus ${
                  item.status !== "active" &&
                  "line-through  bg-accent border-accent text-white"
                }`}
              >
                <div
                  className={`flex-1`}
                  onClick={() => updateMutation.mutate(item?.id)}
                >
                  {item.not_name}{" "}
                </div>
                <div className="pr-2">
                  <DeleteModal
                    itemId={item.id}
                    handleDelete={() => mutation.mutate(item.id)}
                  />
                </div>
              </div>
            ))}
    </React.Fragment>
  );
};

export default List;
