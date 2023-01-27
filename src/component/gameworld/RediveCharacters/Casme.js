export default function Casme() {
  const newLocal = "img/RediveCharacter/Casme_back.png";
  const newLocal_1 = "img/RediveCharacter/CasmeMagical_back.png";
  const newLocal_2 = "img/RediveCharacter/CasmeSummer_back.png";

  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        <h1>카스미 ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>디텍티브 루페 (루트 오브 바인드 강화)</strong>
          <br />
          카스미가 애용하는 탐정도구 중 하나. 수많은 사건을 함께 해결해온 이
          돋보기는, 어떤 세세한 것이라도 놓치지않고, 상대의 퇴로를 끊는다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>후열에서 상대의 행동을 방해하는 데 특화된
          명탐정.
          <br />
          속박이나 혼란을 부여하는 스킬로 상대의 움직임을 방해하고 마법 방어력을
          낮추는 필드를 전개하여 승리로 이끈다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】크리미널 프리즌</strong>
            <br />
            앞에서 세 번째 적을 중심으로 범위 내 적의 마법 방어력 (특대) 감소 및
            TP 상승 (소) 감소 필드 전개, 대상의 행동속도 (소) 감소
          </li>
          <p />
          <li>
            <strong>【skill 1】루트 오브 바인드 +</strong>
            <br />
            전방 범위 내 적 전체에게 마법 (소) 데미지, 대상을 속박 상태로 만듦,
            범위 내 적의 수에 비례해 속박 시간 증가
          </li>
          <p />
          <li>
            <strong>【skill 2】미스리드 배럿</strong>
            <br />
            전방의 적 하나에게 마법 (소) 데미지, 대상을 혼란 상태로 만듦
          </li>
          <p />
          <li>
            <strong>【EX】디텍티브 마인드 +</strong>
            <br />
            전투 시작 시 자신의 마법 방어력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        <h1>카스미(매지컬) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>매지컬 미스티 로드(매지컬 할레이션 +)</strong>
          <br />
          마법탐정 미스티★카스미가 사용하는 마법의 지팡이.
          <br />
          사랑과 희망의 힘을 담음으로써, 사악한 적을 사로잡아 어떤 진실이라도
          밝히는 빛을 발할 수 있다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>후열 방해에 특화된 능력을 가진 마법 탐정.
          <br />
          상대의 TP를 크게 감소시키는 스킬이나, 먼 적을 속박시키는 스킬을 다루며
          상대의 연계를 크게 흐트린다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】미스틱 프리즘</strong>
            <br />적 전체에게 마법 (중) 데미지, 대상의 TP (소) 감소
          </li>
          <p />
          <li>
            <strong>【skill 1】매지컬 할레이션 +</strong>
            <br />
            TP가 가장 많은 적의 TP를 (중) 감소시키고, 물리, 마법 공격력과 물리,
            마법 크리티컬을 짧은 시간동안 (대) 감소
            <br />
            TP가 최대치에 도달한 캐릭터는 제외
          </li>
          <p />
          <li>
            <strong>【skill 2】미스틱 랩핑</strong>
            <br />
            가장 먼 적을 중심으로 범위 내 적 전체에게 마법 (소) 데미지, 대상을
            속박 상태로 만듦
          </li>
          <p />
          <li>
            <strong>【EX】매지컬 디텍티브 +</strong>
            <br />
            전투 시작 시 자신의 물리 방어력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_2} alt="redive" className="character" />
      <div className="well">
        <h1>카스미(수영복) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>업데이트 예정</strong>
          <br />
          성야의 정령들을 깃들게 한 치카의 마법 지팡이. 창환술에 호흥한 정령들에
          의한 크리스마스의 가호가, 대상자의 능력을 크게 향상시킨다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>후열에서, 적의 방어력을 깎아먹는 물가의
          명탐정.
          <br />
          공격력이 높은적을 목표로 삼아 방어력을 낮추고, 아군을 강화하는 스킬로,
          어떤 난사건도 해결로 인도한다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】서머 디텍티브</strong>
            <br />
            물리 / 마법 공격력과 관계없이 공격력이 가장 높은 적 1명에게 마법
            (대) 데미지, 대상의 마법 방어력 (중) 감소
            <br />
            대상의 물리 / 마법 크리티컬 (대) 감소
          </li>
          <p />
          <li>
            <strong>【skill 1】아쿠아 캡쳐</strong>
            <br />
            물리 / 마법 공격력과 관계없이 공격력이 가장 높은 적 1명의 마법
            방어력 (중) 감소, 해당 적이 받는 크리티컬 데미지 (소) 증가
          </li>
          <p />
          <li>
            <strong>【skill 2】쇼어 인텔리전스</strong>
            <br />
            자신을 제외한 아군 전체의 마법 공격력 / 크리티컬 (대) 증가, 상승량은
            자신의 마법 공격력 수치에 비례하여 증가
          </li>
          <p />
          <li>
            <strong>【EX】미스틱 서머 +</strong>
            <br />
            전투 시작 시 자신의 마법 공격력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
