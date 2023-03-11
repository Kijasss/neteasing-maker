const Counter = (props) => {
  if (!props.count) return null;
  return (
    <div>
      counter
      <br></br>
      <button onClick={props.juegeName}>-1</button>
    </div>
  );
};

export default Counter;
