export default function Kurumi() {
  const newLocal = "img/RediveCharacter/Kurumi_back.png";
  const newLocal_1 = "img/RediveCharacter/KurumiChristmas_back.png";

  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>쿠루미 ⭐⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>퓨어 액트 벨 (브레이블리 벨 강화)</strong>
          <br />
          쿠루미가 부적처럼 가지고 다니는 종. 장엄한 모양에서 연주되는 귀여운
          음악소리가, 겁에 질린 마음에 용기를 부여해준다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>전열에서 아군 수호에 특화된 극도의
          부끄럼쟁이.
          <br />
          스킬로 주변 동료의 물리 마법 방어력을 올리면서 근처의 적을 스턴시켜
          적의 발을 묶는다.{" "}
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】데뷔 스타 액션</strong>
            <br />
            전방 범위 내 모든 적에게 물리 (대) 데미지 피해를 받은 모든 적을
            장시간 스턴 상태로 만듦 아군 전체의 물리/마법 방어력 (대) 증가
            자신을 중심으로 한 범위 내의 모든 아군의 체력을 지속적 회복 상태로
            만듦{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】브레이블리 벨 +</strong>
            <br />
            아군 전체의 물리 방어력과 마법 방어력을 (중) 증가 아군 전체의 TP
            (소) 회복{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】벨 비브라토</strong>
            <br />
            전방의 적 하나에게 물리 (소) 데미지 대상을 스턴 상태로 만듦{" "}
          </li>
          <p />
          <li>
            <strong>【EX】브릴리언트 액트 +</strong>
            <br />
            전투 시작 시 자신의 최대 HP (대) 증가 자신의 마법 방어력 (소) 증가{" "}
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>쿠루미(성탄절) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>크리스마스 액트 벨 (벨 치어링 강화)</strong>
          <br />
          크리스마스의 축복을 받은, 쿠루미가 애용하는 종. 쿠루미가 벨을 연주해
          전해주는 기특한 마음이, 동료에게 결코 굴하지 않는 용기를 불러일으킨다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>전열에서, 벨의 음색으로 아군을 지키는 꼬마
          여배우.
          <br />
          공격을 받을 때까지 주변의 아군의 방어력을 크게 높이는 스킬을 가진다.
          활용할 수 있다면 무류의 내구력을 자랑한다.{" "}
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】윈터 콜 벨</strong>
            <br />
            아군 전체의 마법 방어력 (중) 증가 자신에게 마법 흡수 배리어 전개{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】벨 치어링 +</strong>
            <br />
            5회 공격 받거나 일정 시간 경과 전까지 벨을 울려 범위 내 아군의 물리
            방어력 (특대) 증가 아군 전체의 물리 방어력 (중) 증가 자신의 TP (소)
            회복{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】힐링 벨</strong>
            <br />
            자신의 주변 범위 내 아군의 HP (소) 회복하는 필드 전개{" "}
          </li>
          <p />
          <li>
            <strong>【EX】세인트 에뜨와르 +</strong>
            <br />
            전투 시작 시 자신의 마법 방어력 (대) 증가{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
