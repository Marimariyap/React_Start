
export default function Nozomi() {
    const newLocal = "img/RediveCharacter/Nozomi_back.png";
    const newLocal_1 = "img/RediveCharacter/NozomiSummer_back.png";
    const newLocal_2 = "img/RediveCharacter/NozomiChristmas_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>노조미 ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>브릴리언트 마이크 (클레르 슬래시 강화)</strong><br/>
                노조미 전용 핸드마이크. 귀여운 리본의 중심엔 【카르미나】의 마크가 그려져있다. 이걸 들고 톱 아이돌을 꿈꾼다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 모두의 방패가 되어 싸우는 아이돌 노조밍.<br/>
                    그녀가 스테이지에 서면 아군의 물리 공격력이 큰 폭으로 증가하고 적의 시선을 단번에 끌어당긴다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】라이브 온 스페셜 스테이지</strong><br/>
                        【도발】적 전체를 도발, 아군 전체의 물리 공격력 (대) 증가, 아군 전체에게 물리·마법 무효 배리어 전개<br/>
                        자신의 물리 방어력과 마법 방어력 (특대) 증가, 적 전체를 기절시킴
                    </li>
                    <p/>
                    <li><strong>【skill 1】클레르 슬래시 +</strong><br/>
                        전방 범위 내 적 전체에게 물리 (소) 데미지, 대상을 스턴 상태로 만듦, 피해를 준 적의 물리 공격력 (소) 감소
                    </li>
                    <p/>
                    <li><strong>【skill 2】아이돌의 응원</strong><br/>
                        자신의 주변 아군 전체의 HP (중) 회복
                    </li>
                    <p/>
                    <li><strong>【EX】루미너스 스마일 +</strong><br/>
                        전투 시작 시 자신의 물리 방어력 (중) 증가, 자신의 마법 방어력 (소) 증가
                    </li>
                </ul>
</div>

          
<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>노조미(수영복) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 모두를 응원하는 한여름의 톱 아이돌.<br/>
                    모든 스킬로 아군 전체의 물리 공격을 서포트하고<br/>
                    배틀 중반부터 아군 전체의 TP를 회복해 모두를 승리로 이끈다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】메모리즈 오브 서머</strong><br/>
                        아군 전체의 물리 크리티컬 피해량 (소) 증가, 전방의 적 하나에게 물리 (특대) 데미지
                    </li>
                    <p/>
                    <li><strong>【skill 1】서머 아이돌 예일</strong><br/>
                        아군 전체의 물리 공격력 (대) 증가, 아군 전체의 물리·마법 방어력 (중) 증가
                    </li>
                    <p/>
                    <li><strong>【skill 2】서머 브리즈</strong><br/>
                        아군 전체의 TP (소) 회복, 아군 전체의 물리 공격력 (중) 증가
                    </li>
                    <p/>
                    <li><strong>【EX】선샤인 스마일 +</strong><br/>
                        전투 시작시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_2} alt="redive" className="character" />
            <div className="well">            <h1>노조미(성탄절) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>성령검 세인트호프 (크리스마스의 응원 강화)</strong><br/>
                산타클로스의 후보가 된 노조미의 한손검.
아이돌로서의 결의와 많은 사람의 꿈과 희망의 마음이 그 칼날에 눈부시게 빛나고 있다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 파티의 방어를 서포트하는 산타 아이돌.<br/>
                    스킬로 물리 공격을 무효화하고, 뒤에 아군이 많을수록 물리 방어력이 높아지는 유니온 버스트로 생존력을 높인다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】라이브 온 크리스마스</strong><br/>
                        아군 전체의 물리 방어력 (소) 증가, 자신보다 후방에 있는 아군의 수 만큼 방어력의 상승량이 증가</li>
                    <p/>
                    <li><strong>【skill 1】크리스마스의 응원 +</strong><br/>
                        자신의 HP (소) 회복, 아군 전체에 물리 무효 보호막 전개, 보호막을 받은 아군의 물리 방어력 (소) 증가<br/>
                        보호막을 받은 아군의 HP를 지속적 회복 상태로 만듦, 자신보다 후방에 있는 아군의 수에 따라 HP 회복<br/>
                        물리 방어력 증가, HP 지속 회복량이 증가
                    </li>
                    <p/>
                    <li><strong>【skill 2】프로스트 슬래시</strong><br/>
                        전방에 적 하나에게 물리 (중) 데미지, 대상을 동결 상태로 만듦
                    </li>
                    <p/>
                    <li><strong>【EX】일루미네이트 스마일 +</strong><br/>
                        전투 시작 시 자신의 물리 방어력 (대) 증가
                    </li>
                </ul>
</div>


        </div>
    )
}