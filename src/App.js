import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import Game from './component/Game';
import Profile from './component/Profile';
import Countdown from './component/Countdown';
import Redive from './component/Redive';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/game" element={<Game/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='/countdown' element={<Countdown/>} />
          <Route path='/redive' element={<Redive/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;