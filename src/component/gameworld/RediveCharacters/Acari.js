export default function Acari() {
  const newLocal = "img/RediveCharacter/Acari_back.png";
  const newLocal_1 = "img/RediveCharacter/AcariAngel_back.png";

  return (
    <div className="container">
      <img src={newLocal} alt="redive" className="character" />
      <div className="well">
        <h1>아카리 ⭐⭐⭐⭐⭐⭐</h1>

        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>데몬즈 트라이던트 (섀도우 볼트 강화)</strong>
          <br />
          아카리의 사랑을 듬뿍 받은 마창. 무기에 숨겨진 강대한 마력은, 소악마를
          자극적인 마녀로 화려하게 변모시킨다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>중열에서 마법 파티의 강화를 담당하는 쌍둥이
          여동생.
          <br />
          적의 마법 방어력을 큰 폭으로 낮추는 스킬이나 마법 공격력을 상승시켜
          회복 효과를 부여하는 유니온 버스트를 사용한다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】멜티 데빌 참</strong>
            <br />
            아군 전체의 마법 공격력 (특대) 증가, 아군 전체의 마법 크리티컬 (대)
            증가
            <br />
            아군 전체에게 다음 공격의 데미지량에 따라 추가로 HP 회복 효과 부여,
            적 전체의 마법 방어력 (소) 감소
          </li>
          <p />
          <li>
            <strong>【skill 1】섀도우 볼트 +</strong>
            <br />
            전방의 적 하나에게 마법 (대) 데미지, 대상의 마법 방어력 (소) 감소
          </li>
          <p />
          <li>
            <strong>【skill 2】소악마의 키스</strong>
            <br />
            전방의 적 하나의 마법 방어력 (대) 감소
          </li>
          <p />
          <li>
            <strong>【EX】스위트 이그니션 +</strong>
            <br />
            전투 시작 시 자신의 마법 공격력 (대) 증가
          </li>
        </ul>
      </div>

      <img src={newLocal_1} alt="redive" className="character" />
      <div className="well">
        <h1>아카리(엔젤) ⭐⭐⭐⭐⭐</h1>

        <h2>전용장비 ⚔️</h2>
        <p>
          <strong>해피 엔젤 보우 (엔젤 차지 강화)</strong>
          <br />
          천사가 된 아카리가 가진 천계의 활. 지팡이로 사용할 수 있으며, 페어가
          되는 요리의 활과 결합하면 진가를 발휘한다.
        </p>

        <h2>소개</h2>
        <p>
          <strong>【마법】</strong>중열에서 마법 공격을 날리는 천사 쌍둥이 동생.
          <br />
          지속시간이 짧지만 막대한 효과를 가진 강화 마법으로 자신의 공격력을
          크게 높여, 강대한 위력의 마법으로 적 하나를 날려버린다.
        </p>

        <h2>스킬</h2>
        <ul>
          <li>
            <strong>【UB】헤븐리 키스</strong>
            <br />
            전방의 적 1명에게 마법 (대) 데미지
          </li>
          <p />
          <li>
            <strong>【skill 1】엔젤 차지 +</strong>
            <br />
            짧은 시간동안 자신의 마법 공격력 / 마법 크리티컬 (특대) 증가
            <br />
            짧은 시간동안 자신의 마법 크리티컬시 데미지 (중) 증가, 자신의 TP
            (중) 회복
          </li>
          <p />
          <li>
            <strong>【skill 2】엔젤 슛</strong>
            <br />
            전방의 적 1명에게 마법(중) 데미지, 이 스킬로 크리티컬 데미지를 줄시
            2배가 아닌 3배의 데미지
          </li>
          <p />
          <li>
            <strong>【EX】달디 단 엔젤 하트 +</strong>
            <br />
            전투 시작 시 자신의 마법 공격력 (대) 증가
          </li>
        </ul>
      </div>
    </div>
  );
}
