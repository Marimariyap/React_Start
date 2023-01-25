
export default function Ayane() {
    const newLocal = "img/RediveCharacter/Ayane_back.png";
    const newLocal_1 = "img/RediveCharacter/AyaneChristmas_back.png";

    return(
        <div className="container">

        <img src={newLocal} alt="redive" className="character" />
        <div className="well">
          <h1>아야네 ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>위대한 곰돌이왕 푸우키치 (푸우키치 브레이크 강화)</strong><br/>
                    말안해도 다 아는 아야네의 파트너가 파워업한 모습. 위대한 힘을 얻은 푸우키치의 공격은 적의 의식을 장시간 빼앗는 것이 가능하다.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서, 전장을 어지럽히는 곰돌이.<br/>
                    유니온 버스트로 상대를 힘껏 날려버림과 동시에 스턴과 데미지를 입혀 적의 진형을 크게 무너트린다.                
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】푸우키치 사이클론 아치</strong><br/>
                        전방 범위 내 적 전체에게 물리 (특대) 데미지, 대상을 많이 밀어내고 스턴상태로 만듦.                    
                    </li>
                    <p/>
                    <li><strong>【skill 1】푸우키치 브레이크 +</strong><br/>
                        전방 범위 내 적 전체에게 물리 (소) 데미지, 대상을 스턴 상태로 만듦, 전방의 적 하나에게 물리 (소) 데미지, 대상의 행동 속도 (중) 감소                    
                    </li>
                    <p/>
                    <li><strong>【skill 2】푸우키치 허리케인</strong><br/>
                        전방 범위 내 적 전체에게 물리 (소) 데미지, 대상의 물리 방어력 (소) 감소                    
                    </li>
                    <p/>
                    <li><strong>【EX】프리티 슬러거 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (중) 증가, 마법 방어력 (소) 증가
                    </li>
                </ul>
        </div>

          
            <img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            
            <h1>아야네(성탄절) ⭐⭐⭐⭐⭐</h1>
            <h2>전용장비 ⚔️</h2>
                <p><strong>크리스마스 왕 푸우키치(푸우키치의 응원 +)</strong><br/>
                    크리스마스 컬러로 장식된 아야네의 파트너, 한층 더 사랑스러워짐과 함께 아야네의 능력을 끌어올려, 더욱 강력한 일격을 발휘할 수 있다.
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서, 적을 쓸어나가는 성야의 곰돌이.<br/>
                    유니온 버스트는 HP를 소모하지만 위력은 절대적.<br/>
                    스킬로 물리 공격력을 올리면, 더욱 데미지 업.                
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】푸우키치 산타・스톰</strong><br/>
                        전방의 적에게 물리 (특대) 데미지, 자신의 HP 소모                    
                    </li>
                    <p/>
                    <li><strong>【skill 1】푸우키치의 응원 +</strong><br/>
                        자신의 물리 공격력 (특대) 증가, 행동속도 (대) 증가                    
                    </li>
                    <p/>
                    <li><strong>【skill 2】푸우키치 러시</strong><br/>
                        전방의 적 하나에게 물리 (중) 데미지, 대상을 조금 밀어냄                    
                    </li>
                    <p/>
                    <li><strong>【EX】홀리 나이트 슬러거 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (대) 증가                    
                    </li>
                </ul>
            </div>


        </div>
    )
}