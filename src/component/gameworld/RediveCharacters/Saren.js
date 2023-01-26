
export default function Saren() {
    const newLocal = "img/RediveCharacter/Saren_Back.png";
    const newLocal_1 = "img/RediveCharacter/SarenSummer_Back.png";
    const newLocal_2 = "img/RediveCharacter/SarenChristmas_Back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>사렌 ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>글로리어스 페더 (파이어 슬래시 강화)</strong><br/>
                사렌이 애용하는 헤어 액세서리. 다정함 속에 숨겨진 강함을 상징한다. 그 날개가 퍼득일 때, 몸은 중력에서 해방된다. </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 한방 역전을 노리는 모두의 사렌 마마.<br/>
                    HP가 깎일수록 데미지가 상승하는 유니온 버스트와
아군의 TP를 회복하는 스킬로 한 방에 형세를 역전한다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】엔드 오브 피닉스</strong><br/>
                    전방 범위 내 적 전체에게 물리 (대) 데미지
아군 전체의 물리공격력/마법공격력 (대) 증가
사렌의 HP가 낮을수록 데미지와 아군 공격력 증가량이 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】파이어 슬래시 +</strong><br/>
                    전방 범위 내 적 전체에게 물리 (중) 데미지
사렌의 HP가 낮을수록 데미지 증가                    </li>
                    <p/>
                    <li><strong>【skill 2】엘레강스한 응원</strong><br/>
                    가장 가까이에 있는 아군 하나의 TP (중) 회복                    </li>
                    <p/>
                    <li><strong>【EX】노블 엘레강트 소울 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가                    </li>
                </ul>
</div>

          
<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>사렌(수영복) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>섬려검 서머 브라이트 (스플래시 트월링 강화)</strong><br/>
                사렌이 여름에 차고 있는 검. 구호원의 마마가 아니라, 한명의 여성으로서도 여름을 즐겨줬으면 하는 아이들의 바람이 담겨져 있다.               </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서, 아군의 속공을 지원하는 해변의 사렌마마.<br/>
                    전투 개시 시에 아군 전체의 TP를 한번에 채워서
신속하게 유니온버스트를 발동할 수 있게 만든다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】서머 브라이트 포스</strong><br/>
                    아군 전체의 물리 공격력 및 마법 공격력 ・ 행동속도 (대) 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】스플래시 트월링 +</strong><br/>
                    아군 전체의 TP (대) 회복
물리 공격력 및 마법 공격력 (대) 증가                    </li>
                    <p/>
                    <li><strong>【skill 2】반짝이는 응원</strong><br/>
                    아군 전체의 물리 공격력 및 마법 공격력 ・ 물리 크리티컬 및 마법 크리티컬 (소) 증가                    </li>
                    <p/>
                    <li><strong>【EX】노블 베케이션 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (중) 증가
자신의 마법 방어력 (소) 증가                    </li>
                </ul>
</div>


<img src={newLocal_2} alt="redive" className="character" />
            <div className="well">            <h1>사렌(성탄절) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전열에서 빛을 다뤄 팀을 지키는 성야의 사렌 마마.<br/>
                    적의 공격을 막고 데미지를 주는 유니온버스트나,
데미지를 주면서 회복하는 스킬로 공방 모두를 담당한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】실드 오브 가든</strong><br/>
                    전방의 랜덤한 적에게 물리 (대) 대미지 3회
아군 전체 물리 / 마법 공격력 (대) 증가
자신에게 빛의 방패 3개 부여
빛의 방패는 1회 피격시 피해를 입는 대신 1개씩 소비되며 동시에 적에게 물리 (소) 대미지
빛의 방패는 최대 5개까지 부여 가능                    </li>
                    <p/>
                    <li><strong>【skill 1】어메이징 기프트</strong><br/>
                    자신을 중심으로 한 범위 내 아군 전체의 물리 / 마법 공격력 (대) 증가
자신을 중심으로 한 범위 내 아군 전체의 물리 / 마법 방어력 (중) 증가                    </li>
                    <p/>
                    <li><strong>【skill 2】루미너스 배럿</strong><br/>
                    전방의 랜덤한 적에게 물리 (소) 대미지 3회
HP가 가장 적은 아군 1명의 HP (중) 회복                    </li>
                    <p/>
                    <li><strong>【EX】사일런트 블레이즈 +</strong><br/>
                    전투 시작 시 자신의 물리방어력 (대) 증가
                    </li>
                </ul>
</div>


        </div>
    )
}