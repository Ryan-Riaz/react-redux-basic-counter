import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./States/Actions";

function App() {
    const value = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1>Simple Counter App</h1>
            <button onClick={() => dispatch(increment(5))}>increment</button>
            <h2>{value}</h2>
            <button onClick={() => dispatch(decrement(1))}>decrement</button>
        </div>
    );
}

export default App;
