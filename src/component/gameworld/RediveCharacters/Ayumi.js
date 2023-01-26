export default function Ayumi() {
  const newLocal = "img/RediveCharacter/Ayumi_back.png";
  const newLocal_1 = "img/RediveCharacter/AyumiWonder_back.png";

  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        <h1>아유미 ⭐⭐⭐⭐⭐</h1>

        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>스토킹 망토 (찌, 찌르겠습니다! 강화)</strong>
          <br />
          자신의 존재가 탐지되지 않도록 가공된, 아유미 수제 망토. 눈치채기 전에
          숨어드는 것이 가능해 마음가는 선배에게 더욱 접근한다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【물리】</strong>중열에서 허둥지둥 적을 교란하는 순정 소녀.
          <br />
          적을 기절시키는 스킬 외에도 유니온 버스트는 암흑과 혼란을 부여하여
          적을 방해할 수 있다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】용기를 내서 돌격입니다~!</strong>
            <br />
            전방 범위 내 모든 적에게 물리 (중) 데미지, 피해를 받은 모든 적을
            암흑・혼란 상태로 만듦
          </li>
          <p />
          <li>
            <strong>【skill 1】찌, 찌르겠습니다! +</strong>
            <br />
            범위 내의 모든 적에게 물리 (중) 데미지, 대상의 물리 공격력 (중) 감소
          </li>
          <p />
          <li>
            <strong>【skill 2】눈을 감고 할 수 있을까…?</strong>
            <br />
            전방 범위 내 모든 적에게 물리 (소) 데미지, 피해를 받은 모든 적을
            스턴상태로 만듦
          </li>
          <p />
          <li>
            <strong>【EX】솟아나는 용기 +</strong>
            <br />
            전투 시작 시 자신의 물리 방어력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>아유미(원더) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>원더랜드 클락(클락 다운 +)</strong>
          <br />
          신기한 책 속에서 아유미가 가지고 있던 창.
          <br />
          주위로부터 한없이 기척을 감춤으로써, 시간의 흐름을 멈출 정도의 효과를
          발휘하는 아유미에게 딱 맞는 창.
        </p>
        <h2>소개</h2>
        <p>
          <strong>【물리】</strong> 중열에서, 전장의 동향을 자유자재로 조종하는
          흰토끼 소녀.
          <br />
          적의 행동속도를 줄이고, 아군의 속도를 증가시키는 스킬과 적의 시간을
          멈추는 스킬로, 상시 아군을 지원한다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】클럭 오브 래빗</strong>
            <br />
            아군 전체의 행동속도 (대) 증가, 대상의 물리 방어력 (소) 증가
          </li>
          <p />
          <li>
            <strong>【skill 1】클락 다운 +</strong>
            <br />적 전체의 행동속도 (대) 감소, 물리 공격력 (대) 감소, 명중 (중)
            감소, 물리 크리티컬 (대) 감소
          </li>
          <p />
          <li>
            <strong>【skill 2】클락 엔드</strong>
            <br />
            물리 공격력이 가장 높은 적 하나의 행동 시간 정지 \
          </li>
          <p />
          <li>
            <strong>【EX】래빗 소울 +</strong>
            <br />
            전투 시작 시 자신의 물리방어력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
