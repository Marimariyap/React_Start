
export default function Miyako() {
    const newLocal = "img/RediveCharacter/Miyako_back.png";
    const newLocal_1 = "img/RediveCharacter/MiyakoGhost_back.png";
    const newLocal_2 = "img/RediveCharacter/MiyakoChristmas_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>미야코 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>유령같이 달달한 고스트 푸딩 (원~망~스~러~운~거야 강화)</strong><br/>
                재료 하나하나 엄선하여 만든 미야코의 최애 간식, 궁극의 거대 푸딩. 승천한 것만 같은 맛으로 무심코 몸이 투명해질 정도.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>최전열에서 적의 공격을 끊임없이 피하는 유령 소녀.<br/>
                    유령으로 변신하는 스킬로 적의 공격을 피하고 유니온 버스트를 통해 적을 푸딩으로 만들어 먹어버린다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】푸딩으로 만들어버리는 거야</strong><br/>
                    전방의 적 하나에게 물리 (대) 데미지
자신의 HP (중) 회복                    </li>
                    <p/>
                    <li><strong>【skill 1】원~망~스~러~운~거야 +</strong><br/>
                    【변신】유령 상태로 변신해 일정 시간 무효 상태
자신의 물리 방어력과 회피 (중) 증가                    </li>
                    <p/>
                    <li><strong>【skill 2】간식 시간인 거야</strong><br/>
                    자신의 HP (중) 회복
                    </li>
                    <p/>
                    <li><strong>【EX】보일 듯 말 듯 한 거야~ +</strong><br/>
                    전투 시작 시 자신의 물리 방어력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>미야코(할로윈) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>푸딩 오브 할로윈 (늑대 여자아이인 거야 강화)</strong><br/>
                할로윈 파티가 표현된 장인의 걸작 푸딩. 은은하고 달콤한 호박맛은, 온갖 푸딩을 먹어치운 미야코 마저도 경악시켰다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 적진의 후방을 공격하는 유령 늑대 소녀.<br/>
                    전방의 상대를 무시하고 방해 스킬이나 유니온 버스트를
적 후방에 사용한다. 특히 방어력이 낮은 캐릭터에게 위협적이다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】트릭 오어 푸딩인 거야</strong><br/>
                    가장 멀리 있는 적 하나에 물리 (특대) 데미지
대상을 저주 상태로 만듦                    </li>
                    <p/>
                    <li><strong>【skill 1】늑대 여자아이인 거야 +</strong><br/>
                    가장 먼 적 하나의 TP (소) 감소
대상을 스턴과 패닉 상태로 만듦                    </li>
                    <p/>
                    <li><strong>【skill 2】도깨비 회전목마인 거야</strong><br/>
                    가장 먼 적 하나의
물리 공격력 및 마법 공격력 (중) 감소                    </li>
                    <p/>
                    <li><strong>【EX】어흥어흥~인거야~ +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가                    </li>
                </ul>
</div>


<img src={newLocal_2} alt="redive" className="character" />
            <div className="well">            <h1>미야코(성탄절) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 아군을 푸딩으로 강화하는 성스러운 유령 소녀.<br/>
                    물리 공격력과 물리 크리터컬을 증가시키는 푸딩 파워 필드로 자신의 스킬도 강화해 맹공을 펼친다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】미야코 특제 푸딩인 거야</strong><br/>
                    전방의 적 하나에게 물리 (특대) 데미지
물리 방어력 (소) 감소
【필드 전개 중】 데미지 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】눈사람으로 만드는 거야</strong><br/>
                    전방의 적 하나에게 물리 (중) 데미지
자신의 물리 공격력 (대) 상승
【필드 전개 중】 데미지 증가 및 자신을 중심으로 범위 내 아군 전체의 물리 공격력 (대) 상승                    </li>
                    <p/>
                    <li><strong>【skill 2】한 입만 주는 거야</strong><br/>
                    자신을 중심으로 한 범위 내 아군 전체의 물리 공격력 / 물리 크리티컬 (대) 증가시키는 필드 전개
자신을 중심으로 범위 내 아군 전체의 물리 크리티컬 시 데미지 (소) 증가
자신의 TP 상승 (중) 증가                    </li>
                    <p/>
                    <li><strong>【EX】선물을 주는거야 +</strong><br/>
                    전투 시작시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
</div>



        </div>
    )
}