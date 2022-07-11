import { TableItem } from "./TableItem";
import { useEffect, useState } from "react";

export const Table = () => {
  const URL = "http://localhost:3030";
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch(`${URL}/jsonstore/todos`)
      .then((todo) => todo.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);

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
        <TableItem {...todos}/>
      </tbody>
    </table>
  );
};
