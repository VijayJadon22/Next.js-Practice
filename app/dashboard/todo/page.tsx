import { NextPage } from "next";

const getAllTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
};

export const preLoad = async () => {
  console.log("Preloading todos");
  const response = await getAllTodos();

};

const TodoPage = async () => {
  const todos = await getAllTodos();

  return (
    <div>
      <h1 className="text-2xl font-bold">Todo</h1>
      <div className="grid md:grid-cols-3 ">
        {todos?.map((todo: any) => (
          <div className=" p-5 shadow-lg rounded-lg m-2" key={todo.id}>
            <h4>
              {todo.id}. {todo.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
