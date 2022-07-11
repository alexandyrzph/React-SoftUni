export const TableItem = (props) => {
  // console.log(props);
  
  return (
    <tr className={props.isCompleted ? "todo is-completed" : "todo"}>
      <td>{props.text}</td>
      <td>{props.isCompleted ? "Complete" : "Incomplete"}</td>
      <td className="todo-action">
        <button>Change status</button>
      </td>
    </tr>
  );
};
