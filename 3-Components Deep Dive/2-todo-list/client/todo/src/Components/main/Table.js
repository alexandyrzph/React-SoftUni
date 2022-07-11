import { TableItem } from "./TableItem";
import { useEffect, useState } from "react";

export const Table = () => {
  const URL = "http://localhost:3030";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${URL}/jsonstore/todos`)
      .then((todo) => todo.json())
      .then((data) => setTodos(Object.values(data)))
      .catch((err) => console.log(err));
  }, []);

  const changeStatusHandler = (todo) => {
    fetch(`${URL}/jsonstore/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ isCompleted: !todo.isCompleted }),
    })
      .then((res) => res.json())
      .then((modifiedTodo) => {
        setTodos((oldTodos) => oldTodos.map((todo) => (todo._id === modifiedTodo._id ? modifiedTodo : todo)));
      });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TableItem key={todo._id} {...todo} onClick={changeStatusHandler} />
        ))}
      </tbody>
    </table>
  );
};
