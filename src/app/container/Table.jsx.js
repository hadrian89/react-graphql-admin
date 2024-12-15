import Table from 'react-bootstrap/Table';

function BasicExample({ todos }) {
  console.log(todos,'todos')
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Todo</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos && todos.map((todo, index) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.task}</td>
            <td>{todo.isCompleted ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BasicExample;