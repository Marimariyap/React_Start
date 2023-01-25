
export default function Mahiru() {
    const newLocal = "img/RediveCharacter/Mahiru_back.png";
    const newLocal_1 = "img/RediveCharacter/MahiruRanger_back.png";
    
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>마히루 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>엘리자베스 판초 (밀크 탱크 어택 강화)</strong><br/>
                    애우 엘리자베스를 이미지하여 디자인 된 마히루의 판초. 입으면 개그의 센스가 늘고 상대를 혼란에 빠뜨린다.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 적의 움직임을 흐트러뜨리는 목장 주인.<br/>
                    적의 전열을 밀어내어 대열을 무너뜨리고 다른 캐릭터가 사용하는 범위 공격 대상에 적을 밀어 넣는다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】엘리자베스</strong><br/>
                    전방 적 하나에게 물리 (특대) 대미지
대상을 기절 상태로 만듦            </li>
                    <p/>
                    <li><strong>【skill 1】밀크 탱크 어택 +</strong><br/>
                    전방의 적 하나에게 물리 (대) 대미지
대상을 혼란상태로 만들고, 많이 밀어냄  </li>
                    <p/>
                    <li><strong>【skill 2】포크 슬래시</strong><br/>
                    전방의 적 하나에게 물리 (중) 데미지
자신의 물리 공격력 (소) 증가 </li>
                    <p/>
                    <li><strong>【EX】손에 넣은 한방 개그 소재+</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (중) 증가
자신의 물리 방어력 (소) 증가                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>마히루(레인저) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>엘리자베스 포크 (노 밀크 노 라이프 강화)</strong><br/>
                    목장에 대대로 내려오는 유서깊은 장비. 마물로부터 목장을 지키기 위한 것이지만, 일상속에서도 동물들을 보살필 수 있도록 농기구와 비슷한 형태를 하고 있다.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중위에서 다량 상대가 열 여덟 목장의 전사.<br/>
                    상대를 날려버리는 스킬을 다용해 적의 진형을 밀어넣는다.
범위 공격과 혼란 부여 스킬을 구사해 단번에 섬멸한다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】엘리자베스 카니발</strong><br/>
                    전방 범위 내의 적들에게 물리 (중) 데미지 혼란 상태로 만듦 </li>
                    <p/>
                    <li><strong>【skill 1】노 밀크 노 라이프 +</strong><br/>
                    자신의 물리 공격력 (대) 증가
자신의 물리 크리티컬 (중) 증가
자신의 TP를 지속적으로 회복
적의 수에 비례하여 물리 공격력, 크리티컬의 상승량 증가            </li>
                    <p/>
                    <li><strong>【skill 2】농부 러쉬</strong><br/>
                    전방 범위 내의 적들에게 물리 (중) 데미지
범위 내의 적의 수에 따라 데미지가 증가
가장 앞에 있는 적 1명을 멀리 날림 </li>
                    <p/>
                    <li><strong>【EX】올 포 엘리자베스 +</strong><br/>
                    전투 시작시에 자신의 물리 공격력을 (대) 증가                    </li>
                </ul>
</div>


        </div>
    )
}