
export default function Yukari() {
    const newLocal = "img/RediveCharacter/Yukari_back.png";
    const newLocal_1 = "img/RediveCharacter/YukariChristmas_back.png";

    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>유카리 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>이터널 저그 (아쿠아 비트 강화)</strong><br/>
                유카리가 떼놓지않는 맥주잔. 마셔도 마셔도 솟구쳐나오는 생명의 물이 소유자의 몸에 스며들어서, 그 몸에 넘칠듯한 활력을 부여해준다.  </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 배리어와 회복으로 아군을 지키는 전직 성기사.<br/>
                    상처 입은 동료의 HP나 TP를 회복하는 스킬을 다루고
싸움으로 피해입은 곳을 핀포인트로 서포트한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】세븐즈 헤븐</strong><br/>
                    아군 전체에게 마법 무효 배리어 전개
마법 방어력 (대) 증가, HP (소) 회복                    </li>
                    <p/>
                    <li><strong>【skill 1】아쿠아 비트 +</strong><br/>
                    HP가 가장 적은 아군 하나의 HP (대) 회복
마법 방어력 (중) 증가
지속적 HP 회복 상태로 만듦                    </li>
                    <p/>
                    <li><strong>【skill 2】문라이트</strong><br/>
                    TP가 가장 적은 아군 하나의 TP (중) 회복                    </li>
                    <p/>
                    <li><strong>【EX】프렐류드 피즈 +</strong><br/>
                    전투 시작 시 자신의 마법 방어력 (중) 증가
자신의 물리 공격력 (소) 증가                    </li>
                </ul>
</div>

          
<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>유카리(성탄절) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>크리스마스 루아얄 글래스 (페일 문 강화)</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 물리 캐릭터를 지원해 싸우는 성야의 전직 성기사.<br/>
                    마법 공격력이 가장 높은 적 한 명의 TP 감소와 주위 아군의 마법 방어력 향상 스킬은
대마법전에서 비길 데 없는 빛을 발한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】크리스마스 피즈</strong><br/>
                    물리 공격력이 가장 높은 아군 하나의 물리 공격력 (특대) 증가
자신의 물리공격력이 높을수록 공격력 상승량이 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】페일 문 +</strong><br/>
                    마법 공격력이 가장 높은 적 하나의 TP (중) 감소
해당 적의 물리 방어력 (중) 감소
해당 적의 행동 속도 (대) 감소
해당 적의 마법 크리티컬 (특대) 감소                    </li>
                    <p/>
                    <li><strong>【skill 2】해피 홀리 데이즈</strong><br/>
                    자신의 주위에 아군의 마법 방어력 (대) 증가시키는 필드 전개                    </li>
                    <p/>
                    <li><strong>【EX】퍼스트 레이디 +</strong><br/>
                    전투 시작 시 자신의 마법 방어력 (대) 증가                    </li>
                </ul>
</div>


        </div>
    )
}