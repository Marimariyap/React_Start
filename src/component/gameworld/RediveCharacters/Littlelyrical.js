
export default function Littlelyrical() {
    const newLocal = "img/RediveCharacter/Littlelyrical_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>미소기&미미&쿄우카 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 적 단일에게 필살의 일격을 내뿜는 사이좋은 트리오.<br/>
                    3명의 힘을 합쳐서 내뿜는 공격은, 상대의 약점에 맞춰서 물리로부터 마법공격으로 변화하여<br/>
                    어떤 강한 적이라도 퇴치한다!
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】리틀 리리컬 퍼레이드!</strong><br/>
                        전방의 적 하나에게 물리 (특대) 데미지, 대상의 마법 방어력이 물리 방어력 보다 낮을 경우<br/>
                        전방의 적 하나에게 마법 피해 취급이 되는 물리 (특대) 데미지
                    </li>
                    <p/>
                    <li><strong>【skill 1】트라이 어드벤처</strong><br/>
                        전방의 적 하나에게 물리 (중) 데미지, 대상의 마법 방어력이 물리 방어력보다 낮을 경우<br/>
                        전방의 적 하나에게 마법 데미지 취급이 되는 물리 (소) 데미지
                    </li>
                    <p/>
                    <li><strong>【skill 2】리리컬 댄싱</strong><br/>
                        자신의 물리 공격력 / 크리티컬 (중) 증가, 전방의 적 하나의 물리 방어력 (소) 감소, 자신의 TP (소) 회복
                    </li>
                    <p/>
                    <li><strong>【EX】리틀 브레이블리 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
</div>


        </div>
    )
}