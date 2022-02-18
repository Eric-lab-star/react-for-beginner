import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState(0);
  const onChange = (event) => {
    setKeyword(event.target.value);
    console.log(keyword);
  };
  const onClick = () => setCounter((previous) => previous + 1);
  console.log("render");

  return (
    <div className={styles.header}>
      <input type="text" placeholder="search" onChange={onChange} />
      <h1>{counter}</h1>
      <button onClick={onClick}>Counter</button>
    </div>
  );
}

export default App;
