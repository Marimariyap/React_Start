
export default function Rima() {
    const newLocal = "img/RediveCharacter/Rima_back.png";
    const newLocal_1 = "img/RediveCharacter/RimaCinderella_back.png";
    
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>리마 ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>앰비셔스 드레스 (복실복실 어설트 강화)</strong><br/>
                언젠가 이걸 입고싶어…! 그런 리마의 꿈이 담긴, 오더메이드의 롱 드레스. 꿈꾸는 소녀의 망상력이 바로 지금, 각성한다. </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>최전열에서 동료를 지키는 사랑에 빠진 소녀.<br/>
                    전투 시작되고 잠시 후 가장 후방에서부터 최전선까지 돌진해 적 앞을 가로막는다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】메리 울 스트라이크</strong><br/>
                    전방 범위 내 적 전체에게 물리 (대) 데미지
대상을 조금 밀어냄
자신의 물리 방어력 (특대) 증가
아군 전체에 물리 무효 배리어 전개                    </li>
                    <p/>
                    <li><strong>【skill 1】복실복실 어설트 +</strong><br/>
                    전투 시작 시 가장 뒤에서 출현해
가장 앞의 적에 돌격하여 물리 (중) 데미지
자신의 물리 방어력 (대) 증가
아군 전체에 물리 무효 배리어 전개                    </li>
                    <p/>
                    <li><strong>【skill 2】복실복실 헤드벗</strong><br/>
                    전방의 적 하나에게 물리 (소) 데미지
대상을 스턴 상태로 만듦                    </li>
                    <p/>
                    <li><strong>【EX】프로텍트 퍼 +</strong><br/>
                    전투 시작 시 자신의 물리 방어력 (대) 증가
                    </li>
                </ul>
</div>

          
<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>리마(신데렐라) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 마법의 과일로 공주님의 모습이 된 사랑 소녀.<br/>
                    짐승의 모습에서 유니온 버스트로 일정 시간 인간의 모습으로 변신하고, 아군 전체 대상 공격력 증가 스킬로 화력을 끌어올린다.
                </p>

            <h2>스킬</h2>
                
                <ul>
                    <li><strong>【UB】메타모르 프린세스</strong><br/>
                    인간 폼으로 변신
자신의 물리공격력 (대) 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】복실복실 스매시</strong><br/>
                    전방의 적 하나에게 물리 (대) 데미지                    </li>
                    <p/>
                    <li><strong>【skill 2】복실복실 태클</strong><br/>
                    전방의 적 하나에게 물리 (중) 데미지
자신의 TP (중) 회복                    
</li>
                    <p/>
                    <li><strong>【EX】꿈의 계단 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가                    
                    </li>
                    <p/>
                    <li><strong>【UB】메타모르 프린세스 사용시 스킬 변경</strong><p/>
                        <ol>
                            <strong>【UB】메타모르 프린세스</strong><br/>
                            전방의 적 하나에게 물리 (특대) 데미지                        </ol>
                        <p/>
                        <ol>
                            <strong>【skill 1】뷰티 앤 비스트</strong><br/>
                            자신의 물리 공격력 (중) 증가
자신의 TP (중) 회복                        </ol>
                        <p/>
                        <ol>
                            <strong>【skill 2】댄스 위드 미</strong><br/>
                            아군 전체의 물리공격력 (대) 증가
자신의 물리공격력이 높을수록 공격력 상승량 증가                        </ol>
                        <p/>
                    </li>
                </ul>
</div>


        </div>
    )
}