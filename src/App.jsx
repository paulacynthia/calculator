import './App.css';
export default function App() {
  let monitor = document.getElementById('monitor');

  function insereNum(val) {
    let monitor = document.getElementById('monitor');
    console.log(val);
    monitor.innerHTML += val;
  }

  function deleteInput() {
    monitor.innerHTML = '';
  }

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Tabela Verdade Online</h1>
          <div id="monitor"></div>
        </header>
        <div className="buttons-especials">
          <button type="button" value="AC">
            AC
          </button>
          <button type="button" onClick={deleteInput} value="DEL">
            DEL
          </button>
          <button type="button" value="=">
            =
          </button>
        </div>

        <div className="buttons">
          <div>
            <button type="button" onClick={() => insereNum('p')} value="p">
              p
            </button>
            <button type="button" onClick={() => insereNum('q')} value="q">
              q
            </button>
            <button type="button" onClick={() => insereNum('r')} value="r">
              r
            </button>
            <button type="button" onClick={() => insereNum('s')} value="s">
              s
            </button>
          </div>

          <div>
            <button type="button" onClick={() => insereNum('p')} value="~">
              ~
            </button>
            <button type="button" onClick={() => insereNum('^')} value="^">
              ^
            </button>
            <button type="button" onClick={() => insereNum('v')} value="v">
              v
            </button>
            <button
              type="button"
              onClick={() => insereNum('⇾')}
              value="seta-direita"
            >
              ⇾
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => insereNum('⇿')}
              value="seta-dupla"
            >
              ⇿
            </button>
            <button type="button" onClick={() => insereNum('(')} value="(">
              (
            </button>
            <button type="button" onClick={() => insereNum(')')} value=")">
              )
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
