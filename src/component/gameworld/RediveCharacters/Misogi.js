export default function Misogi() {
  const newLocal = "img/RediveCharacter/Misogi_back.png";
  const newLocal_1 = "img/RediveCharacter/MisogiGhost_back.png";
  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>미소기 ⭐⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>트릭 기프트 (잉크 슈터 강화)</strong>
          <br />
          미소기가 최고걸작이라 자부하는 깜짝상자. 애들 장난이라 얕보지 말라,
          외견의 임팩트와 충격음으로 적의 간도 떨어뜨릴 게 틀림없다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>최전열에서 적의 물리 공격을 방해하는 개구쟁이
          소녀.
          <br />
          눈앞의 적을 암흑 상태로 만들어 명중률을 큰 폭으로 낮추는 한 편<br />적
          하나의 물리 공격력을 낮추는 스킬을 가지고 있다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】트릭 하트</strong>
            <br />
            적 전체에게 물리 (중) 데미지, 적 전체의 물리 공격력 및 물리 크리티컬
            (특대) 감소
            <br />
            물리 크리티컬 시 피해량 (중) 감소
          </li>
          <p />
          <li>
            <strong>【skill 1】잉크 슈터 +</strong>
            <br />
            자신으로부터 두 번째로 가까운 적 하나에게 물리 (중) 데미지
            <br />
            대상을 암흑 상태로 만듦, 범위 내 적 모두의 물리 공격력 (소) 감소
          </li>
          <p />
          <li>
            <strong>【skill 2】워터 벌룬</strong>
            <br />
            물리 공격력이 가장 높은 적 하나에게 물리 (소) 데미지, 대상의 물리
            공격력 (소) 감소
            <br />
            자신의 물리 공격력 (소) 증가
          </li>
          <p />
          <li>
            <strong>【EX】트랩 익스퍼트 +</strong>
            <br />
            전투 시작 시 자신의 물리 방어력 (중) 증가, 자신의 물리 공격력 (소)
            증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>미소기(할로윈) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>마권 트릭오어트릭(페인팅 킥 강화)</strong>
          <br />
        </p>
        할로윈을 위해 미소기가 자신만만하게 준비한 장난용 토시. 높은 강도와
        정밀성이 양립하여, 어떤 장난도 확실하게 칠 수 있다. <h2>소개</h2>
        <p>
          <strong>【물리】</strong>전열에서 범위 공격을 날리는, 호박 의상을 입은
          말괄량이.
          <br />
          적에게 5 카운트 후 폭발하는 폭탄을 장치하거나 호박 수류탄을 던지는 등,
          다양한 범위 공격으로 적을 농락한다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】트릭 오어 트릭!</strong>
            <br />
            【카운트다운】전방의 적 전체에게 폭탄을 설치하고 5카운트 후 폭발
            <br />
            폭탄은 각각 폭발 시 적 전체에게 물리 (중) 데미지
          </li>
          <p />
          <li>
            <strong>【skill 1】페인팅 킥 +</strong>
            <br />
            전방 범위 내 적 전체에게 물리 (중) 데미지, 해당 스킬로 피해를 받은
            적의 물리 공격력 (중) 감소
            <br />이 스킬이 크리티컬 시 피해량이 2배가 아닌 3배가 된다
          </li>
          <p />
          <li>
            <strong>【skill 2】깜짝 펌킨</strong>
            <br />
            앞에서 세 번째 적을 중심으로 범위 내 적 전체에게 물리 (중) 데미지
          </li>
          <p />
          <li>
            <strong>【EX】트릭 익스퍼트 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
