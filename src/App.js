import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import PrincessConnect from './component/PrincessConnect';
import BlueArchive from './component/BlueArchive';
import Profile from './component/Profile';
import Countdown from './component/Countdown';
import Redive from './component/gameworld/Redive';
import Archive from './component/gameworld/Archive';
import RediveCharacter from './component/gameworld/RediveCharacter';

import Pecorine from "./component/gameworld/RediveCharacters/Pecorine"
import Kokkoro from "./component/gameworld/RediveCharacters/Kokkoro"
import Kyaru from "./component/gameworld/RediveCharacters/Kyaru"
import Sheppy from "./component/gameworld/RediveCharacters/Sheppy"
import Hiyori from "./component/gameworld/RediveCharacters/Hiyori"
import Yui from "./component/gameworld/RediveCharacters/Yui"
import Ray from "./component/gameworld/RediveCharacters/Ray"
import Ravirins from "./component/gameworld/RediveCharacters/Ravirins"
import Shizuru from "./component/gameworld/RediveCharacters/Shizuru"
import Rino from "./component/gameworld/RediveCharacters/Rino"
import Nozomi from "./component/gameworld/RediveCharacters/Nozomi"
import Cheeka from "./component/gameworld/RediveCharacters/Cheeka"
import Tumugi from "./component/gameworld/RediveCharacters/Tumugi"
import Mimi from "./component/gameworld/RediveCharacters/Mimi"
import Misogi from "./component/gameworld/RediveCharacters/Misogi"
import Kyowoca from "./component/gameworld/RediveCharacters/Kyowoca"
import Littlelyrical from "./component/gameworld/RediveCharacters/Littlelyrical"


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
          <Route path='/redive character' element={<RediveCharacter/>} />
          <Route path='/redive Pecorine' element={<Pecorine/>} />
          <Route path='/redive Kokkoro' element={<Kokkoro/>} />
          <Route path='/redive Kyaru' element={<Kyaru/>} />
          <Route path='/redive Sheppy' element={<Sheppy/>} />
          <Route path='/redive Hiyori' element={<Hiyori/>} />
          <Route path='/redive Yui' element={<Yui/>} />
          <Route path='/redive Ray' element={<Ray/>} />
          <Route path='/redive Ravirins' element={<Ravirins/>} />
          <Route path='/redive Shizuru' element={<Shizuru/>} />
          <Route path='/redive Rino' element={<Rino/>} />
          <Route path='/redive Nozomi' element={<Nozomi/>} />
          <Route path='/redive Cheeka' element={<Cheeka/>} />
          <Route path='/redive Tumugi' element={<Tumugi/>} />
          <Route path='/redive Mimi' element={<Mimi/>} />
          <Route path='/redive Misogi' element={<Misogi/>} />
          <Route path='/redive Kyowoca' element={<Kyowoca/>} />
          <Route path='/redive Littlelyrical' element={<Littlelyrical/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;