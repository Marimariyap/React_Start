export default function Iriya() {
  const newLocal = "img/RediveCharacter/Iriya_back.png";
  const newLocal_1 = "img/RediveCharacter/IriyaChristmas_back.png";
  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>이리야 ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>암부 나흐트 팡 (블리딩 블래스트 강화)</strong>
          <br />
          이리야와 함께 기나긴 시간을 함께한 도끼. 붉은 마력을 내뿜는 거대한
          날은 단 한번에 적을 섬멸, 흩날리는 피 한방울 마저도 모조리 빨아들여,
          주인의 양식으로 삼는다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>중열에서 생명력을 깎아 공격하는 '밤의 지배자'
          <br />
          자신의 HP와 교환하여 발동하는 기술은 높은 살상력을 자랑하고 범위
          공격의 위력은 타의 추종을 불허한다.{" "}
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】버밀리온 바이트</strong>
            <br />
            전방 범위 내 모든 적에게 마법 (중) 대미지 자신의 HP (중) 회복{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】블리딩 블래스트 +</strong>
            <br />
            자신의 마법 공격력 (중) 증가 전방의 적에게 마법 (대) 대미지 자신의
            HP 소모{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】블러드 스피어</strong>
            <br />
            범위 내 적 전체에게 마법 (중) 대미지 자신의 HP 소모{" "}
          </li>
          <p />
          <li>
            <strong>【EX】피의 계약 +</strong>
            <br />
            전투 시작 시 자신의 마법 공격력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>이리야(성탄절) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>성야부 노엘 팽 (배트 카니발 강화)</strong>
          <br />
          산타클로스 후보가 된 이리야가 애용하는 도끼가 성야의 기적에 의해
          매혹된 새로운 모습. 호랑가시나무에 의해 화려하게 채색된 거날은 불멸의
          빛을 머금고 있다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>전열에서, 피를 대가로 적을 공격하는 성야의
          흡혈귀.
          <br />
          남은 HP가 적을수록 피해량이 상승하는 스킬과, HP를 소비하는 스킬을
          조합하여, 절대적인 파괴력을 발휘한다.{" "}
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】버밀리온 노엘</strong>
            <br />
            전방의 적 하나에게 마법 (특대) 대미지 자신의 마법 공격력 (중) 증가
            이리야의 HP가 낮을수록 대미지 상승{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】배트 카니발 +</strong>
            <br />
            자신의 마법 공격력 (소) 증가 전방의 적 하나에게 마법 (대) 대미지
            이리야의 HP가 낮을수록 마법 공격력 상승량과 대미지 상승{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】블러디 쏜</strong>
            <br />
            범위 내의 적 전체에 마법 (중) 대미지 자신의 마법 공격력 (중) 증가
            자신의 HP 20% 소모 이리야의 HP가 낮을수록 대미지 상승{" "}
          </li>
          <p />
          <li>
            <strong>【EX】성야의 맹약 +</strong>
            <br />
            전투 시작 시 자신의 마법 공격력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
