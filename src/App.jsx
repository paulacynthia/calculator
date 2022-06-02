import { useState } from 'react';
import './App.css';
import { construct } from './truthtable';

export default function App() {
  const [value, setValue] = useState('');

  var arr = [];

  function handleClick(val) {
    arr.push(val);
    console.log('bola', arr);
    setValue(value + val);
  }

  function deleteInput() {
    setValue('');
  }

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Tabela Verdade Online</h1>
          <input className="monitor" value={value} id="in" />
        </header>
        <div className="buttons-especials">
          <button type="button" value="AC">
            AC
          </button>
          <button type="button" onClick={deleteInput} value="DEL">
            DEL
          </button>
          <button type="button" onClick={construct} value="=">
            =
          </button>
        </div>

        <div className="buttons">
          <div>
            <button type="button" onClick={() => handleClick('p')} value="p">
              p
            </button>
            <button type="button" onClick={() => handleClick('q')} value="q">
              q
            </button>
            <button type="button" onClick={() => handleClick('r')} value="r">
              r
            </button>
            <button type="button" onClick={() => handleClick('s')} value="s">
              s
            </button>
          </div>

          <div>
            <button type="button" onClick={() => handleClick('~')} value="~">
              ~
            </button>
            <button type="button" onClick={() => handleClick('&')} value="&">
              ^
            </button>
            <button type="button" onClick={() => handleClick('v')} value="v">
              v
            </button>
            <button type="button" onClick={() => handleClick('>')} value=">">
              ⇾
            </button>
          </div>
          <div>
            <button type="button" onClick={() => handleClick('<>')} value="<>">
              ⇿
            </button>
            <button type="button" onClick={() => handleClick('(')} value="(">
              (
            </button>
            <button type="button" onClick={() => handleClick(')')} value=")">
              )
            </button>
          </div>
        </div>
        <div id="tt"></div>
      </div>
    </div>
  );
}
