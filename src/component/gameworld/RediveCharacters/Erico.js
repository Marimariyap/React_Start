
export default function Erico() {
    const newLocal = "img/RediveCharacter/Erico_back.png";
    const newLocal_1 = "img/RediveCharacter/EricoValentine_back.png";
    const newLocal_2 = "img/RediveCharacter/EricoSummer_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>에리코 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>노 머시 (집착 강화)</strong><br/>
                과격한 애정을 파괴력으로 전환해 에리코의 미칠듯한 사랑을 연성하는 망령도끼. 한번 번뜩일 때마다 파멸로 치닫는 광상곡이 연주된다.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 독 스킬로 적을 분쇄하는 일명 해결사.<br/>
                    톱 클래스의 공격력을 가졌으며 유니온 버스트로 적의 숨통을 끊을 때마다 공격력이 더욱 올라간다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】데들리 퍼니쉬</strong><br/>
                    전방의 적 하나에게 물리 (특대) 데미지
이 스킬로 적을 쓰러뜨리면 자신의 물리 공격력 (대) 증가                   </li>
                    <p/>
                    <li><strong>【skill 1】집착 +</strong><br/>
                    자신의 물리 공격력 (대) 증가
짧은 시간 동안 물리 공격력 및 물리 크리티컬 (특대) 증가                   </li>
                    <p/>
                    <li><strong>【skill 2】포이즌 블로우</strong><br/>
                    전방의 적 하나에게 물리 (중) 데미지
대상을 중독 상태로 만듦                    </li>
                    <p/>
                    <li><strong>【EX】광애의 힘 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>에리코(발렌타인) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>디스트로이 휘퍼 (헤비 믹싱 강화)</strong><br/>
                    운명의 인연에게 줄 초콜릿을 만들기 위해 준비한, 에리코 외엔 감당할 수 없는 조리기구. 사랑이 담긴 일격은 온갖 것들을 두들겨 부숴, 가루로 만든다.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 위기를 기회로 바꾸는 사랑의 해결사.<br/>
                    스킬은 HP를 소비하여 자신의 공격력을 높인다.
또한 유니온 버스트는 HP가 낮을수록 초절정 위력을 발휘한다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】러브 퍼니시먼트</strong><br/>
                    전방의 적 하나에게 물리 (특대) 데미지
에리코의 HP가 낮을수록 데미지 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】헤비 믹싱 +</strong><br/>
                    전방의 적 하나에게 물리 (대) 데미지
에리코의 HP가 낮을수록 데미지 증가
이 스킬이 크리티컬 히트한 경우 2배가 아닌 4배의 데미지                    </li>
                    <p/>
                    <li><strong>【skill 2】스위트 새크리파이스</strong><br/>
                    자신의 HP를 소모해 물리 공격력 (중) 증가
에리코의 HP가 낮을수록 효과 증가                   </li>
                    <p/>
                    <li><strong>【EX】딥 스피릿 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가                    </li>
                </ul>
</div>


<img src={newLocal_2} alt="redive" className="character" />
            <div className="well">            <h1>에리코(수영복) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>
            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 불꽃을 휘감고 저녁사이를 수놓는 한여름의 파괴자.<br/>
                    두가지 스킬로 적의 방어력을 낮추고,
데미지에 따라 크리티컬 상승이 연장되는 UB로 눈앞의 적을 분쇄한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】데들리 서머 선셋</strong><br/>
                    전방의 적 하나에게 물리 (특대) 데미지
자신의 물리 크리티컬 (대) 증가
해당 스킬로 준 피해량에 비례하여 물리 크리티컬 상승 시간 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】미드서머 블래스트 +</strong><br/>
                    전방의 적 하나에게 물리 (중) 데미지 / 물리 방어력 (소) 감소                   </li>
                    <p/>
                    <li><strong>【skill 2】알케믹 서머</strong><br/>
                    전방의 적 하나의 물리방어력 (중) 감소
자신의 TP (소) 회복                   </li>
                    <p/>
                    <li><strong>【EX】네버엔딩 서머 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
</div>



        </div>
    )
}