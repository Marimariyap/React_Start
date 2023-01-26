export default function Cheeka() {
  const newLocal = "img/RediveCharacter/Cheeka_back.png";
  const newLocal_1 = "img/RediveCharacter/CheekaSummer_back.png";
  const newLocal_2 = "img/RediveCharacter/CheekaChristmas_back.png";

  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        <h1>치카 ⭐⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>취령보의 룬 노트 (치어 송 강화)</strong>
          <br />
          용기의 창환술이 기록된 악보. 치카의 맑은 노랫소리의 가호로 아군의
          감각은 총명해지고, 적의 급소를 노리기 쉽게 된다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>후열에서 전열의 전투 중인 동료를 서포트하는
          소환사.
          <br />
          유니온 버스트로 아군을 회복하는 동시에 적을 공격하는 요정을 최전선에
          소환한다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】실피드 오케스트라</strong>
            <br />
            아군 전체의 체력 (중) 회복, 물리공격력 (특대) 증가, 물리 크리티컬 시
            데미지 (중) 증가
            <br />
            연속 HP 회복 상태 부여, 가장 앞에 있는 아군 앞에 정령 소환
          </li>
          <p />
          <li>
            <strong>【skill 1】치어 송 +</strong>
            <br />
            가장 앞에 있는 아군을 중심으로 범위 내 아군 전체의 물리 공격력 (대)
            증가, 물리 크리티컬 (중) 증가
            <br />
            범위 내 아군 전체의 HP (소) 회복하는 필드 전개
          </li>
          <p />
          <li>
            <strong>【skill 2】페어리즈 라라바이</strong>
            <br />
            전방의 적 하나의 물리 공격력 (중) 감소
          </li>
          <p />
          <li>
            <strong>【EX】기프티드 보이스 +</strong>
            <br />
            전투 시작 시 자신의 마법 공격력 (중) 증가, 자신의 마법 방어력 (소)
            증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        <h1>치카(수영복) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>업데이트 예정</strong>
          <br />
        </p>

        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>중열에서 수호의 찬가를 바치는 여름 바다의
          가희.
          <br />
          배틀을 시작할 때 아군의 마법 방어를 대폭 강화하고 흡수 배리어와 HP
          회복 스킬로
          <br />
          어떠한 맹공이 쏱아져도 아군을 지킨다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】서머 오션 심포니</strong>
            <br />
            아군 전체의 물리·마법 방어력 (중) 증가, 물리·마법 흡수 배리어 전개
          </li>
          <p />
          <li>
            <strong>【skill 1】오션 프로텍션</strong>
            <br />
            자신을 중심으로 한 범위 내 아군 전체의 마법 방어력 (특대) 증가
            <br />이 스킬은 3회까지 사용할 때마다 스킬 효과가 감소
          </li>
          <p />
          <li>
            <strong>【skill 2】돌핀 송</strong>
            <br />
            HP가 가장 낮은 아군 1명의 HP (소) 회복, 효과를 받은 아군에게 지속적
            HP 회복 상태 부여
          </li>
          <p />
          <li>
            <strong>【EX】서머 디바 +</strong>
            <br />
            전투 시작시 자신의 마법 공격력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_2} alt="redive" className="character" />
      <div className="well">
        <h1>치카(성탄절) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>취령장 룬 스노우 (어센션 왈츠 강화)</strong>
          <br />
          성야의 정령들을 깃들게 한 치카의 마법 지팡이. 창환술에 호흥한 정령들에
          의한 크리스마스의 가호가, 대상자의 능력을 크게 향상시킨다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>후열에서 정령을 창환하여 싸우는 눈꽃의 가희.
          <br />
          유니온 버스트로 소환하는 정령들은 HP 및 TP를 회복하는 능력이 있으며
          불리한 전황을 뒤바꾼다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】실피드 캐럴</strong>
            <br />
            【소환】자신의 앞에 정령 3체를 창환
          </li>
          <p />
          <li>
            <strong>【skill 1】어센션 왈츠 +</strong>
            <br />
            물리 공격력이 가장 높은 아군 캐릭터 하나의 물리 공격력 및 물리
            크리티컬 (대) 증가
            <br />
            해당 캐릭터의 마법 공격력이 높을수록 물리 공격력 상승량 증가
          </li>
          <p />
          <li>
            <strong>【skill 2】가디언 멜로디</strong>
            <br />
            범위 내 아군 전체의 물리 방어력 (중) 증가, TP (소) 회복
          </li>
          <p />
          <li>
            <strong>【EX】기프티드 앤섬 +</strong>
            <br />
            전투 시작 시 자신의 마법 공격력 (중) 증가, 자신의 마법 방어력 (소)
            증가
          </li>
        </ul>
      </div>
    </div>
  );
}
