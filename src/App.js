import './App.css';
import { FormEvent, useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';

function App() {
  function teste() {
    console.log('cliquei');
  }

  return (
    <div className="App">
      <div class="container">
        <header>
          <h1>Tabela Verdade Online</h1>
          <input type="text" placeholder="Exemplo de expressão: pvq" />
        </header>
        <div class="buttons-especials">
          <button type="button" value="AC">
            AC
          </button>
          <button type="button" value="DEL">
            DEL
          </button>
          <button type="button" value="=">
            =
          </button>
        </div>

        <div class="buttons">
          <div>
            <button type="button" value="p" onClick={teste}>
              p
            </button>
            <button type="button" value="q">
              q
            </button>
            <button type="button" value="r">
              r
            </button>
            <button type="button" value="s">
              s
            </button>
          </div>

          <div>
            <button type="button" value="~">
              ~
            </button>
            <button type="button" value="^">
              ^
            </button>
            <button type="button" value="v">
              v
            </button>
            <button type="button" value="seta-direita">
              ⇾
            </button>
          </div>
          <div>
            <button type="button" value="seta-dupla">
              ⇿
            </button>
            <button type="button" value="+">
              +
            </button>
            <button type="button" value="(">
              (
            </button>
            <button type="button" value=")">
              )
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
