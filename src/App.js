import Weatherbox from './Weatherbox';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <h1>Current weather in...</h1>
      <Weatherbox />
      </div>
      <footer>
      Coded open-source by Kat Soltysiak and hosted on <a href="https://github.com/kasiasoltysiak/React-Weather" target="_blank" rel="noreferrer">GitHub</a>.
      </footer>
    </div>
  );
}

export default App;
