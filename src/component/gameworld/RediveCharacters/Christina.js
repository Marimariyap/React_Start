export default function Christina() {
  const newLocal = "img/RediveCharacter/Christina_back.png";
  const newLocal_1 = "img/RediveCharacter/ChristinaChristmas_back.png";
  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        <h1>크리스티나 ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>성역검 아발론 (오버레이 강화)</strong>
          <br />
          크리스티나가 휘두르는 대검.
          <br />
          철저하게 계산된 검날이 그리는 궤적은 그 누구라도 도망갈 틈을 주지 않고
          일도양단해, 절대적인 승리를 약속한다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>전위에서 절대적인 제압력을 자랑하는
          '서약여군'
          <br />
          공방일체의 초대형 위력을 자랑하는 유니온 버스트와 그 발동을 가속하는
          TP 상승 증가 능력을 겸비했다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】넘버즈 아발론</strong>
            <br />
            전방의 적 하나에게 물리 (대) 데미지, 자신은 일정 시간 모든 물리 공격
            회피, 이 스킬은 반드시 명중하고 크리티컬 발생
          </li>
          <p />
          <li>
            <strong>【skill 1】오버레이 +</strong>
            <br />
            자신의 물리 공격력 (특대) 증가, TP 상승 (중) 증가, TP (중) 회복,
            크리티컬 데미지 (소) 증가
          </li>
          <p />
          <li>
            <strong>【skill 2】인젝션</strong>
            <br />
            전방의 적 하나에게 물리 (중) 데미지, 대상의 물리 방어력 (소) 감소
          </li>
          <p />
          <li>
            <strong>【EX】이그나이트 에그제 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        <h1>크리스티나(성탄절) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>성각검 아발론 (인핸스 프레젠트 강화)</strong>
          <br />
          산타클로스 후보가 된 크리스티나에게 치장을 맞춘 성역검 아발론. 성야의
          기적으로 주인에게 절대적인 승리를 선사한다고 한다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>전열에서 싸움을 즐기는, 성야의 『서약여군』.
          <br />
          유니온버스트를 사용하면 얻을 수 있는 코인의 유무로, 보조와 공격의 두
          역할을 바꾸며, 화려하게 적을 베어 쓰러뜨린다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】듀얼리티 아발론</strong>
            <br />
            [코인을 가지고 있지 않을 시] 전방의 적 하나에게 물리 (특대) 데미지,
            자신의 물리 공격력 (특대) 증가, 코인을 획득
            <br />
            [코인을 가지고 있을 시] 코인을 소모, 반드시 명중하는 물리 (특대)
            데미지
          </li>
          <p />
          <li>
            <strong>【skill 1】인핸스 프레젠트 +</strong>
            <br />
            [코인을 가지고 있지 않을 시] 물리 공격을 하는 모든 아군 캐릭터의
            물리 공격력 (특대) 증가
            <br />
            [코인을 가지고 있을 시] 물리 공격을 하는 모든 아군 캐릭터의 물리
            공격력 (중) 증가, 자신의 물리 공격력 (특대) 증가
            <br />
            자신의 물리 크리티컬시 피해량 (중) 증가
          </li>
          <p />
          <li>
            <strong>【skill 2】디스트럭션</strong>
            <br />
            [코인을 가지고 있지 않을 시] 전방의 적 하나에게 물리 (중) 데미지
            <br />
            [코인을 가지고 있을 시] 전방의 적 하나에게 물리 (중) 데미지, 아군
            전체의 TP 상승 (소) 증가
          </li>
          <p />
          <li>
            <strong>【EX】번 스크립트 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
