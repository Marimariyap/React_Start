export default function Mitsuki() {
  const newLocal = "img/RediveCharacter/Mitsuki_back.png";
  const newLocal_1 = "img/RediveCharacter/MitsukiEdo_back.png";

  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>미츠키 ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>로즈 오브 커스 (커스 블룸 강화)</strong>
          <br />
          미츠키가 애용하는 요염한 장미 장식의 안대. 마력을 주입하면 일곱 가지
          빛을 방출하여 상대의 능력을 감퇴시킨다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>중열에서 적 약체화 필드를 조종하는 척안의
          악마.
          <br />
          필드 유지 시간은 짧지만 범위 내 적의 물리 방어력을 큰 폭으로 낮추는
          효과를 가진다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】블러디 로즈</strong>
            <br />
            전방 범위 내 적 전체에게 물리 (중) 데미지 이 스킬로 적을 쓰러트린
            적의 수에 따라 자신의 HP 회복{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】커스 블룸 +</strong>
            <br />
            전방 범위 내 적 전체를 저주 상태로 만듦 대상의 행동속도 (소) 감소{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】로즈 필드</strong>
            <br />
            자신의 전방 일정 범위 내 모든 적의 물리 방어력을 (대) 감소시키는
            필드 전개{" "}
          </li>
          <p />
          <li>
            <strong>【EX】척안의 악마 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가{" "}
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>미츠키(오에도) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>업데이트 예정</strong>
          <br />
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>중열에서 전황의 모든 것을 응시하는 척안의
          무면허 의사.
          <br />
          HP가 낮은 적을 속박해 방어력 감소 스킬을 쓰면서 저주가 매초 증가하는
          지속 데미지로 적의 목숨을 시시각각 침식한다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】로즈 디스트럭션</strong>
            <br />
            전방 범위 내 적 전체에게 물리 (대) 데미지 범위 내 적이 저주 상태가
            아닐 경우, 그 대상에게 저주 상태이상 부여 범위 내 적이 저주 상태일
            경우, 대상에게 주저 상태이상 부여 주저 상태이상은 매 초마다 피해량이
            증가함{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】로즈 카르테</strong>
            <br />
            모든 적 중 남은 HP 비율이 가장 낮은 적에게 물리 (중) 데미지 피해를
            준 적의 물리/마법 방어력 (소) 감소 피해를 준 적을 속박시킴{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】아포토시스 인핸서</strong>
            <br />
            전방 범위 내 모든 적에게 저주 상태이상 부여 전방 범위 내 모든 적의
            물리/마법 방어력 (소) 감소{" "}
          </li>
          <p />
          <li>
            <strong>【EX】블랙 매디컬 케어 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
