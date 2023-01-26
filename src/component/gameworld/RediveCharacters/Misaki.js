
export default function Misaki() {
    const newLocal = "img/RediveCharacter/Misaki_back.png";
    const newLocal_1 = "img/RediveCharacter/MisakiGhost_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>미사키 ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>마안장 데모니스・아이 (다크 포톤 강화)</strong><br/>
                미사키의 무기 겸 파트너인 지팡이. 한층 더 진화를 이루어 낸 살아있는 마의 지팡이지만, 슬프게도 현재는 메이크 업의 시험대상이 되어있다.</p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 범위 공격을 하는 레이디・위치.<br/>
                    여러 번의 범위 공격을 날리는 스킬이나 눈앞의 전 전체를 공격하는 유니온 버스트로 범위 섬멸이 특기다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】비너스 둠 아이</strong><br/>
                    적 전체에게 마법 (중) 데미지를 주고 주저 상태를 걸며 초당 지속데미지가 부여된다.
대상이 이미 주저 상태인 경우, 저주상태로 전환한다.
주저 또는 저주 상태의 적에게는
스킬 데미지량 증가 및 대상 전체 유혹상태를 부여한다.
주저상태에서 발생되는 지속딜량은 해당 스킬을 사용할수록 점점 증가한다.                    </li>
                    <p/>
                    <li><strong>【skill 1】다크 포톤 +</strong><br/>
                    전방 범위 내 모든 적에게 마법 (중) 데미지
행동 속도 (대) 감소                    </li>
                    <p/>
                    <li><strong>【skill 2】스로잉 아이</strong><br/>
                    범위 내 모든 적에게 3회의 마법 (소) 데미지
범위의 중심은 미사키에게서
가까운 순서대로 선택됨                    </li>
                    <p/>
                    <li><strong>【EX】레이디의 소양 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (대) 증가                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>미사키(할로윈) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>마추 할로윈・아이 (레이디 매직 강화)</strong><br/>
                미사키한테 할로윈 코디를 당한 살아있는 마의 지팡이 아이쨩. 어른의 거친 느낌과, 할로윈 화장의 귀여움을 모두 갖춘 완벽한 완성도라고 한다.</p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 방해스킬을 다루는 세련된 마법소녀.<br/>
                    상대를 매혹상태로 만드는 스킬이나, 여러 상태이상을
동시에 부여하는 유니온버스트로 상대를 교란한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】펌킨 데스 파티</strong><br/>
                    전방의 적 전체에게 마법 (중) 데미지
저주 및 속박 상태로 만듦
대상의 마법 방어력 (소) 감소                    </li>
                    <p/>
                    <li><strong>【skill 1】레이디 매직 +</strong><br/>
                    전방의 적 하나에게 마법 (중) 데미지
TP (소) 감소
대상을 유혹 상태로 만듦                    </li>
                    <p/>
                    <li><strong>【skill 2】할로윈 부스트</strong><br/>
                    자신의 주변 범위 내 아군 전체의 마법 공격력 (중) 증가                    </li>
                    <p/>
                    <li><strong>【EX】할로윈 레이디 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (대) 증가                    </li>
                </ul>
</div>


        </div>
    )
}