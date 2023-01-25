
export default function Hatsune() {
    const newLocal = "img/RediveCharacter/Hatsune_back.png";
    const newLocal_1 = "img/RediveCharacter/HatsuneSummer_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>하츠네 ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>미티어☆리본 (사이코☆블래스트 강화)</strong><br/>
                시오리가 하츠네에게 선물해준 여동생 수제 리본장식. 반짝이는 별에 담긴 시오리의 마음이 언니의 마력과 호응해 적의 마법방어력을 낮춘다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에 있으며 물리 계열 파티에 강한 초능력 소녀.<br/>
                    물리 공격을 하는 적에게 진가를 발휘하는 스킬로 물리 공격형 파티를 일망타진한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】슈팅☆미티어</strong><br/>
                    물리 공격을 하는 적 전체에 마법 (대) 데미지
대상의 마법 방어력 (소) 감소
대상을 장시간 스턴 상태로 만듦
적 전체에게 마법 (중) 데미지                    </li>
                    <p/>
                    <li><strong>【skill 1】사이코☆블래스트 +</strong><br/>
                    물리 공격력이 가장 높은 적 하나에게 마법 (중) 데미지
대상의 마법 방어력 (소) 감소                    </li>
                    <p/>
                    <li><strong>【skill 2】스타☆라이트</strong><br/>
                    물리 공격력이 가장 높은 적 하나에게 마법 (소) 데미지
대상을 스턴 상태로 만듦                    </li>
                    <p/>
                    <li><strong>【EX】해피니스☆에너지 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>하츠네(수영복) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>글리터 스타즈 ☆ 퐁퐁 (퐁퐁 에일☆슛 강화)</strong><br/>
                청춘에게 모든 것을 바치는 자에게 하츠네의 별처럼 반짝이는 응원을 발하는 퐁퐁. 무지갯빛 응원은 해변을 물들여, 어떤 역경도 이겨내고 꿈의 길을 개척한다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>중열에서 전체 마법 공격을 날리는 초능력 치어걸.<br/>
유니온 버스트로 적 전체에 아주 큰 일격을 날리고 그 후, 초능력을 발동한 반동때문에 베개를 끌어안고 꿈에 빠진다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】서머 치어링☆스타</strong><br/>
                    적 전체에게 마법 (대) 데미지
자신에게 수면 상태 부여
수면 상태는 적으로부터 공격을 받지 않는 한 풀리지 않음                    </li>
                    <p/>
                    <li><strong>【skill 1】퐁퐁 에일☆슛 +</strong><br/>
                    적 전체에게 마법 (중) 데미지
자신의 TP (중) 회복
적의 수에 따라 해당 스킬의 데미지 증가
적의 수에 따라 TP 회복량 증가                    </li>
                    <p/>
                    <li><strong>【skill 2】치어풀☆해피니스</strong><br/>
                    자신을 중심으로 한 범위 내 아군 전체에게 마법 공격력 및 마법 크리티컬 (중) 증가
                    </li>
                    <p/>
                    <li><strong>【EX】해피☆치어 보이스 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (대) 증가
                    </li>
                </ul>
</div>


        </div>
    )
}