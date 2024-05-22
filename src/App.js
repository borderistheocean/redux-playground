import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'
import { RgbPicker } from './features/rgbPicker/RgbPicker';
import { convertToRgb255 } from './app/utils';

function App() {
  const { rValue, gValue, bValue } = useSelector((state) => state.rgbPicker);

  return (
    <div className="App">
      <header className="App-header">
        <img style={{ filter: `drop-shadow(2px 4px 6px rgb(${convertToRgb255(rValue)},${convertToRgb255(gValue)},${convertToRgb255(bValue)}))` }} src={logo} className="App-logo" alt="logo" />
        <RgbPicker />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
