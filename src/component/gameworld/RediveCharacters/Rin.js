export default function Rin() {
  const newLocal = "img/RediveCharacter/Rin_back.png";
  const newLocal_1 = "img/RediveCharacter/RinRanger_back.png";

  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>린 ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>쥬얼 리듬 도토리 (행운은 누워서 기다려 모드 강화)</strong>
          <br />
          막대한 마력을 내포한 전설의 도토리가 장식된 목걸이. 린이 사용하는
          마법을 증폭해, 주변 아군에게 큰 힘을 준다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>중열에서 물리 파티를 강화하는 게으름뱅이
          소녀.
          <br />
          아군의 물리 공격력을 올리면서 마법 방어력도 올려 공격과 수비 모든
          방면에서 파티를 서포트한다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】수제 단팥빵 차지</strong>
            <br />
            아군 전체의 HP (소) 회복 아군 전체의 물리 공격력과 마법 방어력 (중)
            증가{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】행운은 누워서 기다려 모드 +</strong>
            <br />
            자신의 주변 아군 전체의 마법 방어력 (대) 증가 물리 공격력 (중) 증가
            물리 크리티컬 (소) 증가{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】도토리 스로잉</strong>
            <br />
            전방의 적 하나에게 물리 (소) 데미지 대상을 스턴 상태로 만듦{" "}
          </li>
          <p />
          <li>
            <strong>【EX】도토리 차지 +</strong>
            <br />
            전투 시작 시 자신의 마법 방어력 (대) 증가
          </li>
          <p />
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>유이(새해) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>도토리 레인저 랜스 (너트 브레이커 강화)</strong>
          <br />
          린이 갑옷과 함께 구매한, 어머니의 사랑이 가득 담겨있는 창. 무시무시한
          단단함을 자랑하지만, 매우 가벼워 린이 자유자재로 다룰 수 있다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>후열에 있으며 보조 마법에 특화된 나들이 옷을
          입은 힐러.
          <br />
          자신의 공격력과 맞바꿔 강력한 배리어와 연속 회복 상태를 아군 전체에
          부여한다.
          <br />
          절대적인 방어력은 모든 것을 압도한다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】너트 이그제큐션</strong>
            <br />
            전방 범위 내의 적 전체에게 물리 (중) 데미지 물리 방어력을 (소) 감소{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】너트 브레이커 +</strong>
            <br />
            전방 범위 내의 적에게 물리 (특대) 데미지 물리 방어력 (대) 감소
            자신의 행동속도 (특대) 감소{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】너트 슬래시</strong>
            <br />
            전방 범위 내의 적에게 물리 (소) 데미지 물리 방어력을 (소) 감소{" "}
          </li>
          <p />
          <li>
            <strong>【EX】너트 빌드업 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
