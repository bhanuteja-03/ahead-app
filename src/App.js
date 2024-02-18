import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { Page } from './components/Page2';
import {InfoPage} from './components/InfoPage'
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <LandingPage/>
      <Page/>
      <InfoPage/>
      {/* <LandingPage/> */}
    </div>
    </>
  );
}

export default App;
