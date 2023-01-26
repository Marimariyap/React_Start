
export default function Yuki() {
    const newLocal = "img/RediveCharacter/Yuki_back.png";
    const newLocal_1 = "img/RediveCharacter/YukiEdo_back.png";
    
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>유키 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>글리터 컴팩트 (나도 반할 만큼의 아름다움♪ 강화)</strong><br/>
                유키가 애용하는 콤팩트. 눈 부신 빛을 뿜는 장식이 유키의 아름다움을 돋보이게 하여 전 인류에게 지대한 영향을 준다고한다.  </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 물리 공격 파티를 보조하는 걸어 다니는 예술 작품..<br/>
                    아군의 유니온 버스트 발동을 촉진하는 스킬 외에도 적을 암흑 상태로 만드는 스킬로 물리 공격을 막는다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】나의 아름다움에 굴복해!</strong><br/>
                    전방의 적에게 마법 (소) 데미지
대상의 물리 방어력 (소) 감소                    </li>
                    <p/>
                    <li><strong>【skill 1】나도 반할 만큼의 아름다움♪ +</strong><br/>
                    자신으로부터 두 번째로 가까운 적 하나에게 마법 (중) 데미지
대상을 암흑 & 유혹 상태로 만듦                    </li>
                    <p/>
                    <li><strong>【skill 2】사랑스러운 내가 응원해줄게♪</strong><br/>
                    TP가 가장 많은 아군의 TP (중) 회복                    </li>
                    <p/>
                    <li><strong>【EX】사랑스러운 내가 힘내는 거야 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (중) 증가
자신의 물리 방어력 (소) 증가                    </li>
                </ul>
</div>

          
<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>유키(오에도) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 백의를 두르고 길잃은 모두를 구원하는 아름다움의 상징.<br/>
                    TP가 가장 낮은 아군 하나의 TP를 회복시키고 HP 회복 스킬로 지키며, 마법공격력 증가 스킬로 단숨에 승리를 쟁취한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】귀여운 나를 긴급 투여 할게♪</strong><br/>
                    아군 전체의 마법 공격력 / 행동속도 (대) 증가
적 전체의 마법 방어력 (소) 감소                    </li>
                    <p/>
                    <li><strong>【skill 1】천사 같은 내가 치유해♪</strong><br/>
                    남은 HP비율이 가장 낮은 아군 한명을 중심으로 한 범위 내 모든 아군의 HP (중) 회복                    </li>
                    <p/>
                    <li><strong>【skill 2】내 아름다움이 처방전이야♪</strong><br/>
                    TP가 가장 낮은 아군 한명의 TP (중) 회복
해당 캐릭터를 중심으로 한 범위 내 모든 아군의 마법 공격력 (중) 증가                    </li>
                    <p/>
                    <li><strong>【EX】천사 같은 내가 힘낼게♪ +</strong><br/>
                    전투 시작 시 자신의 마법 방어력 (대) 증가                    </li>
                </ul>
</div>


        </div>
    )
}