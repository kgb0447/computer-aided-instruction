import { Routes } from './components/routes/routes';
import {common} from './data/common'
import {BrowserRouter} from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
