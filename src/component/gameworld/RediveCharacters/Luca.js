
export default function Luca() {
    const newLocal = "img/RediveCharacter/Luca_back.png";
    const newLocal_1 = "img/RediveCharacter/LucaSummer_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>루카 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>진타 절해・파랑환 (일의 태도・물방울 베기 강화)</strong><br/>
                루카가 차고다니는 두자루의 도. 무리짓는 악당들 앞에서 두번째 도인 파랑환을 뽑았다 하면, 순식간에 전장이 잠잠해진다 한다.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 아군을 위해 검을 휘두르는 멋지고 결기 있는 여장부.<br/>
                    상대에게 카운터를 구사하는 도발이나 적의 방어력을 낮추는
유니온 버스트가 있어 공격과 방어, 양쪽에서 실력을 발휘한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】영의 태도・수월경화</strong><br/>
                    전방의 적 하나에게 물리 (대) 데미지
대상의 물리 방어력 (대) 감소                    </li>
                    <p/>
                    <li><strong>【skill 1】일의 태도・물방울 베기 +</strong><br/>
                    적 전체를 도발
도발 모션 중 피격 시 전방 범위 내 적 전체에게 물리 (대) 데미지
물리 방어력 (소) 감소
적을 조금 밀어냄                    </li>
                    <p/>
                    <li><strong>【skill 2】천하무쌍의 식</strong><br/>
                    자신의 HP (중) 회복
물리 방어력 (중) 증가                    </li>
                    <p/>
                    <li><strong>【EX】명경지수의 경지 +</strong><br/>
                    전투 시작 시 자신의 마법 방어력 (대) 증가                    </li>
                    <p/>
                </ul>
</div>

          
<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>루카(수영복) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>절해・파랑환존위 (시의 태도・새벽녘의 수무월 강화)</strong><br/>
                루카가 허리에 차고다니는 두개의 명도인 절해, 요도 파랑환. 주인에 맞게 여름 단장을 한 일품, 불변의 칼날은 흰 파도를 가른다.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서, 유려한 칼솜씨를 선보이는 이른 여름의 여장부.<br/>
                    피해를 준 횟수에 비례해 공격력이 높아지는 스킬과,
손에 쥔 이도류의 수많은 참격으로, 눈 앞의 적을 쓸어버린다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】종의 태도・청람을 가르는 흰 실</strong><br/>
                    전방 범위 내 적 전체에게 물리 (대) 데미지
전투 개시 후 처음 이 스킬을 사용한 뒤,15회 데미지를 줄 때마다
자신의 물리공격력 (중) 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】시의 태도・새벽녘의 수무월 +</strong><br/>
                    전방 범위 내 적 전체에게 물리 (중) 데미지
자신의 물리 공격력 (대) 증가                    </li>
                    <p/>
                    <li><strong>【skill 2】계의 태도・산들거리는 훈풍</strong><br/>
                    전방 범위 내 적 전체에게 물리 (중) 데미지                    </li>
                    <p/>
                    <li><strong>【EX】초여름의 이치 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가                    </li>
                </ul>
</div>


        </div>
    )
}