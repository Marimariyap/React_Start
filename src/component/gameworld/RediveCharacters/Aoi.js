
export default function Aoi() {
    const newLocal = "img/RediveCharacter/Aoi_back.png";
    const newLocal_1 = "img/RediveCharacter/AoiStudent_back.png";
    const newLocal_2 = "img/RediveCharacter/AoiWork_back.png";
    
    return(
        <div className="container">

            <img src={newLocal} alt="redive" className="character" />
            <div className="well">
            <h1>아오이 ⭐⭐⭐⭐⭐⭐</h1>
            <h2>전용장비 ⚔️</h2>
                <p><strong>BB단의 인연 베레모 (포이즌 애로우 강화)</strong><br/>
                    아오이가 쓰고있는 베레모. 꾸며져있는 한쌍의 깃털은 굳은 인연의 상징.<br/>
                    맺어진 인연을 가슴에 품고, 아오이는 강한 의지로 앞길을 막는 적을 꿰뚫는다.                
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 적의 전열을 무너뜨리는 토끼 소녀.<br/>
                    유니온 버스트는 가장 근접한 적에게 큰 데미지를 입힌 후 주위에 있는 적도 공격하기에 전열을 빠르게 함락시킬 수 있다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】베놈 블루밍</strong><br/>
                        가장 가까이에 있는 적 하나를 중심으로 물리 (중) 데미지, 피해를 준 모든 적을 독 상태로 만듦<br/>
                        해당 스킬의 대상이 이미 독 상태였을 경우, 대신 물리 (특대) 데미지, 독 상태이상을 맹독 상태로 만듦                    
                    </li>
                    <p/>
                    <li><strong>【skill 1】포이즌 애로우 +</strong><br/>
                        전방의 적 하나에게 물리 (중) 데미지, 대상을 중독 상태로 만듦<br/>
                        대상이 이미 중독 상태일 경우 물리 (대) 데미지, 대상을 맹독 상태로 만듦                    
                    </li>
                    <p/>
                    <li><strong>【skill 2】패럴라이즈 애로우</strong><br/>
                        전방의 적 하나에게 물리 (소) 데미지, 대상을 마비 상태로 만듦                    
                    </li>
                    <p/>
                    <li><strong>【EX】포레스트 슈터 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (중) 증가, 자신의 물리 방어력 (소) 증가                    
                    </li>
                </ul>
            </div>


            <img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            
            <h1>아오이(편입생) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>단짝 궁금 (스파이크 서클 강화)</strong><br/>
                    성 테레사 여학원에 임시 편입할 때 즈음 장만한 아오이의 겁쟁이 극복 최종병기.<br/>
                    본래는 부적을 대신한 것이였지만, 현재는 유대의 상징이 되었다.                
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>후열에서 독을 다루는 외톨이 엘프 편입생.<br/>
                    적이 독이나 맹독 상태라면 강회되는 공격 스킬과 적의 물리 방어력을 낮추는 스킬로 아군을 서포트한다.                
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】베놈 블래스트</strong><br/>
                        전방의 적 하나에게 물리 (대) 데미지, 대상을 독 상태로 만듦, 물리 방어력 (대) 감소                    
                    </li>
                    <p/>
                    <li><strong>【skill 1】스파이크 서클 +</strong><br/>
                        전방의 적 하나를 중심으로 물리 데미지를 주며 적의 물리 방어력을 (소) 감소시키는 필드 전개<br/>
                        대상이 독 또는 맹독 상태면 필드의 데미지량 증가                    
                    </li>
                    <p/>
                    <li><strong>【skill 2】애시드 바인</strong><br/>
                        전방의 적 하나의 물리 방어력 (중) 감소, 대상이 독 또는 맹독 상태면 대상에게 물리 (중) 데미지                    
                    </li>
                    <p/>
                    <li><strong>【EX】외톨이의 긍지 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
            </div>


            <img src={newLocal_2} alt="redive" className="character" />
            <div className="well">            
            <h1>아오이(작업복) ⭐⭐⭐⭐⭐</h1>
            <h2>전용장비 ⚔️</h2>
                <p><strong>토이 슬링 샷 (포이즈너스 배럿 강화)</strong><br/>
                    아오이가 장난감 공장에서 아르바이트 중에 개발한 슬링.<br/>
                    마이프렌드군과의 우정의 힘을 담아 쏘는 구슬은 인간과 장난감을 연결하는 다리이다.                
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 적을 방해하는 작업복 차림의 외톨이 엘프.<br/>
                    우정의 굴레로 맺어진 마이프렌드군과 UB로 적의 움직임을 낮추고 방어력을 극적으로 낮춘다.                
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】프렌들리 콤보 샷</strong><br/>
                        가장 멀리 있는 적을 중심으로 필드 전개<br/>
                        [ 필드 효과 ] 범위 내의 모든 적을 행동할 때 마다 피해를 받는 독 상태로 만듦, 행동 속도 (소) 감소, 물리 방어력 (특대) 감소                    
                    </li>
                    <p/>
                    <li><strong>【skill 1】포이즈너스 배럿 +</strong><br/>
                        전방의 적 하나를 중심으로 한 범위 내 모든 적에게 물리 (소) 데미지, 범위 내 모든 적을 행동할 때 마다 피해를 받는 독 상태로 만듦<br/>
                        피해를 받은 모든 적의 물리 방어력 (소) 감소, 대상에 독 상태이상이 있을 경우, 물리 (중) 데미지                    
                    </li>
                    <p/>
                    <li><strong>【skill 2】스턴 배럿</strong><br/>
                        전방의 적 하나를 중심으로 한 범위 내의 모든 적에게 물리 (소) 데미지, 피해를 받은 모든 적을 마비시킴
                    </li>
                    <p/>
                    <li><strong>【EX】외톨이 정신 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
            </div>



        </div>
    )
}