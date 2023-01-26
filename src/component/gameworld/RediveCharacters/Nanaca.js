
export default function Nanaca() {
    const newLocal = "img/RediveCharacter/Nanaca_back.png";
    const newLocal_1 = "img/RediveCharacter/NanacaSummer_back.png";
    
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>나나카 ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>나나카 최강 로드 (스타더스트 매직 강화)</strong><br/>
                나나카가 휘두르는 마법의 지팡이. 천재마법소녀의 전뇌에 섬광이 지나며, 고양된 마력을 담은 초절마법으로 적을 공격 가능한 것이다! </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 다채로운 마법을 쓰는 오타쿠 마법 소녀.<br/>
                    체력이 가장 많은 상대를 노리는 유니온 버스트와 스킬은
적의 HP 상황에 따라 공격 대상이 바뀌는 높은 위력의 마법 공격.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】나나카 ∞ 글리터</strong><br/>
                    남은 HP비율이 가장 높은 적 하나에게 마법 (특대) 데미지
피해를 준 적의 마법 방어력 (소) 감소                    </li>
                    <p/>
                    <li><strong>【skill 1】스타더스트 매직 +</strong><br/>
                    전방 범위 내 적 전체의 마법 방어력 (중) 감소                    </li>
                    <p/>
                    <li><strong>【skill 2】에너지 임팩트</strong><br/>
                    남은 HP비율이 가장 높은 적 하나에 마법 (중) 데미지
대상을 스턴 상태로 만듦                    </li>
                    <p/>
                    <li><strong>【EX】어웨이크닝 모드 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (대) 증가                    </li>
                    <p/>
                </ul>
</div>

          
<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>나나카(수영복) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>나나카 나츠카와 로드 (돌핀 매직 강화)</strong><br/>
                여름 차림의 나나카가 들고 있는 마법의 지팡이. 천재 마법소녀가 여름의 두근거림을 느낄 때, 숨겨져 있는 진정한 힘이 풀려버리는 것이다!  </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>중열에서 다수를 상대로 하는 싸움이 특기인 한여름의 마법소녀.<br/>
                    적의 수에 비례해 효과가 상승하는 방어력 감소 스킬이나,
다채로운 범위 공격을 구사하여, 한여름의 싸움을 짱 귀엽게 제패한다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】나나카・서머・카니발</strong><br/>
                    전방 범위 내 모든 적에게 마법 (대) 데미지
대상의 마법 방어력 (소) 감소                    </li>
                    <p/>
                    <li><strong>【skill 1】돌핀 매직 +</strong><br/>
                    전방 범위 내 모든 적에게 마법 (중) 데미지
자신을 중심으로 한 범위 내 아군 전체의 마법 공격력 (특대) 증가
해당 스킬의 대상이 되는 적이 많을수록 스킬의 효과 상승                    </li>
                    <p/>
                    <li><strong>【skill 2】브레이크 스플래시</strong><br/>
                    적 전체의 마법 방어력 (소) 감소
적의 수에 따라 효과치 증가                    </li>
                    <p/>
                    <li><strong>【EX】서머 홀리데이 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (대) 증가                    </li>
                </ul>
</div>


        </div>
    )
}