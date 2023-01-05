import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import PrincessConnect from './component/PrincessConnect';
import BlueArchive from './component/BlueArchive';
import Profile from './component/Profile';
import Countdown from './component/Countdown';
import Redive from './component/Redive';
import Archive from './component/Archive';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/main" element={<Main/>} />
          <Route path="/Princess Connect! Re:Dive" element={<PrincessConnect/>} />
          <Route path="/Blue Archive" element={<BlueArchive/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='/countdown' element={<Countdown/>} />
          <Route path='/redive' element={<Redive/>} />
          <Route path='/archive' element={<Archive/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;