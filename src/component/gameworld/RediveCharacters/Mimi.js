export default function Mimi() {
  const newLocal = "img/RediveCharacter/Mimi_back.png";
  const newLocal_1 = "img/RediveCharacter/MimiGhost_back.png";
  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>미미 ⭐⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>토끼씨 블레이드 (뿅뿅 어택 강화)</strong>
          <br />
          미미가 애용하는 검. 그 귀여움에 푹 빠진 미미가 휘두르면, 보기와는
          정반대의 공격 범위로 적에게 아픈 경험을 하게 해준다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>중열에서 적의 전열을 무너뜨리는 토끼 소녀.
          <br />
          유니온 버스트는 가장 근접한 적에게 큰 데미지를 입힌 후<br />
          주위에 있는 적도 공격하기에 전열을 빠르게 함락시킬 수 있다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】토끼씨 레볼루션</strong>
            <br />
            전방 범위 내 모든 적에게 물리 (대) 데미지
            <br />
            자신과 2번째로 가까운 적을 중심으로 한 범위 내 모든 적에게 물리
            (특대) 데미지
          </li>
          <p />
          <li>
            <strong>【skill 1】뿅뿅 어택 +</strong>
            <br />
            전방 범위 내 적 전체에게 물리 (대) 데미지
          </li>
          <p />
          <li>
            <strong>【skill 2】토끼씨의 응원</strong>
            <br />
            아군 전체에 물리 공격력 (소) 증가
          </li>
          <p />
          <li>
            <strong>【EX】토끼씨 파워 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>미미(할로윈) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>빙글빙글 토끼씨 블레이드 (빙글빙글 어택 강화)</strong>
          <br />
          할로윈을 위해 미미가 어머니와 함께 만든, 붕대를 빙글빙글 만 토끼씨
          블레이드. 귀염성과 감촉이 양쪽 다 좋아졌다고 한다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>중열의 공격에 특화된, 붕대를 둘둘 감은 토끼
          소녀.
          <br />
          행동 빈도는 적지만 높은 위력의 범위 공격을 날리고
          <br />
          아군 전체의 물리 공격력을 크게 높이는 스킬도 발군의 효과를 보인다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】빙글빙글 토끼씨 스탬프</strong>
            <br />
            전방 범위 내 적 전체에게 물리 (대) 대미지
          </li>
          <p />
          <li>
            <strong>【skill 1】빙글빙글 어택 +</strong>
            <br />
            전방 범위 내 모든 적에게 물리 (대) 대미지
          </li>
          <p />
          <li>
            <strong>【skill 2】빙글빙글 토끼씨의 응원</strong>
            <br />
            아군 전체의 물리 공격력 (특대) 증가, 아군전체의 물리 방어력과 마법
            방어력이 초기치의 10% 감소
          </li>
          <p />
          <li>
            <strong>【EX】빙글빙글 토끼씨 파워 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
