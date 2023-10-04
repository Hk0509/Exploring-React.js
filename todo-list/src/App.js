import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTodo = () => {
    // const newTodoList = [...todoList, newTask];
    const newTodo = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      task: newTask,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id) => {
    // const newTodoList = todoList.filter((item) => {
    //   return todo !== item;
    // });
    setTodoList(todoList.filter((item) => id !== item.id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: item.completed ? false : true };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTodo}> Add Todo</button>
      </div>
      <div className="List">
        {todoList.map((todo) => {
          return (
            <Task
              task={todo.task}
              id={todo.id}
              completed={todo.completed}
              deleteTodo={deleteTodo}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
