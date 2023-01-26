export default function Anna() {
  const newLocal = "img/RediveCharacter/Anna_back.png";
  const newLocal_1 = "img/RediveCharacter/AnnaSummer_back.png";

  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        <h1>안나 ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>나선영격질풍비검 (나찰열반・무식 강화)</strong>
          <br />
          질풍의 명희(헤카테)가 사용하는 마법 장비. 평범한 사람은 마력에
          압도되어 폐인이 된다.
          <br />
          노을빛 칼날이 지닌 어둠은 질풍이 되어 우매한 자들을 나락에 빠뜨린다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>중열에서 압도적인 마력으로 공격하는 질풍의
          명희.
          <br />
          유니온 버스트로 적 전체에 큰 데미지를 줄 수 있지만 마력 소비가 심해
          자기자신도 큰 리스크를 얻는다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】나찰열반・극광종천명 괴파</strong>
            <br />적 전체에게 마법 (중) 데미지, 사용 후 안나의 물리 방어력 및
            마법 방어력 (특대) 감소
          </li>
          <p />
          <li>
            <strong>【skill 1】나찰열반・무식 +</strong>
            <br />
            전방의 적 하나에게 마법 (중) 데미지, 대상의 마법 방어력 (소) 감소
          </li>
          <p />
          <li>
            <strong>【skill 2】명공천승</strong>
            <br />
            【자폭】안나의 HP가 10% 이하일 경우 발동하며, 주변의 적 전체에게
            마법 (대) 데미지를 주고 자신은 전투불능
          </li>
          <p />
          <li>
            <strong>【EX】패차명멸옥염주 +</strong>
            <br />
            전투 시작 시 자신의 마법 공격력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        <h1>안나(수영복) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>해마옥멸박쇄묘 (나찰열반・해옥천 +)</strong>
          <br />
          해옥에 내려온 질풍의 명희가 그 몸에 걸치고 저주를 받은 포박의 닻.
          <br />
          봉인된 포학의 용이 포효하는 숨결은 지옥의 망자마저도 도망치게 한다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>전열에서 모두의 힘을 빌려서 힘을 휘두르는
          한여름의 명희.
          <br />
          아군 전체의 마법 공격력을 대상으로 자신의 마법공격력을 극적으로 높여,
          치열한 공격마법을 구사해 큰 데미지를 준다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】명해룡창하요파</strong>
            <br />
            전방의 적 하나에게 마법 (특대) 데미지, 남은 공격대상이 하나일 경우
            자신의 마법 공격력 (대) 증가
          </li>
          <p />
          <li>
            <strong>【skill 1】나찰열반・해옥천</strong>
            <br />
            전방의 적 하나에게 마법 (대) 데미지, 대상의 마법 방어력 (특대) 감소
          </li>
          <p />
          <li>
            <strong>【skill 2】하극・흡명희</strong>
            <br />
            자신을 제외한 아군 전체의 마법 공격력 (대) 감소, 자신의 마법 공격력
            (특대) 증가, 마법 크리티컬 (대) 증가
          </li>
          <p />
          <li>
            <strong>【EX】해극・명박연쇄 +</strong>
            <br />
            전투 시작 시 자신의 마법 공격력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
