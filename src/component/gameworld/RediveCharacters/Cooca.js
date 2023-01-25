
export default function Cooca() {
    const newLocal = "img/RediveCharacter/Cooca_back.png";
    const newLocal_1 = "img/RediveCharacter/CoocaEdo_back.png";
    const newLocal_2 = "img/RediveCharacter/CoocaNoir_back.png";
    
    return(
        <div className="container">

            <img src={newLocal} alt="redive" className="character" />
            <div className="well">          
            <h1>쿠우카 ⭐⭐⭐⭐⭐⭐</h1>
            <h2>전용장비 ⚔️</h2>
                <p><strong>플레저 초커 (노릴 거라면 쿠우카를! 강화)</strong><br/>
                    구속복 역할도 겸한 쿠우카의 초커. 스스로의 움직임을 제약하는 것으로 적의 시선을 끌고 남몰래 쾌락을 즐긴다.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 미끼가 되어 공격의 표적이 되는 망상 마조 소녀.<br/>
                    유니온 버스트로 자신에게 마법 배리어를 치고 적의 마법 공격을 흡수하여 HP를 회복한다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】엑스터시 트랜스</strong><br/>
                        자신에게 마법 흡수 배리어를 전개하고 HP를(중) 회복한다<br/>
                        자신이 받는 모든 마법데미지를 경감하는 효과를 부여한다                  
                    </li>
                    <p/>
                    <li><strong>【skill 1】노릴 거라면 쿠우카를! +</strong><br/>
                        【도발】적 전체를 도발, 자신의 물리 방어력 (대) 증가, 자신의 HP (중) 회복                    
                    </li>
                    <p/>
                    <li><strong>【skill 2】격렬한 것도 환영이에요!</strong><br/>
                        자신의 마법 방어력 (대) 증가                    
                    </li>
                    <p/>
                    <li><strong>【EX】망상 프로텍션 +</strong><br/>
                        전투 시작 시 자신의 마법 방어력 (대) 증가                    
                        </li>
                    <p/>
                </ul>
            </div>

          
            <img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            
            <h1>쿠우카(오에도) ⭐⭐⭐⭐⭐</h1>
            <h2>전용장비 ⚔️</h2>
                <p><strong>천자만홍염춘 (모두를 흥분시킬게요! 강화)</strong><br/>
                    쿠우카의 마음을 뜨겁게 만드는 요염한 기모노.<br/>
                    오비를 조인 정도에 따라 흥분이 고조되며 그것을 해방했을 때, 미지의 열락이 회전과 함께 풀려난다.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>최전열에서 아군을 고무하는 기모노 차림의 마조 소녀.<br/>
                    아군의 마법 공격력을 높이고 적의 마법 방어력을 떨어뜨려서, 마법 파티의 서포트 겸 방어역으로서 활약한다.                
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】황홀절정의 춤~!</strong><br/>
                        자신의 HP (특대) 회복, 자신을 중심으로 범위 내 아군의 물리 방어력과 마법 방어력 (대) 증가.                    
                    </li>
                    <p/>
                    <li><strong>【skill 1】모두를 흥분시킬게요! +</strong><br/>
                        아군 전체의 마법 공격력 (대) 증가, 마법 크리티컬 및 행동속도 (중) 증가                    
                    </li>
                    <p/>
                    <li><strong>【skill 2】요염한 핑크빛 숨결이에요!</strong><br/>
                        전방의 적 하나에게 마법 (소) 데미지, 마법 방어력 (소) 감소                    
                    </li>
                    <p/>
                    <li><strong>【EX】현란 트립 존 +</strong><br/>
                        전투 시작 시 자신의 마법 방어력 (대) 증가                    
                    </li>
                </ul>
            </div>


            <img src={newLocal_2} alt="redive" className="character" />
            <div className="well">            
            <h1>쿠우카(느와르) ⭐⭐⭐⭐⭐</h1>
            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>전열에서 맹공을 무효 배리어로 받아내는 어둠의 마조히스트 소녀.<br/>
                    마법 공격력이 가장 높은 아군의 마법 공격력과 크리티컬을 증가시키고 마법 방어력 감소 스킬로 적을 두려움에 빠뜨린다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】쿠우카·도M·익스플로전</strong><br/>
                        전방의 적 하나에게 마법 (대) 데미지, 피해를 준 적의 마법 방어력 (대) 감소                    
                    </li>
                    <p/>
                    <li><strong>【skill 1】도M·셰어링</strong><br/>
                        마법 공격력이 가장 높은 아군 하나의 마법 공격력 / 크리티컬 (대) 증가, 자신에게 물리/마법 무효 배리어 전개                    
                    </li>
                    <p/>
                    <li><strong>【skill 2】도M·패션</strong><br/>
                        전방의 적 하나에게 마법 (소) 데미지, 피해를 준 적의 마법 방어력 (소) 감소, 자신의 HP (대) 회복, 자신의 물리/마법 방어력 (대) 증가                    
                    </li>
                    <p/>
                    <li><strong>【EX】도M·필드 +</strong><br/>
                        전투 시작 시 자신의 물리 방어력 (중) 증가, 전투 시작시 자신의 마법 방어력 (소) 증가                    
                    </li>
                </ul>
            </div>


        </div>
    )
}