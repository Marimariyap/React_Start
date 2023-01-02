import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import Game from './component/Game';
import Profile from './component/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/game-world" element={<Game/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;