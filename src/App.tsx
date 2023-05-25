
import Header from './components/header/Header';
import PageRoute from './routes/PageRoute';
import { BrowserRouter } from 'react-router-dom';
import appStyle from './App.module.scss';

function App() {
  return (
    <div className={appStyle.App}>
      <BrowserRouter>
        <Header/>
        <PageRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
