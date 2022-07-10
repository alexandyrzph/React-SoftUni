import { Table } from "./Table";

export const Main = () => {
  return (
    <main className="main">
      <section className="todo-list-container">
        <h1>Todo List</h1>
        <div className="table-wrapper">
          <Table />
        </div>
      </section>
    </main>
  );
};
