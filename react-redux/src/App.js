import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incre, decre } from './actions/counter';

function App() {
  const counter = useSelector((state) => {return state.counter});
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(incre(5))}>Increment</button>
      <button onClick={() => dispatch(decre(5))}>Decrement</button>
    </>
  );
}

export default App;
