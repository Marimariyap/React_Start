export default function Tumugi() {
  const newLocal = "img/RediveCharacter/Tumugi_back.png";
  const newLocal_1 = "img/RediveCharacter/TumugiSummer_back.png";
  const newLocal_2 = "img/RediveCharacter/TumugiGhost_back.png";
  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>츠무기 ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>하이 쿠튀리에 벨트 (캡쳐 스트링 강화)</strong>
          <br />
          츠무기가 착용하고 있는, 실패를 격납한 특제 포터블 벨트. 실패에서
          빠르게 뽑혀진 마법의 실이 적을 묶어올려, 눈 깜짝할 새에 의식을
          빼앗는다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>전열에서 적의 방해에 특화된 재단사 소녀.
          <br />
          적을 강제적으로 이동시켜 진형을 무너뜨리는데다 이동·행동 속도를
          저하시켜 상대의 반격을 늦춘다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】페이탈리티 바인드</strong>
            <br />
            범위 내 적 전체에게 물리 (중) 데미지, 대상을 속박 상태로 만듦
            <br />
            가장 멀리 있는 적을 많이 끌어오고 가장 가까운 적을 많이 밀어냄
          </li>
          <p />
          <li>
            <strong>【skill 1】캡쳐 스트링 +</strong>
            <br />
            앞에서 두 번째 적 하나에게 물리 (중) 데미지, 대상을 조금 끌어당겨
            스턴 상태로 만듦
            <br />
            자신의 물리 공격력 (중) 증가, 물리 방어력 (소) 증가
          </li>
          <p />
          <li>
            <strong>【skill 2】스파이럴 얀</strong>
            <br />
            범위 내 적 전체에게 물리 (소) 데미지, 대상의 이동 속도 및 행동 속도
            (소) 감소
          </li>
          <p />
          <li>
            <strong>【EX】테일러 거츠 +</strong>
            <br />
            전투 시작 시 자신의 물리 방어력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>츠무기(수영복) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>업데이트 예정</strong>
          <br />
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>중열에서 적을 끌어당겨 진형을 무너뜨리는 해질
          무렵의 재단사.
          <br />
          공격력이 가장 높은 적을 적진에서 아군 진영으로 끌어당기면서
          <br />
          속박과 행동 속도 감소를 연계한 스킬로 적의 자유를 구속한다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】카르미나 서머 돔</strong>
            <br />
            눈앞의 적 하나에게 물리 (특대) 데미지, 피해를 준 대상의 행동 속도
            (대) 감소
          </li>
          <p />
          <li>
            <strong>【skill 1】스플래시 스트링</strong>
            <br />
            전방의 적 하나에게 물리 (중) 데미지, 대상을 속박시킴
          </li>
          <p />
          <li>
            <strong>【skill 2】서머 바인드 액션</strong>
            <br />
            전방의 적 중 물리·마법 공격력이 가장 높은 적에게 물리 (소) 데미지
            <br />
            피해를 준 적을 속박시키고 츠무기의 앞으로 끌어옴
          </li>
          <p />
          <li>
            <strong>【EX】테일러 이미지네이션 +</strong>
            <br />
            전투 시작시 자신의 물리 공격력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_2} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>츠무기(할로윈) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>할로윈 나이트 드레스 (테일러드 할로윈 강화)</strong>
          <br />
          흡혈귀를 상징화시킨 츠무기의 수제 드레스. 쿨과 큐트를 양립한 매콤달콤
          코디를 통해 공격적인 자세를 어필한다{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>전열에서 적의 물리 공격을 방해하는 흡혈귀
          재단사.
          <br />
          도발과 물리 무효 배리어, 그리고 가장 물리 공격력이 높은 적을 노리는
          방어스킬을 이용해 철벽의 방어를 펼친다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】스트링 카니발</strong>
            <br />
            물리 공격력이 가장 높은 적 1명에게 물리 (대) 대미지
            <br />
            피해를 준 대상의 물리 공격력 / 행동 속도 (대) 감소
          </li>
          <p />
          <li>
            <strong>【skill 1】테일러드 할로윈 +</strong>
            <br />
            자신에게 물리 무효 배리어 전개, 자신의 물리 방어력 (대) 증가,
            자신에게 지속적 HP 회복 상태 부여
          </li>
          <p />
          <li>
            <strong>【skill 2】피어 어텐션</strong>
            <br />적 전체를 도발, 자신의 체력 (중) 회복, 물리 공격력이 가장 높은
            적 1명에게 패닉 상태 부여
          </li>
          <p />
          <li>
            <strong>【EX】테러 데코레이션 +</strong>
            <br />
            전투 시작 시 자신의 물리 방어력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
