import { Link } from "react-router-dom";
import "./css/RediveCharacter.css";

export default function RediveCharacter() {
  const Pecorine = "./img/RediveIcon/RedivePecorine.png";
  const Kokkoro = "./img/RediveIcon/RediveKokkoro.png";
  const Kyaru = "./img/RediveIcon/RediveKyaru.png";
  const Sheppy = "./img/RediveIcon/RediveSheppy.png";

  const Hiyori = "./img/RediveIcon/RediveHiyori.png";
  const Yui = "./img/RediveIcon/RediveYui.png";
  const Ray = "./img/RediveIcon/RediveRay.png";

  const Ravirins = "./img/RediveIcon/RediveRavirins.png";
  const Shizuru = "./img/RediveIcon/RediveShizuru.png";
  const Rino = "./img/RediveIcon/RediveRino.png";

  const Nozomi = "./img/RediveIcon/RediveNozomi.png";
  const Cheeka = "./img/RediveIcon/RediveCheeka.png";
  const Tumugi = "./img/RediveIcon/RediveTumugi.png";

  const Mimi = "./img/RediveIcon/RediveMimi.png";
  const Misogi = "./img/RediveIcon/RediveMisogi.png";
  const Kyowoca = "./img/RediveIcon/RediveKyowoca.png";

  const Misato = "./img/RediveIcon/RediveMisato.png";
  const Aoi = "./img/RediveIcon/RediveAoi.png";
  const Hatsune = "./img/RediveIcon/RediveHatsune.png";

  const Iriya = "./img/RediveIcon/RediveIriya.png";
  const Yori = "./img/RediveIcon/RediveYori.png";
  const Acari = "./img/RediveIcon/RediveAcari.png";
  const Sinobu = "./img/RediveIcon/RediveSinobu.png";
  const Miyako = "./img/RediveIcon/RediveMiyako.png";

  const June = "./img/RediveIcon/RediveJune.png";
  const Christina = "./img/RediveIcon/RediveChristina.png";
  const Tomo = "./img/RediveIcon/RediveTomo.png";
  const Matsuri = "./img/RediveIcon/RediveMatsuri.png";

  const Saren = "./img/RediveIcon/RediveSaren.png";
  const Suzumei = "./img/RediveIcon/RediveSuzumei.png";
  const Ayane = "./img/RediveIcon/RediveAyane.png";
  const Kurumi = "./img/RediveIcon/RediveKurumi.png";

  const Maho = "./img/RediveIcon/RediveMaho.png";
  const Macoto = "./img/RediveIcon/RediveMacoto.png";
  const Kaori = "./img/RediveIcon/RediveKaori.png";
  const Casme = "./img/RediveIcon/RediveCasme.png";

  const Mahiru = "./img/RediveIcon/RediveMahiru.png";
  const Rima = "./img/RediveIcon/RediveRima.png";
  const Shiri = "./img/RediveIcon/RediveShiri.png";
  const Rin = "./img/RediveIcon/RediveRin.png";

  const Akino = "./img/RediveIcon/RediveAkino.png";
  const Mihuyu = "./img/RediveIcon/RediveMihuyu.png";
  const Yukari = "./img/RediveIcon/RediveYukari.png";
  const Tamaki = "./img/RediveIcon/RediveTamaki.png";

  const Luca = "./img/RediveIcon/RediveLuca.png";
  const Mitsuki = "./img/RediveIcon/RediveMitsuki.png";
  const Erico = "./img/RediveIcon/RediveErico.png";
  const Nanaca = "./img/RediveIcon/RediveNanaca.png";
  const Anna = "./img/RediveIcon/RediveAnna.png";

  const Io = "./img/RediveIcon/RediveIo.png";
  const Misaki = "./img/RediveIcon/RediveMisaki.png";
  const Suzuna = "./img/RediveIcon/RediveSuzuna.png";

  const Monica = "./img/RediveIcon/RediveMonica.png";
  const Yuki = "./img/RediveIcon/RediveYuki.png";
  const Ninon = "./img/RediveIcon/RediveNinon.png";
  const Cooca = "./img/RediveIcon/RediveCooca.png";
  const Ayumi = "./img/RediveIcon/RediveAyumi.png";

  const Uni = "./img/RediveIcon/RediveUni.png";
  const Chieru = "./img/RediveIcon/RediveChieru.png";
  const Chloe = "./img/RediveIcon/RediveChloe.png";

  const Homare = "./img/RediveIcon/RediveHomare.png";
  const Kaya = "./img/RediveIcon/RediveKaya.png";
  const Inori = "./img/RediveIcon/RediveInori.png";

  const Credita = "./img/RediveIcon/RediveCredita.png";
  const Karin = "./img/RediveIcon/RediveKarin.png";
  const Neneca = "./img/RediveIcon/RediveNeneca.png";
  const Muimi = "./img/RediveIcon/RediveMuimi.png";

  const Littlelyrical = "./img/RediveIcon/RediveLittlelyrical.png";
  const Sitsune = "./img/RediveIcon/RediveSitsune.png";
  const Sakino = "./img/RediveIcon/RediveSakino.png";

  const Lin = "./img/RediveIcon/RediveLin.png";
  const Uzuki = "./img/RediveIcon/RediveUzuki.png";
  const Mio = "./img/RediveIcon/RediveMio.png";
  const Rem = "./img/RediveIcon/RediveRem.png";
  const Ram = "./img/RediveIcon/RediveRam.png";
  const Emilia = "./img/RediveIcon/RediveEmilia.png";
  const Zita = "./img/RediveIcon/RediveZita.png";
  const Luna = "./img/RediveIcon/RediveLuna.png";
  const Arisa = "./img/RediveIcon/RediveArisa.png";
  const Glare = "./img/RediveIcon/RediveGlare.png";
  const Anne = "./img/RediveIcon/RediveAnne.png";
  const Roo = "./img/RediveIcon/RediveRoo.png";

  return (
    <div className="container">
      <div className="princess_icon">
        <h1 className="rediveH1">캐릭터 목록</h1>
        <h2>미식전</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Pecorine">
              <img src={Pecorine} alt="RediveCharacter" />
              <span>페코린느</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Kokkoro">
              <img src={Kokkoro} alt="RediveCharacter" />
              <span>콧코로</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Kyaru">
              <img src={Kyaru} alt="RediveCharacter" />
              <span>캬루</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Sheppy">
              <img src={Sheppy} alt="RediveCharacter" />
              <span>셰피</span>
            </Link>
          </li>
        </ul>

        <h2>트윙클 위시</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Hiyori">
              <img src={Hiyori} alt="RediveCharacter" />
              <span>히요리</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Yui">
              <img src={Yui} alt="RediveCharacter" />
              <span>유이</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Ray">
              <img src={Ray} alt="RediveCharacter" />
              <span>레이</span>
            </Link>
          </li>
        </ul>

        <h2>라비린스</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Ravirins">
              <img src={Ravirins} alt="RediveCharacter" />
              <span>라비리스타</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Shizuru">
              <img src={Shizuru} alt="RediveCharacter" />
              <span>시즈루</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Rino">
              <img src={Rino} alt="RediveCharacter" />
              <span>리노</span>
            </Link>
          </li>
        </ul>

        <h2>카르미나</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Nozomi">
              <img src={Nozomi} alt="RediveCharacter" />
              <span>노조미</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Cheeka">
              <img src={Cheeka} alt="RediveCharacter" />
              <span>치카</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Tumugi">
              <img src={Tumugi} alt="RediveCharacter" />
              <span>츠무기</span>
            </Link>
          </li>
        </ul>

        <h2>리틀 리리컬</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Mimi">
              <img src={Mimi} alt="RediveCharacter" />
              <span>미미</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Misogi">
              <img src={Misogi} alt="RediveCharacter" />
              <span>미소기</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Kyowoca">
              <img src={Kyowoca} alt="RediveCharacter" />
              <span>쿄우카</span>
            </Link>
          </li>
        </ul>

        <h2>포레스티에</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Misato">
              <img src={Misato} alt="RediveCharacter" />
              <span>미사토</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Aoi">
              <img src={Aoi} alt="RediveCharacter" />
              <span>아오이</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Hatsune">
              <img src={Hatsune} alt="RediveCharacter" />
              <span>하츠네</span>
            </Link>
          </li>
        </ul>

        <h2>디아볼로스</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Iriya">
              <img src={Iriya} alt="RediveCharacter" />
              <span>이리야</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Yori">
              <img src={Yori} alt="RediveCharacter" />
              <span>요리</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Acari">
              <img src={Acari} alt="RediveCharacter" />
              <span>아카리</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Sinobu">
              <img src={Sinobu} alt="RediveCharacter" />
              <span>시노부</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Miyako">
              <img src={Miyako} alt="RediveCharacter" />
              <span>미야코</span>
            </Link>
          </li>
        </ul>

        <h2>왕궁 기사단</h2>
        <ul id="prin">
          <li>
            <Link to="/redive June">
              <img src={June} alt="RediveCharacter" />
              <span>쥰</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Christina">
              <img src={Christina} alt="RediveCharacter" />
              <span>크리스티나</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Tomo">
              <img src={Tomo} alt="RediveCharacter" />
              <span>토모</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Matsuri">
              <img src={Matsuri} alt="RediveCharacter" />
              <span>마츠리</span>
            </Link>
          </li>
        </ul>

        <h2>사렌디아 구호원</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Saren">
              <img src={Saren} alt="RediveCharacter" />
              <span>사렌</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Suzumei">
              <img src={Suzumei} alt="RediveCharacter" />
              <span>스즈메</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Ayane">
              <img src={Ayane} alt="RediveCharacter" />
              <span>아야네</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Kurumi">
              <img src={Kurumi} alt="RediveCharacter" />
              <span>쿠루미</span>
            </Link>
          </li>
        </ul>

        <h2>카온 자경단</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Maho">
              <img src={Maho} alt="RediveCharacter" />
              <span>마호</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Macoto">
              <img src={Macoto} alt="RediveCharacter" />
              <span>마코토</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Kaori">
              <img src={Kaori} alt="RediveCharacter" />
              <span>카오리</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Casme">
              <img src={Casme} alt="RediveCharacter" />
              <span>카스미</span>
            </Link>
          </li>
        </ul>

        <h2>엘리자베스 파크</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Mahiru">
              <img src={Mahiru} alt="RediveCharacter" />
              <span>마히루</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Rima">
              <img src={Rima} alt="RediveCharacter" />
              <span>리마</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Shiri">
              <img src={Shiri} alt="RediveCharacter" />
              <span>시오리</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Rin">
              <img src={Rin} alt="RediveCharacter" />
              <span>린</span>
            </Link>
          </li>
        </ul>

        <h2>메르쿠리우스 재단</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Akino">
              <img src={Akino} alt="RediveCharacter" />
              <span>아키노</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Mihuyu">
              <img src={Mihuyu} alt="RediveCharacter" />
              <span>미후유</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Yukari">
              <img src={Yukari} alt="RediveCharacter" />
              <span>유카리</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Tamaki">
              <img src={Tamaki} alt="RediveCharacter" />
              <span>타마키</span>
            </Link>
          </li>
        </ul>

        <h2>트와일라이트 캐러밴</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Luca">
              <img src={Luca} alt="RediveCharacter" />
              <span>루카</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Mitsuki">
              <img src={Mitsuki} alt="RediveCharacter" />
              <span>미츠키</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Erico">
              <img src={Erico} alt="RediveCharacter" />
              <span>에리코</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Nanaca">
              <img src={Nanaca} alt="RediveCharacter" />
              <span>나나카</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Anna">
              <img src={Anna} alt="RediveCharacter" />
              <span>안나</span>
            </Link>
          </li>
        </ul>

        <h2>루센트 학원</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Io">
              <img src={Io} alt="RediveCharacter" />
              <span>이오</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Misaki">
              <img src={Misaki} alt="RediveCharacter" />
              <span>미사키</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Suzuna">
              <img src={Suzuna} alt="RediveCharacter" />
              <span>스즈나</span>
            </Link>
          </li>
        </ul>

        <h2>바이스플뤼겔 랜드솔 지부</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Monica">
              <img src={Monica} alt="RediveCharacter" />
              <span>모니카</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Yuki">
              <img src={Yuki} alt="RediveCharacter" />
              <span>유키</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Ninon">
              <img src={Ninon} alt="RediveCharacter" />
              <span>니논</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Cooca">
              <img src={Cooca} alt="RediveCharacter" />
              <span>쿠우카</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Ayumi">
              <img src={Ayumi} alt="RediveCharacter" />
              <span>아유미</span>
            </Link>
          </li>
        </ul>

        <h2>성 테레사 학원</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Uni">
              <img src={Uni} alt="RediveCharacter" />
              <span>유니</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Chieru">
              <img src={Chieru} alt="RediveCharacter" />
              <span>치에루</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Chloe">
              <img src={Chloe} alt="RediveCharacter" />
              <span>클로에</span>
            </Link>
          </li>
        </ul>

        <h2>드래곤즈 네스트</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Homare">
              <img src={Homare} alt="RediveCharacter" />
              <span>호마레</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Kaya">
              <img src={Kaya} alt="RediveCharacter" />
              <span>카야</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Inori">
              <img src={Inori} alt="RediveCharacter" />
              <span>이노리</span>
            </Link>
          </li>
        </ul>

        <h2>기타</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Credita">
              <img src={Credita} alt="RediveCharacter" />
              <span>크레짓타</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Karin">
              <img src={Karin} alt="RediveCharacter" />
              <span>카린</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Neneca">
              <img src={Neneca} alt="RediveCharacter" />
              <span>네네카</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Muimi">
              <img src={Muimi} alt="RediveCharacter" />
              <span>무이미</span>
            </Link>
          </li>
        </ul>

        <h2>멀티 캐릭터</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Littlelyrical">
              <img src={Littlelyrical} alt="RediveCharacter" />
              <span>미소기&미미&쿄우카</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Sitsune">
              <img src={Sitsune} alt="RediveCharacter" />
              <span>하츠네&시오리</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Sakino">
              <img src={Sakino} alt="RediveCharacter" />
              <span>아키노&사렌</span>
            </Link>
          </li>
        </ul>

        <h2>콜라보 캐릭터</h2>
        <ul id="prin">
          <li>
            <Link to="/redive Lin">
              <img src={Lin} alt="RediveCharacter" />
              <span>린</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Uzuki">
              <img src={Uzuki} alt="RediveCharacter" />
              <span>우즈키</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Mio">
              <img src={Mio} alt="RediveCharacter" />
              <span>미오</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Rem">
              <img src={Rem} alt="RediveCharacter" />
              <span>렘</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Ram">
              <img src={Ram} alt="RediveCharacter" />
              <span>람</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Emilia">
              <img src={Emilia} alt="RediveCharacter" />
              <span>에밀리아</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Zita">
              <img src={Zita} alt="RediveCharacter" />
              <span>지타</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Luna">
              <img src={Luna} alt="RediveCharacter" />
              <span>루나</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Arisa">
              <img src={Arisa} alt="RediveCharacter" />
              <span>아리사</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Glare">
              <img src={Glare} alt="RediveCharacter" />
              <span>글레어</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Anne">
              <img src={Anne} alt="RediveCharacter" />
              <span>앤</span>
            </Link>
          </li>
          <li>
            <Link to="/redive Roo">
              <img src={Roo} alt="RediveCharacter" />
              <span>루</span>
            </Link>
          </li>
        </ul>
        <p>업데이트 일자 : 2023-01-11</p>
      </div>
    </div>
  );
}
