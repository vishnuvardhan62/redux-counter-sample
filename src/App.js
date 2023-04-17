//import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${process.env.PUBLIC_URL ?? ""}/logo.svg`}
          className="App-logo"
          alt="logo"
        />
        <Counter />
      </header>
    </div>
  );
}

export default App;
