export const TableItem = (props) => {
  return (
    <tr className={props.isCompleted ? "todo is-completed" : "todo"}>
      <td>{props.title}</td>
      <td>{props.isCompleted ? "Complete" : "Incomplete"}</td>
      <td className="todo-action">
        <button onClick={() => props.onClick(props)}>Change status</button>
      </td>
    </tr>
  );
};
