import './App.css'
import { useState,useEffect,useContext,useRef,useReducer,} from 'react';
import ShinCodeContext from "./main";
import useLocalStorage from "./useLocalStorage";


function App() {
  const [count, setCount] = useState(0);
  const codeInfo = useContext(ShinCodeContext);
  const ref = useRef();

  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("hello");
  })
    const handleRef = () => {
      console.log(ref.current.value);
      console.log(ref.current.offsetHeight);
    }
  const reducer = (state, action) => {
    switch(action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state -1;
      default:
        return state;
    }
  }
  const [age, setAge] = useLocalStorage("age",18);

    const[state, dispatch] = useReducer(reducer, 0);
  return (
  <div className="App">
       <hr />
       <h1>useState,useEffect</h1>
       <button onClick={handleClick}>+</button>
       <p>{count}</p>

       <hr />
       <h1>useContext</h1>
       <button onClick={handleClick}>+</button>
       <p>{codeInfo.name}</p>
       <p>{codeInfo.age}</p>

       <hr />
       <h1>useRef</h1>
       <input type="text" ref={ref} />
       <button onClick={handleRef}>UseRef</button>

       <hr />
       <h1>useReducer</h1>
       <p>カウント{state}</p>
       <button onClick={() => dispatch({type: "increment"})}>+</button>
       <button onClick={() => dispatch({type: "decrement"})}>-</button>
       <hr />

       <h1>custom hook</h1>
       <p>{age}</p>
       <button onClick={() => setAge(80)}>年齢をセット</button>

  </div>
  )
}
export default App;
