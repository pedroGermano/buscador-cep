import { FiSearch } from 'react-icons/fi';

import './styles.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          />
          <button className="btnSearch">
            <FiSearch size={25} color="#fff"/>
          </button>
      </div>

      <main className='main'>
        <h2>CEP: 79003222</h2>
        <span>Rua Teste</span>
        <span>Complemento: teste</span>
        <span>Vila Rosa</span>
        <span>Fortaleza Ce</span>
      </main>
    </div>
  );
}

