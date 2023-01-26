export default function Matsuri() {
  const newLocal = "img/RediveCharacter/Matsuri_back.png";
  const newLocal_1 = "img/RediveCharacter/MatsuriGhost_back.png";
  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>마츠리 ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>저스티스 메달 (타이거 쇼크 강화)</strong>
          <br />
          마츠리가 소중히 여기는 기사단에서 수여받은 훈장. 빛나는 메달을 볼
          때마다 마츠리의 정의의 마음은 강해지며 어떠한 악에도 맞서 싸운다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>전위에서 날렵한 움직임으로 적을 휘젓는
          견습기사.
          <br />
          유니언 버스트로 적진 한가운데에 뛰어들어 자신의 주위를 공격하는 스킬로
          상대를 몰아친다.{" "}
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】타이거 히어로 봄버</strong>
            <br />
            앞에서 세 번째 적 앞으로 뛰어들어 자신의 전후 범위 내 적 전체에게
            물리 (대) 데미지{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】타이거 쇼크 +</strong>
            <br />
            자신의 전방 범위 내 적에게 물리 (소) 데미지 대상을 스턴 상태로 만듦
            자신의 물리 방어력 및 마법 방어력 (특대) 증가{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】타이거 스핀</strong>
            <br />
            자신의 주변 범위 내 적에게 물리 (소) 데미지{" "}
          </li>
          <p />
          <li>
            <strong>【EX】히어로의 마음가짐 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (중) 증가 자신의 물리 방어력 (소)
            증가{" "}
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>마츠리(할로윈) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>화이트 타이거 폼 (할로우 타이거 클로 강화)</strong>
          <br />
          할로윈 밤에 마츠리가 획득한 새로운 변신 폼... 이라는 설정의 새로운
          코스튬. 츠무기가 수제로 만들어 착용감이 뛰어나고, 재질도 튼튼하다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>전열에서 손톱을 세우는 할로윈 견습기사.
          <br />
          유니온 버스트는 사용 횟수에 따라 강화되는 스킬로 대미지와 행동속도를
          올려서 적을 찢는다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】할로윈 타이거 히어로</strong>
            <br />
            전방의 적 하나에게 물리 (대) 대미지 자신의 행동속도 (대) 증가 이
            스킬의 피해량과 행동속도 증가량은 UB 사용 수에 비례해서 증가 (최대
            4회){" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】할로우 타이거 클로 +</strong>
            <br />
            전방의 적 하나에게 물리 (대) 데미지 자신의 물리 공격력 (소) 증가
            자신의 TP (소) 회복 이 스킬의 피해량과 물리 공격력 증가량은 UB
            사용수에 비례하여 증가 (최대 4회){" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】나이트메어 타이거</strong>
            <br />
            전방의 적 하나에게 물리 (대) 대미지 자신의 남은 체력의 20%를 소모{" "}
          </li>
          <p />
          <li>
            <strong>【EX】트릭 오어 저스티스 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
