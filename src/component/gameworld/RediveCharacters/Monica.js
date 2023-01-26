
export default function Monica() {
    const newLocal = "img/RediveCharacter/Monica_back.png";
    const newLocal_1 = "img/RediveCharacter/MonicaMagical_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>모니카 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>플뤼겔 코트 (플뤼겔의 응원가 강화)</strong><br/>
                모니카가 착용하고 있는 코트. 그 화사한 짜임새는, 등 뒤를 잇는 자들의 몸과 마음을 떨려오게 해
온갖 공격력을 대폭 향상시킨다. </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 아군의 공격을 서포트하는 군인 소녀.<br/>
                    아군의 물리 마법 공격력을 큰 폭으로 증가시키고 공격 속도를 올려서 전투를 빠르게 끝내도록 한다. </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】선풍뇌섬격쇄참</strong><br/>
                    전방 범위 내 모든 적에게 물리 (대) 데미지
피해를 준 적을 기절시킴
아군전체의 물리/마법 공격력 (대) 증가
아군 전체의 행동속도 (대) 증가 </li>
                    <p/>
                    <li><strong>【skill 1】플뤼겔의 응원가 +</strong><br/>
                    아군 전체의 물리/마법 공격력 (대) 증가
아군 전체의 행동속도 (대) 증가  </li>
                    <p/>
                    <li><strong>【skill 2】머스킷 샷</strong><br/>
                    전방의 적 하나에게 물리 (소) 데미지
피해를 준 적을 기절시킴  </li>
                    <p/>
                    <li><strong>【EX】백익의 가호 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가
자신의 물리 방어력 (소) 증가                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>모니카(매지컬) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>매지컬 러블리 소드 (러블리 오더 강화)</strong><br/>
                마법제독 러블리 ★ 모니카가 사용하는 마법의 검. 사랑과 희망의 힘을 담음으로써 동료들을 고무시키고, 어떤 사악한 적이라도 맞서 싸울 수 있는 용기를 준다 </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 사랑과 마법의 힘으로 지휘하는 마법제독.<br/>
                    유니온 버스트로 단일 적의 물리 방어력을 낮추고 범위 내의 아군의 물리공격을 강화하는 스킬로 단숨에 전세를 결정짓는다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】스카이 러블리 허리케인</strong><br/>
                    전방의 적 하나에게 물리 (대) 데미지
대상의 물리방어력 (중) 감소  </li>
                    <p/>
                    <li><strong>【skill 1】러블리 오더 +</strong><br/>
                    자신을 중심으로 한 범위 내 아군의 물리 공격력 (중) 증가
자신을 중심으로 한 범위 내 모든 아군의 물리 크리티컬 (대) 증가
자신의 물리 공격력과 범위 내의 아군의 수에 따라 물리 공격력 상승효과 증가  </li>
                    <p/>
                    <li><strong>【skill 2】러블리 임펄스</strong><br/>
                    전방의 적 1명에게 물리 (중) 데미지
HP가 가장 낮은 아군 1명의 HP (소) 회복
이 스킬로 가한 데미지가 높을수록 회복량이 증가 </li>
                    <p/>
                    <li><strong>【EX】매지컬 브레이브 +</strong><br/>
                    전투 시작 시 자신의 물리공격력 (대) 증가                    </li>
                </ul>
</div>


        </div>
    )
}