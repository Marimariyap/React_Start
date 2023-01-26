export default function Sinobu() {
  const newLocal = "img/RediveCharacter/Sinobu_back.png";
  const newLocal_1 = "img/RediveCharacter/SinobuGhost_back.png";
  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>시노부 ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>그림 소울 로브 (팬텀 콜 강화)</strong>
          <br />
          푸른 영력의 불꽃을 두른, 시노부가 애용하는 영의. 영혼의 그릇이 되는
          특수한 실로 짜여져 있어, 영혼들의 협력을 얻을 수 있다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>중열에서 아버지인 해골을 소환하여 싸우는
          영능력자 소녀.
          <br />
          소환한 아버지는 자신과는 별도의 공격을 하며 데미지를 대신 받기도 한다.{" "}
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】팬텀 테러</strong>
            <br />
            전방 범위 내 모든 적에게 물리 (중) 데미지 대상의 물리 방어력 (소)
            감소{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】팬텀 콜 +</strong>
            <br />
            【소환】자신의 앞에 전방의 적 하나를 공격하는 해골 아버지 소환 가장
            앞에 있는 아군을 중심으로 범위 내 모든 아군의 물리 공격력과 물리
            크리티컬 (중) 증가{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】위크 레이스</strong>
            <br />적 전체의 물리 방어력 (소) 감소
          </li>
          <p />
          <li>
            <strong>【EX】어스름의 진혼곡 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>시노부(할로윈) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>영겸 펌킨 사이드 (레이스 웨폰 강화)</strong>
          <br />
          해골 아버지가 시노부를 위해 준비한 영혼낫. 할로윈의 가호가 깃들어있어
          랜턴의 등불은 영혼을 저승으로 인도하며 그 칼날은 악령을 갈라찢는다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>중열에서 약해진 적을 베어버리는 할로윈 밤의
          영능력자 소녀.
          <br />
          약해진 적 하나에게 큰 데미지를 입히는 유니온 버스트는 대생을 격파하면
          적 전체에 추가 데미지를 입힌다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】할로윈 테러</strong>
            <br />
            HP의 비율이 가장 적은 적 하나에게 물리 (특대) 데미지 이 스킬로 적을
            쓰러트리면 적 전체에 물리 (중) 데미지{" "}
          </li>
          <p />
          <li>
            <strong>【skill 1】레이스 웨폰 +</strong>
            <br />
            자신의 물리 공격력 (특대) 증가 자신의 물리 크리티컬 (대) 증가{" "}
          </li>
          <p />
          <li>
            <strong>【skill 2】할로우 사이드</strong>
            <br />
            전방 범위 내 모든 적에게 물리 (중) 데미지{" "}
          </li>
          <p />
          <li>
            <strong>【EX】명계의 야상가 +</strong>
            <br />
            전투 시작 시 자신의 물리 공격력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
