import { useState } from "react";
import './App.css';

const App = () => {
  const [result, setResult] = useState('');

  const handleClick = (evt) => {
    setResult(result.concat(evt.target.name));
  };

  const clear = () => setResult('');

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
        setResult(eval(result).toString());
    } catch(err) {
        setResult('Error');
    }
  };

  const opposite = () => {
    setResult(-result + '');
  };

  const percent = () => {
    setResult(result / 100 + '');
  };

  return (
    <>
      <div className="container">
        <form>
          <input 
            type='text' 
            value={result} 
            maxLength={12}
            onInput={(evt) => {
                evt.target.value = evt.target.value.replace(/[A-zА-яԱ-ֆ]/g, '');
            }}
            onChange={(evt) => {
              setResult(evt.target.value);
            }} />
        </form>

        <div className="keypad">
          <button onClick={clear} id='clear'>AC</button>
          <button onClick={backspace} id='backspace'>Del</button>
          <button onClick={percent}>%</button>
          <button onClick={handleClick} name='/'>&divide;</button>
          <button onClick={handleClick} name='7'>7</button>
          <button onClick={handleClick} name='8'>8</button>
          <button onClick={handleClick} name='9'>9</button>
          <button onClick={handleClick} name='*'>&times;</button>
          <button onClick={handleClick} name='4'>4</button>
          <button onClick={handleClick} name='5'>5</button>
          <button onClick={handleClick} name='6'>6</button>
          <button onClick={handleClick} name='-'>-</button>
          <button onClick={handleClick} name='1'>1</button>
          <button onClick={handleClick} name='2'>2</button>
          <button onClick={handleClick} name='3'>3</button>
          <button onClick={handleClick} name='+'>+</button>
          <button onClick={opposite}>+/-</button>
          <button onClick={handleClick} name='0'>0</button>
          <button onClick={handleClick} name='.'>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;