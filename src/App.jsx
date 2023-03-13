import { useState } from "react";
import Comment from "./component/comment";
import Counter from "./component/counter";

const App = () => {
  const [count, setcount] = useState(0);

  const changeCount = () => {
    setcount(count - 1);
  };

  return (
    <div>
      App
      <br />
      <button onClick={() => setcount(count + 2)}>+2</button>
      <Counter juegeName={changeCount} count={count}></Counter>
      <div>{count && <h1>count: {count}</h1>}</div>
      <Comment></Comment>
    </div>
  );
};

export default App;
