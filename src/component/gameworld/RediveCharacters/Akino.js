
export default function Akino() {
    const newLocal = "img/RediveCharacter/Akino_back.png";
    const newLocal_1 = "img/RediveCharacter/AkinoChristmas_back.png";
    
    return(
       <div className="container">

            <img src={newLocal} alt="redive" className="character" />
            <div className="well">
            <h1>아키노 ⭐⭐⭐⭐⭐⭐</h1>
                <h2>전용장비 ⚔️</h2>
                    <p><strong>홍련석 위스타리아 (프라우드 슬래시 강화)</strong><br/>
                        아키노의 몸을 장식하는 브로치. 위스타리아 가문에 대대로 전해 내려오는 휘석으로<br/>
                        소유자에게 고결한 정신과 달리없을 정도의 마력을 내려준다.                
                    </p>

                <h2>소개</h2>
                    <p>
                        <strong>【물리】</strong>전열에서 날뛰며 공격하는 양갓집 규수 검사.<br/>
                        자신의 주변에 아군을 회복하는 필드를 만들고 스스로 전선을 이끄는 모습은 명문가를 짊어진 자의 참모습                
                    </p>

                <h2>스킬</h2>
                    <ul>
                        <li><strong>【UB】노블 프로미넌스</strong><br/>
                            아군 전체의 마법 공격력 (특대) 증가, 전방의 적 하나에게 물리 (특대) 데미지, 
                            타격한 적을 중심으로 물리피해를 주는 필드 전개<br/>
                            자신의 물리 공격력 (특대) 증가, 자신에게 피해를 흡수하는 보호막 전개
                        </li>
                        <p/>
                        <li><strong>【skill 1】프라우드 슬래시 +</strong><br/>
                            전방의 적 하나에게 물리 (중) 데미지, 자신의 물리 공격력 (중) 및 TP 상승 (소) 증가시키고 도발<br/>
                            웃는 동안 공격을 받으면 범위 내의 적에게 반격
                        </li>
                        <p/>
                        <li><strong>【skill 2】힐링 쥬얼</strong><br/>
                            자신의 주변 범위 내 아군의 HP (소) 회복하는 필드 전개                    
                        </li>
                        <p/>
                        <li><strong>【EX】플레임 소울 +</strong><br/>
                            전투 시작 시 자신의 물리 공격력 (중) 증가, 자신의 물리 방어력 (소) 증가                    
                        </li>
                    </ul>
                </div>


            <img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            
            <h1>아키노(성탄절) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>위스타리아 노엘 드레스 (홀리 프라이즈 강화)</strong><br/>
                    아키노의 크리스마스 드레스. 위스타리아 집안 제단사가 제작한, 화려하고 질 좋은 주옥같은 명품 장비이다.                
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 팀원의 서포트를 자신의 힘으로하여 싸우는, 성야의 영애.<br/>
                    능력치를 증가시키는 효과를 받으면 증가하는 '성야의 반짝임'으로 스킬을 강화하여,
                    성야를 장식하는 강렬한 일격을 가한다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】노블 일루미네이션</strong><br/>
                        전방의 적 하나에게 물리 (대) 데미지
                        해당 스킬의 데미지는 [성야의 반짝임] 의 수에 따라 증가                    
                    </li>
                    <p/>
                    <li><strong>【skill 1】홀리 프라이즈 +</strong><br/>
                        자신이 스테이터스 업 효과를 받을 때마다 [성야의 반짝임] 1개 추가, [성야의 반짝임]은 최대 50까지 중첩<br/>
                        자신의 물리 공격력 (대) 증가, 자신의 물리 크리티컬 (대) 증가, 아군 전체의 물리 공격력 (대) 증가<br/>
                        아군 전체의 물리 크리티컬 (대) 증가, 자신의 TP상승 (소) 증가<br/>                   
                    </li>
                    <p/>
                    <li><strong>【skill 2】브릴리언트 슬래시</strong><br/>
                        전방의 적 하나에게 물리 (소) 데미지, 이 스킬의 데미지는 [성야의 반짝임] 의 수에 따라 증가                    
                    </li>
                    <p/>
                    <li><strong>【EX】세인트 오블리쥬 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (대) 증가                    
                    </li>
                </ul>
            </div>


        </div>
    )
}