
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/Actions/CounterActions";

function App() {
  let count = useSelector((state) => state.counter);
  console.log(count);
  let dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: "center" }}>

        <h1>Counter with Redux</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        {count}
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

    </>
  )
}

export default App
