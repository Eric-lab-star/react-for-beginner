import { useState } from "react";
function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const onChange = (event) => {
    setTask(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (task === "") {
      return;
    }
    setTask("");
    setTaskList((currentTaskList) => [task, ...currentTaskList]);
  };
  console.log(taskList);
  return (
    <div>
      <h2>My To do List ({taskList.length})</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={task}
          type="text"
          placeholder="Write your tasks here"
        />
        <button>Add Task</button>
        <br></br>
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
