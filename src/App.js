import { BrowserRouter, Route, Routes } from 'react-router-dom';

// main
import Header from './component/Header';
import Main from './component/Main';
import Profile from './component/Profile';

// BlueArchive
import BlueArchive from './component/BlueArchive';
import Archive from './component/gameworld/Archive';

// my content
import Countdown from './component/Countdown';
import Exchangerate from './component/Exchangerate';

// PrincessConnect
import PrincessConnect from './component/PrincessConnect';
import Redive from './component/gameworld/Redive';
import RediveCharacter from './component/gameworld/RediveCharacter';

// 미식전
import Pecorine from "./component/gameworld/RediveCharacters/Pecorine";
import Kokkoro from "./component/gameworld/RediveCharacters/Kokkoro";
import Kyaru from "./component/gameworld/RediveCharacters/Kyaru";
import Sheppy from "./component/gameworld/RediveCharacters/Sheppy";

// 트윙클 위시
import Hiyori from "./component/gameworld/RediveCharacters/Hiyori";
import Yui from "./component/gameworld/RediveCharacters/Yui";
import Ray from "./component/gameworld/RediveCharacters/Ray";

// 라비린스
import Ravirins from "./component/gameworld/RediveCharacters/Ravirins";
import Shizuru from "./component/gameworld/RediveCharacters/Shizuru";
import Rino from "./component/gameworld/RediveCharacters/Rino";

// 카르미나
import Nozomi from "./component/gameworld/RediveCharacters/Nozomi";
import Cheeka from "./component/gameworld/RediveCharacters/Cheeka";
import Tumugi from "./component/gameworld/RediveCharacters/Tumugi";

// 리틀 리리컬
import Mimi from "./component/gameworld/RediveCharacters/Mimi";
import Misogi from "./component/gameworld/RediveCharacters/Misogi";
import Kyowoca from "./component/gameworld/RediveCharacters/Kyowoca";
import Littlelyrical from "./component/gameworld/RediveCharacters/Littlelyrical";

// 포레스티에
import Misato from "./component/gameworld/RediveCharacters/Misato";
import Aoi from "./component/gameworld/RediveCharacters/Aoi";
import Hatsune from "./component/gameworld/RediveCharacters/Hatsune";

// 디아볼로스
import Iriya from "./component/gameworld/RediveCharacters/Iriya";
import Yori from "./component/gameworld/RediveCharacters/Yori";
import Acari from "./component/gameworld/RediveCharacters/Acari";
import Sinobu from "./component/gameworld/RediveCharacters/Sinobu";
import Miyako from "./component/gameworld/RediveCharacters/Miyako";

// 왕궁 기사단
import June from "./component/gameworld/RediveCharacters/June";
import Christina from "./component/gameworld/RediveCharacters/Christina";
import Tomo from "./component/gameworld/RediveCharacters/Tomo";
import Matsuri from "./component/gameworld/RediveCharacters/Matsuri";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* main */}
          <Route path="/main" element={<Main/>} />
          <Route path="/profile" element={<Profile/>} />
          
          {/* my content */}
          <Route path='/countdown' element={<Countdown/>} />
          <Route path='/Exchangerate' element={<Exchangerate/>} />

          {/* BlueArchive */}
          <Route path="/Blue Archive" element={<BlueArchive/>} />
          <Route path='/archive' element={<Archive/>} />


          {/* PrincessConnect */}
          <Route path="/Princess Connect! Re:Dive" element={<PrincessConnect/>} />
          <Route path='/redive character' element={<RediveCharacter/>} />
          <Route path='/redive' element={<Redive/>} />

          {/* 미식전 */}
          <Route path='/redive Pecorine' element={<Pecorine/>} />
          <Route path='/redive Kokkoro' element={<Kokkoro/>} />
          <Route path='/redive Kyaru' element={<Kyaru/>} />
          <Route path='/redive Sheppy' element={<Sheppy/>} />
          <Route path='/redive Hiyori' element={<Hiyori/>} />

          {/* 트윙클 위시 */}
          <Route path='/redive Yui' element={<Yui/>} />
          <Route path='/redive Ray' element={<Ray/>} />

          {/* 라비린스 */}
          <Route path='/redive Ravirins' element={<Ravirins/>} />
          <Route path='/redive Shizuru' element={<Shizuru/>} />
          <Route path='/redive Rino' element={<Rino/>} />

          {/* 카르미나 */}
          <Route path='/redive Nozomi' element={<Nozomi/>} />
          <Route path='/redive Cheeka' element={<Cheeka/>} />
          <Route path='/redive Tumugi' element={<Tumugi/>} />

          {/* 리틀 리리컬 */}
          <Route path='/redive Mimi' element={<Mimi/>} />
          <Route path='/redive Misogi' element={<Misogi/>} />
          <Route path='/redive Kyowoca' element={<Kyowoca/>} />
          <Route path='/redive Littlelyrical' element={<Littlelyrical/>} />

          {/* 포레스티에 */}
          <Route path='/redive Misato' element={<Misato/>} />
          <Route path='/redive Aoi' element={<Aoi/>} />
          <Route path='/redive Hatsune' element={<Hatsune/>} />

          {/* 디아볼로스 */}
          <Route path='/redive Iriya' element={<Iriya/>} />
          <Route path='/redive Yori' element={<Yori/>} />
          <Route path='/redive Acari' element={<Acari/>} />
          <Route path='/redive Sinobu' element={<Sinobu/>} />
          <Route path='/redive Miyako' element={<Miyako/>} />

          {/* 왕궁 기사단 */}
          <Route path='/redive June' element={<June/>} />
          <Route path='/redive Christina' element={<Christina/>} />
          <Route path='/redive Tomo' element={<Tomo/>} />
          <Route path='/redive Matsuri' element={<Matsuri/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;