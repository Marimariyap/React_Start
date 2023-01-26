
export default function Suzumei() {
    const newLocal = "img/RediveCharacter/Suzumei_back.png";
    const newLocal_1 = "img/RediveCharacter/SuzumeiSummer_back.png";
    const newLocal_2 = "img/RediveCharacter/SuzumeiNewYear_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>스즈메 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>로열 메이드 드레스 (윈드 블래스트 강화)</strong><br/>
                봉사의 마음을 구현한 에이프런 드레스. 앞치마에서 넘쳐나는 사렌을 향한 충성심이 스즈메의 마력을 높여, 적의 물리방어력을 감소시킨다.   </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>후열에서 회복과 공격을 하는 덜렁이 소녀 메이드.<br/>
                    주변 동료의 HP 회복을 하면서 물리 공격력을 높이는 스킬은 중열・후열의 공격 캐릭터와 상성이 좋다.     </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】스위프 사이클론</strong><br/>
                    전방 범위 내 모든 적에게 마법 (대) 데미지
피해를 받은 모든 적의 물리, 마법 방어력 (대) 감소  </li>
                    <p/>
                    <li><strong>【skill 1】윈드 블래스트 +</strong><br/>
                    전방 범위 내 모든 적에게 마법 (소) 데미지
또한 물리 방어력과 마법 방어력을 (소) 감소    </li>
                    <p/>
                    <li><strong>【skill 2】메이드의 응원</strong><br/>
                    자신의 주변 범위 내 모든 아군의 HP (소) 회복
범위 내 모든 아군의 물리 공격력 (소) 증가
                    </li>
                    <p/>
                    <li><strong>【EX】메이드 스피릿 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (중) 증가
마법 방어력 (소) 증가                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>스즈메(수영복) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>양장 샤인 선데이 (쁘디 골렘 서먼 강화)</strong><br/>
                여름용으로 새로만든 스즈메의 지팡이. 화려한 데코레이션이 리조트 느낌을 전력으로 연출하며, 또한 몇번이고 넘어져도 파르페가 쏟아지지 않는 우수한 물건.  </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열의 방어능력이 뛰어난, 여름의 덜렁이 소녀 메이드.<br/>
                    아군 전체에 방어력 증가와 지속 HP회복을 걸며,
또한 벽이 되어줄 골렘을 불러, 전선을 지탱한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】트로피컬 배케이션</strong><br/>
                    아군 전체의 물리 방어력 및 마법 방어력 (소) 증가
지속적인 HP 회복 상태를 부여 </li>
                    <p/>
                    <li><strong>【skill 1】쁘띠 골렘 서먼 +</strong><br/>
                    【소환】자신의 앞에 전방의 적 하나를 공격하는 쁘띠 골렘 소환
또한 가장 앞에 있는 아군 주변에
물리 방어력과 마법 방어력을 (대) 증가시키는 필드 전개  </li>
                    <p/>
                    <li><strong>【skill 2】소다 에일</strong><br/>
                    가장 앞에 있는 아군을 중심으로
범위 내 모든 아군의 마법 방어력 (중) 증가 </li>
                    <p/>
                    <li><strong>【EX】트로피컬 메이드 +</strong><br/>
                    전투 시작 시 자신의 마법 방어력 (중) 증가
물리 방어력 (소) 증가                    </li>
                </ul>
</div>


<img src={newLocal_2} alt="redive" className="character" />
            <div className="well">            <h1>스즈메(새해) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>신전무녀의 방울장식 (하춘선풍 강화)</strong><br/>
                신전에서 무녀를 하고있는 스즈메가 가진 카구라스즈. 대대로 내려온 무녀들의 기도가 깃들어있어, 방울소리가 닿는 범위의 나쁜기운을 물리친다.  </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 기도로 서포트를 하는 덜렁이 소녀 무녀.<br/>
                    스킬의 마법 무효 배리어로 내구력을 높이고 유니온 버스트로
HP를 회복하고 행동속도를 상승시켜 전황을 정리한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】축복의 무녀신악</strong><br/>
                    아군 전체의 HP를 (중) 회복
행동 속도 (대) 증가        </li>
                    <p/>
                    <li><strong>【skill 1】하춘선풍 +</strong><br/>
                    가장 멀리있는 적을 중심으로 한 범위에 마법 (소) 대미지
해당 스킬에 피격당한 적 전체를 크게 밀어내고, 기절시킴
해당 스킬로 피해를 준 적의 수에 따라 기절의 지속시간 증가  </li>
                    <p/>
                    <li><strong>【skill 2】가호의 파마시</strong><br/>
                    아군 전체에 마법 무효 배리어 전개  </li>
                    <p/>
                    <li><strong>【EX】신년의 가호 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (대) 증가                    </li>
                </ul>
</div>



        </div>
    )
}