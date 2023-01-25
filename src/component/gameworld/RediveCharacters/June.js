
export default function June() {
    const newLocal = "img/RediveCharacter/June_back.png";
    const newLocal_1 = "img/RediveCharacter/JuneSummer_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>쥰 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>슈발리에 메일 (브레이브 리커버리 강화)</strong><br/>
                정의의 큰불을 두른 쥰의 갑옷. 부여된 마력은 적의 어떠한 공격도 닿지 못하게 하며, 아군에겐 용기와 활력을 불어넣는다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>최전열에서 완전 방어 스킬을 쓰는 기사단장.<br/>
                    유니온 버스트로 모든 데미지를 흡수하는 배리어를 전개할 수 있다.
특히 장기전에서 압도적인 방어 성능을 자랑한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】인페르노 실드</strong><br/>
                    자신에게 물리 및 마법 흡수 배리어 전개                    </li>
                    <p/>
                    <li><strong>【skill 1】브레이브 리커버리 +</strong><br/>
                    자신의 주변 아군 중 HP가 가장 낮은 아군 하나의 HP (중) 회복
대상의 물리 공격력 (중) 증가
대상의 행동속도 (소) 증가                    </li>
                    <p/>
                    <li><strong>【skill 2】아머 브레이크</strong><br/>
                    전방의 적 하나에게 물리 (소) 데미지
피해를 준 적의 물리 방어력 (소) 감소                    </li>
                    <p/>
                    <li><strong>【EX】저스티스 배리어 +</strong><br/>
                    전투 시작 시 자신의 마법 방어력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>쥰(수영복) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>서머 슈발리에 소드 (히트 스파이크 강화)</strong><br/>
                쥰이 비번을 바다에서 보내기 위해 맞춘 시원한 대검. 겉보기와 달리, 쏘아지는 참격은 한여름의 태양처럼 작열한다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 업화를 거느리며 악을 무찌르는 한여름의 기사 단장.<br/>
                    적 하나에게 데미지를 주면서 공격력을 높이는 유니온버스트와 화상을 주는 스킬을 다루어 적을 태워버린다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】서머 인페르노</strong><br/>
                    전방의 적 하나에게 물리 (특대) 대미지
자신의 물리 공격력 및 행동속도 (대) 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】히트 스파이크 +</strong><br/>
                    자신의 물리 공격력 (소) 증가
전방의 적 하나에게 물리 (대) 데미지
피해를 준 적에게 화상 상태이상 부여
화상 데미지는 이 캐릭터의 물리 공격력에 비례해서 증가함                    </li>
                    <p/>
                    <li><strong>【skill 2】선라이트 브레이크</strong><br/>
                    전방의 적 하나에게 물리 (대) 대미지
                    </li>
                    <p/>
                    <li><strong>【EX】서머 저스티스 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
</div>


        </div>
    )
}