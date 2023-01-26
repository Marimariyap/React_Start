
export default function Yori() {
    const newLocal = "img/RediveCharacter/Yori_back.png";
    const newLocal_1 = "img/RediveCharacter/YoriAngel_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>요리 ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>데몬즈 재블린 (오버차지 강화)</strong><br/>
                요리의 마력을 증폭시키는 것에 특화된 마창. 생명력과 맞바꾸어 얻는 마력은 단 한번에 주위를 잿더미로 만들어 버릴 정도이다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>중열에서 강력한 마법으로 공격하는 쌍둥이 언니.<br/>
                    자신의 HP와 맞바꾸어 마법 공격력을 증폭해 유니온 버스트나 스킬의 위력을 높여 공격한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】저지먼트 재블린</strong><br/>
                    전방 범위 내 모든 적에게 마법 (대) 데미지
요리의 체력이 낮을수록 해당 스킬의 데미지가 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】오버차지 +</strong><br/>
                    HP를 소모하여 자신의 마법 공격력 (특대) 증가
또한 TP를 (중) 회복시킨다.                    </li>
                    <p/>
                    <li><strong>【skill 2】섀도우 블래스트</strong><br/>
                    전방 범위 내 모든 적에게 마법 (소) 데미지
                    </li>
                    <p/>
                    <li><strong>【EX】라이트닝 부스트 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>요리(엔젤) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>해피 엔젤 애로우 (엔젤 어텐션 강화)</strong><br/>
                천사가 된 요리가 가진 천계의 화살. 창으로 사용할 수 있으며, 페어가 되는 아카리의 활과 결합하면 진가를 발휘한다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>중열에서 보조 마법으로 아군을 돕는 쌍둥이 언니 천사.<br/>
                    방어력을 대폭 높이며, 대상인 아군에게 적의 주의를 끌게 하는 등, 특수하고 강력한 스킬을 구사하여 적을 농락한다
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】헤븐리 하트</strong><br/>
                    TP가 가장 많은 적에게 마법(중) 데미지
대상의 TP(중), 마법방어력(중) 감소                    </li>
                    <p/>
                    <li><strong>【skill 1】엔젤 어텐션 +</strong><br/>
                    요리의 뒤에 있지 않은 캐릭터 중 남은 체력이 가장 많은 아군에게 도발 부여
대상의 물리 / 마법 방어력 (특대) 증가
대상의 물리 / 마법 공격력 (중) 증가
대상에게 지속적 HP 회복 상태 부여                    </li>
                    <p/>
                    <li><strong>【skill 2】엔젤 블레싱</strong><br/>
                    아군 전체의 물리 / 마법크리티컬 (대) 증가
아군 전체의 체력 (소) 회복                    </li>
                    <p/>
                    <li><strong>【EX】서투른 엔젤 하트 +</strong><br/>
                    전투 시작 시 자신의 마법 방어력 (대) 증가
                    </li>
                </ul>
</div>


        </div>
    )
}