export default function Kyowoca() {
  const newLocal = "img/RediveCharacter/Kyowoca_back.png";
  const newLocal_1 = "img/RediveCharacter/KyowocaGhost_back.png";
  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>쿄우카 ⭐⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>코스모 블루 로드 (아이스 랜스 강화)</strong>
          <br />
          쿄우카가 애용하는 지팡이. 보옥에 고위의 수룡의 힘을 깃들게 해,
          사용자에 따라 그 형상을 바꾼다는 구전이 남아있다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>후열에서 강력한 마법으로 공격하는 꼬마
          우등생.
          <br />
          스킬로 마법 공격력을 순간적으로 높인 후 발사하는 「코스모 블루
          플래시」는
          <br />적 하나에게 입히는 최고의 위력을 자랑한다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】코스모 블루 플래닛</strong>
            <br />
            전방의 적 하나에게 마법 (특대) 데미지, 이 스킬이 크리티컬 히트한
            경우 2배가 아닌 4배의 데미지
          </li>
          <p />
          <li>
            <strong>【skill 1】아이스 랜스 +</strong>
            <br />
            전방의 적 하나에게 마법 (대) 데미지, 이 스킬이 크리티컬 히트한 경우
            2배가 아닌 4배의 데미지
          </li>
          <p />
          <li>
            <strong>【skill 2】매직 부스트</strong>
            <br />
            짧은 시간 동안 자신의 마법 공격력 (대) 증가
          </li>
          <p />
          <li>
            <strong>【EX】작은 용기 +</strong>
            <br />
            전투 시작 시 자신의 마법 공격력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        {" "}
        <h1>쿄우카(할로윈) ⭐⭐⭐⭐⭐</h1>
        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>할로윈 고양이씨 브룸 (매지컬 트릭 강화)</strong>
          <br />
          할로윈을 위해 쿄우카가 몰래 준비한 검은 고양이가 모티브인 빗자루.
          가끔씩 걸터앉아 하늘을 나는 상상을 하는것은 모두에게 비밀인 듯 하다.{" "}
        </p>
        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>후열에서 아군의 화력을 높이는 검은 고양이
          복장의 우등생.
          <br />
          자신의 마법 공격력에 따라 효과가 강화되는 것과 효과가 누적되는 것 등,
          다채로운 스킬로 공격력을 높인다.
        </p>
        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】할로윈 브룸 댄스</strong>
            <br />
            전방의 적 하나의 마법 방어력 (중) 감소, 아군 전체의 마법 공격력
            (특대) 증가
          </li>
          <p />
          <li>
            <strong>【skill 1】매지컬 트릭 +</strong>
            <br />
            가장 마법 공격력이 높은 아군 하나의 마법 공격력 (대) 증가, 해당
            캐릭터의 마법 공격력이 높을수록 공격력 상승량 증가
          </li>
          <p />
          <li>
            <strong>【skill 2】매지컬 트릿</strong>
            <br />
            아군 전체의 마법 공격력 (중) 증가
          </li>
          <p />
          <li>
            <strong>【EX】할로윈 브레이브 +</strong>
            <br />
            전투 시작 시 자신의 마법 공격력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
