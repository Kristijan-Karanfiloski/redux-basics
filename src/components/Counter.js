import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  increaseBy,
  toggle,
} from "../store/counter-slice";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const increaseByHandler = (amount) => {
    dispatch(increaseBy(amount));
  };

  const toggleHandler = () => {
    dispatch(toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counter.visible && (
        <div className={classes.value}>{counter.counter}</div>
      )}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseByHandler.bind(null, 5)}>increase By 5</button>
      <button onClick={increaseByHandler.bind(null, 10)}>increase By 10</button>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
