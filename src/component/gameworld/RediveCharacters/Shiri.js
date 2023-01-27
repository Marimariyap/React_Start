export default function Shiri() {
  const newLocal = "img/RediveCharacter/Shiri_back.png";
  const newLocal_1 = "img/RediveCharacter/ShiriMagical_back.png";
  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>시오리 ⭐⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>하츠네 수제 수호석 (트라이 애로우 강화)</strong>
          <br />
          하츠네가 시오리에게 선물해준 언니 수제 수호석. 담겨있는 하츠네의
          마음이 여동생에게 용기를 줘, 평소엔 못 낼 힘을 발휘할 수 있다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>최후열에서 고화력 스킬을 연사하는 스나이퍼.
          <br />
          데미지를 입히면서 TP를 회복하는 스킬을 가져 강력한 한 방의 유니온
          버스트를 재빠르게 발동한다.{" "}
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】인챈트 애로우</strong>
            <br />
            전방의 적 하나에게 물리 (대) 데미지 자신의 물리 공격력 (대) 증가
          </li>
          <p />
          <li>
            <strong>【skill 1】트라이 애로우 +</strong>
            <br />
            전방의 적 최대 세 명에게 물리 (소) 데미지 멀리 있는 적일수록 데미지
            증가 자신의 TP (소) 회복{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】윈드 애로우</strong>
            <br />
            전방의 적 하나에게 물리 (중) 데미지 자신의 TP (소) 회복
          </li>
          <p />
          <li>
            <strong>【EX】인핸스 에임 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가{" "}
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>요리(엔젤) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>매지컬 퓨어리 보우 (퓨어리 에이밍 강화)</strong>
          <br />
          마법 사냥꾼 퓨어리 ★ 시오리가 사용하는 마법의 활. 사랑과 희망의 힘을
          담음으로써 어떤 사악한 적이라도 꿰뚫는 필살의 화살을 쏠 수 있다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>중열에서 보조 마법으로 아군을 돕는 쌍둥이
          언니 천사.
          <br />
          방어력을 대폭 높이며, 대상인 아군에게 적의 주의를 끌게 하는 등,
          특수하고 강력한 스킬을 구사하여 적을 농락한다
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】퓨어리 샤워</strong>
            <br />
            아군 전체의 물리 공격력을 (특대) 증가{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】퓨어리 에이밍 +</strong>
            <br />
            자신을 중심으로 범위 내 아군의 물리 공격력 (대) 증가, 물리 크리티컬
            (중) 증가 물리 크리티컬 시 데미지 (소) 증가{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】퓨어리 스나이프</strong>
            <br />
            자신을 중심으로 범위 내 아군의 물리 공격력을 (대) 증가 눈앞의 적
            1명에게 물리 (특대) 데미지{" "}
          </li>
          <p />
          <li>
            <strong>【EX】퓨어리 브레이브 +</strong>
            <br />
            자신의 물리 공격력을 (대) 증가{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
