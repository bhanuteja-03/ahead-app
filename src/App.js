import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { Page } from './components/Page2';
import {InfoPage} from './components/InfoPage';
import { StartTestPage } from './components/StartTestPage';
import { WorkWithUs } from './components/WorkWithUs';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <LandingPage/>
      <Page/>
      <InfoPage/>
      <StartTestPage/>
      <WorkWithUs/>
    </div>
    </>
  );
}

export default App;
