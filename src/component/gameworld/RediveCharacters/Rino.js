
export default function Rino() {
    const newLocal = "img/RediveCharacter/Rino_back.png";
    const newLocal_1 = "img/RediveCharacter/RinoWonder_back.png";
    const newLocal_2 = "img/RediveCharacter/RinoChristmas_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>리노 ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>프로미넌스 애로우 (컨센트레이션 강화)</strong><br/>
                선명, 강렬한 불꽃이 깃든 리노전용 마법화살. 정열적인 마음이 바로 불꽃의 근원이며 그 일격은, 싸움을 결정짓는 고위력을 자랑한다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>후열에서 화살비를 쏘아내는 여동생 계열의 궁수.<br/>
                    크리티컬 확률을 높이는 중첩 가능한 스킬이 있어 타격 횟수가 많은 유니온 버스트를 더욱 강력하게 만든다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】코로나 레인</strong><br/>
                        전방 범위 내 모든 적에게 물리 (대) 데미지<br/>
                        이 공격으로 크리티컬 발생시의 데미지는 2배가 아닌 3.5배가 된다.
                    </li>
                    <p/>
                    <li><strong>【skill 1】컨센트레이션 +</strong><br/>
                        자신의 물리 공격력 (대) 증가, 자신의 물리 크리티컬 (중) 증가, 자신의 행동 속도 (대) 증가
                    </li>
                    <p/>
                    <li><strong>【skill 2】브레이크 애로우</strong><br/>
                        전방의 적 하나에게 물리 (중) 데미지
                    </li>
                    <p/>
                    <li><strong>【EX】페네트레이션 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
</div>

          
<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>리노(원더) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>원더랜드 보우 (원더 일루전 강화)</strong><br/>
                신기한 책 속에서 앨리스의 힘을 얻은 리노의 활.
앨리스와 마음이 통하는 것으로 구세주로서의 힘을 해방하고, 세계를 구원하는 일격을 가한다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>후열에서 희망의 힘으로 싸우는 이상한 나라의 구세주.<br/>
                    크리티컬 효과가 더해지는 스킬과 아군의 수가 많을수록 위력이 올라가는 유니온 버스트로 적을 무찌른다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】판타직 유니존</strong><br/>
                        전방의 적 하나에게 물리 (소) 데미지, 이 스킬의 데미지는 아군의 수에 따라 증가<br/>
                        크리티컬 적중시 2배가 아닌 3배의 데미지를 줌
                    </li>
                    <p/>
                    <li><strong>【skill 1】원더 일루젼 +</strong><br/>
                        전방의 적 하나에게 물리 (중) 데미지, 자신의 물리 크리티컬 (중) 증가 및 TP (중) 회복<br/>
                        아군의 수에 따라 해당 스킬의 효과가 증가
                    </li>
                    <p/>
                    <li><strong>【skill 2】원더 에로우</strong><br/>
                        전방의 적 하나에게 물리 (중) 데미지, 해당 스킬이 크리티컬 시 물리 방어력 (중) 감소
                    </li>
                    <p/>
                    <li><strong>【EX】하트풀 프렌즈 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_2} alt="redive" className="character" />
            <div className="well">            <h1>리노(성탄절) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>후열에서 공격과 지원을 해주는 성야의 아처.<br/>
                    물리 공격력과 물리 크리티컬 증가 스킬로 주변을 강화하고 크리티컬 시 위력이 증가하는 UB로 적을 분쇄한다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】크리스마스 스타더스트</strong><br/>
                        자신의 물리 크리티컬 (대) 증가, 전방 범위 내 적 전체에게 물리 (대) 데미지<br/>
                        이 스킬이 크리티컬 시, 2배가 아닌 3배의 피해를 줌
                    </li>
                    <p/>
                    <li><strong>【skill 1】블레싱 리스</strong><br/>
                        자신을 중심으로 한 아군 전체의 물리 공격력/크리티컬 (중) 증가
                    </li>
                    <p/>
                    <li><strong>【skill 2】징글 애로우</strong><br/>
                        전방 범위 내 모든 적에게 물리 (소) 데미지, 피해를 준 모든 적의 물리 방어력 (소) 감소<br/>
                        범위 내 적의 수에 따라 방어력 감소량이 최대 4배까지 증가<br/>
                        이 스킬이 크리티컬 시, 2배가 아닌 3배의 피해를 줌
                    </li>
                    <p/>
                    <li><strong>【EX】크리스마스 어프로치 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
</div>


        </div>
    )
}