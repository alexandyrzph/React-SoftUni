import { TableItem } from "./TableItem";

export const Table = () => {
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
        <TableItem />
      </tbody>

    </table>
  );
};
