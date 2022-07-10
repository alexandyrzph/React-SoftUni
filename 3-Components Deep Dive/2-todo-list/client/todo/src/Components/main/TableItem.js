export const TableItem = () => {
  return (
    <>
      <tr className="todo is-completed">
        <td>Give dog a bath</td>
        <td>Complete</td>
        <td className="todo-action">
          <button>Change status</button>
        </td>
      </tr>
      <tr className="todo">
        <td>Vacuum floor</td>
        <td>Incomplete</td>
        <td className="todo-action">
          <button>Change status</button>
        </td>
      </tr>
    </>
  );
};
