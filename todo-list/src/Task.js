export const Task = (props) => {
  return (
    <div
      className="tasks"
      style={{
        backgroundColor: props.completed ? "green" : "white",
      }}
    >
      <h1>{props.task}</h1>
      <button onClick={() => props.deleteTodo(props.id)}>X</button>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
    </div>
  );
};
