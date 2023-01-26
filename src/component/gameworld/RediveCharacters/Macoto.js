
export default function Macoto() {
    const newLocal = "img/RediveCharacter/Macoto_back.png";
    const newLocal_1 = "img/RediveCharacter/MacotoSummer_back.png";
    const newLocal_2 = "img/RediveCharacter/MacotoCinderella_back.png";
    
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>마코토 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>울펜 블레이드 (하드 슬래시 강화)</strong><br/>
                    푸른 늑대의 혼이 깃든 대검. 그 일격은 장비자의 대담함을 상징하듯 회오리처럼 적을 덮치고, 동시에 잠들어 있던 힘을 각성시킨다.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 적의 방어력을 깎는 정의의 수인족.<br/>
                    적 탱커의 방어력을 낮추고 착실히 데미지를 입혀
빠르게 적의 방어를 돌파한다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】울펜 바이트</strong><br/>
                    전방의 적 하나에게 물리 (대) 데미지
대상의 물리 방어력 (중) 감소</li>
                    <p/>
                    <li><strong>【skill 1】하드 슬래시 +</strong><br/>
                    전방의 적 하나에게 물리 (대) 데미지
자신의 물리 공격력 (소) 증가</li>
                    <p/>
                    <li><strong>【skill 2】브레이브 하울링</strong><br/>
                    전방의 적 하나의 물리 방어력 (중) 감소
      </li>
                    <p/>
                    <li><strong>【EX】늑대의 맹격 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가                 </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>마코토(수영복) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>서머 울펜 소드 (아쿠아 크로싱 강화)</strong><br/>
                특별하게 고요한 바다에 나타난다 전해지는 바다늑대의 이빨을 정련한 대검. 늑대모양 장식은 마코토가 엄청 좋아하는 물건.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 공격대상이 하나인 적에게 특화된 바다의 늑대소녀.<br/>
                    공격대상이 하나일 경우, 스킬과 유니온버스트가 모두 진가를 발휘하여
타의 추종을 불허하는 절대적 파괴력으로 적을 쓸어버린다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】서머 울펜 블리츠</strong><br/>
                    전방의 적 하나에게 물리 (대) 대미지
남은 공격대상이 하나일 경우
대신 (특대) 대미지를 주고 물리 방어력 (대) 감소</li>
                    <p/>
                    <li><strong>【skill 1】아쿠아 크로싱 +</strong><br/>
                    전방의 적 하나에게 물리 (중) 대미지
남은 공격대상이 하나일 경우
추가로 물리 (중) 대미지를 주고 물리 방어력 (소) 감소 및 자신의 물리 공격력 (소) 증가                </li>
                    <p/>
                    <li><strong>【skill 2】블루 하울링</strong><br/>
                    자신의 물리 공격력 (중) 증가
남은 공격대상이 하나일 경우
이 공격력 증가는 시간에 의해 해제되지 않게된다                    </li>
                    <p/>
                    <li><strong>【EX】바다늑대의 투기 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가                    </li>
                </ul>
</div>


<img src={newLocal_2} alt="redive" className="character" />
            <div className="well">            <h1>마코토(신데렐라) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 화려한 의상을 입고 유려한 검무를 추는 늑대 소녀.<br/>
                    범위 내 아군의 수에 대응해서
스킬의 위력과 물리공격력 버프 스킬의 효과가 상승 하고 아군을 고무시키는 격려의 일참을 날린다.</p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】울펜 론도</strong><br/>
                    자신을 중심으로한 범위 내 아군 전체의 물리 공격력 / 행동속도 (중) 증가
전방의 적 하나에게 물리 (특대) 데미지
범위 내 아군의 수가 많을수록 공격력 상승치 증가</li>
                    <p/>
                    <li><strong>【skill 1】슈발릭 오더</strong><br/>
                    자신을 중심으로 한 범위 내 아군 전체의 물리 공격력 (소) 증가
범위 내 아군의 수가 많을수록 스킬의 효과량 증가</li>
                    <p/>
                    <li><strong>【skill 2】크루엘 댄스</strong><br/>
                    전방의 적 하나에게 물리 (중) 데미지
피해를 준 적의 물리방어력 (소) 감소
자신을 중심으로 한 범위 내 아군의 수가 많을수록 스킬의 데미지 증가</li>
                    <p/>
                    <li><strong>【EX】아름다운 늑대의 검무 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가 </li>
                </ul>
</div>



        </div>
    )
}