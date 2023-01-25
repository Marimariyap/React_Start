
export default function Misato() {
    const newLocal = "img/RediveCharacter/Misato_back.png";
    const newLocal_1 = "img/RediveCharacter/MisatoSummer_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>미사토 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>아가페 베일 (디바인 포스 강화)</strong><br/>
                미사토가 착용하고 있는 베일. 깨끗한 베일에서 넘쳐나는 미사토의 자애가 모두의 정신을 고양시켜 마법 크리티컬을 올려준다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 마법 캐릭터를 지원하는 모두의 선생님.<br/>
                    유니온 버스트는 가장 근접한 적에게 큰 데미지를 입힌 후<br/>
                    주위에 있는 적도 공격하기에 전열을 빠르게 함락시킬 수 있다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】시스터 페이버</strong><br/>
                    아군 전체의 HP (중) 회복
아군 전체의 마법 방어력 (소) 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】디바인 포스 +</strong><br/>
                    자신의 주변 아군 전체의 마법 공격력 (대) 증가
마법 크리티컬 (중) 증가                    </li>
                    <p/>
                    <li><strong>【skill 2】어펙션 큐어</strong><br/>
                    가장 앞에 있는 아군 하나의 지속적 HP 회복
                   </li>
                    <p/>
                    <li><strong>【EX】천녀의 위광 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>미사토(수영복) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>비치 비너스 메가폰 (힐링 드링크 강화)</strong><br/>
                청춘에게 모든것을 바치는 자에게 미사토의 자애로운 목소리를 전하는 메가폰. 바닷가의 성모의 응원은, 몸 밑바닥에서부터 힘을 솟구쳐 오르게 하여 꿈을 향한 뒷바라지를 한다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 적의 위세로부터 학생들을 지키는 여름의 여신같은 선생님.<br/>
                    아군의 마법 방어력을 높여 HP를 지속 회복시키는 스킬이나, 배리어를 전개하는 유니온 버스트로 아군을 견고하게 수호한다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】서머 가디스 코칭</strong><br/>
                    물리 공격을 하는 모든 아군에게 마법 무효 배리어 전개
마법 공격을 하는 모든 아군에게 물리 무효 배리어 전개                    </li>
                    <p/>
                    <li><strong>【skill 1】힐링 드링크 +</strong><br/>
                    대상을 지속적 HP 회복상태로 만듦
대상이 물리공격을 하는 캐릭터일 경우, 마법 방어력 (대) 증가
대상이 마법공격을 하는 캐릭터일 경우, 물리 방어력 (대) 증가                    </li>
                    <p/>
                    <li><strong>【skill 2】어드바이스 옐</strong><br/>
                    아군 전체의 물리 공격력과 마법 방어력 (중) 증가                    </li>
                    <p/>
                    <li><strong>【EX】서머 가이던스 +</strong><br/>
                    전투 시작 시 자신의 마법 방어력 (중) 증가
자신의 마법 공격력 (소) 증가                    </li>
                </ul>
</div>


        </div>
    )
}