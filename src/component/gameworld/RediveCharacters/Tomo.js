
export default function Tomo() {
    const newLocal = "https://w.namu.la/s/64fbf1d05e195b54f40212bd58d22928feb78ddd4e6a56c4cee7b5a9169d492d10e6fa2ef1550af07be4eb662335b360d2e7f6ab477df5e011075ac85872b0ac22a8dc1f1646d4bd989ef071fee7132e3369233eac8df8b22596ab55fcd6affa4e698309d954abb4b366ae39a394da65";
    const newLocal_1 = "https://w.namu.la/s/99fb135b92cb3f17d8953cf93c4f5d884c19e6d8153bd6e52394ad5b1def5862838ffaafde8a7e245024c51b330d26f26d2df7bb3c3ff293d319da1839a869976744d58454c3ddb6177922786ba31aa6badf897be542396c1e4f59d983cfebe13e936fd6b27d803edadf6929a1746b5a";
    return(
        <div className="container">

          <div className="princess"><img src={newLocal} alt="redive"/></div>

          <h1>토모 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>토끼씨 블레이드 (뿅뿅 어택 강화)</strong><br/>
                    준수한 물리 공격력과 크리티컬에 더해 성장치는 없지만 명중이 3 추가되어 안정성이 보강
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 적의 전열을 무너뜨리는 토끼 소녀.<br/>
                    유니온 버스트는 가장 근접한 적에게 큰 데미지를 입힌 후<br/>
                    주위에 있는 적도 공격하기에 전열을 빠르게 함락시킬 수 있다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】토끼씨 레볼루션</strong><br/>
                        전방 범위 내 모든 적에게 물리 (대) 데미지<br/>
                        자신과 2번째로 가까운 적을 중심으로 한 범위 내 모든 적에게 물리 (특대) 데미지
                    </li>
                    <p/>
                    <li><strong>【skill 1】뿅뿅 어택 +</strong><br/>
                        전방 범위 내 적 전체에게 물리 (대) 데미지
                    </li>
                    <p/>
                    <li><strong>【skill 2】토끼씨의 응원</strong><br/>
                        아군 전체에 물리 공격력 (소) 증가
                    </li>
                    <p/>
                    <li><strong>【EX】토끼씨 파워 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>



                <div className="princess"><img src={newLocal_1} alt="redive"/></div>
            <h1>토모(매지컬) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>빙글빙글 토끼씨 블레이드 (빙글빙글 어택 강화)</strong><br/>
                    공격 대기시간(선딜레이)가 1.67초에서 1.33초로 감소하는 효과를 받았다.<br/>
                    전용장비로 강화되는 스킬 중에서 딜레이 관련 조정을 받은 것은 할로윈 미미가 최초
                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열의 공격에 특화된, 붕대를 둘둘 감은 토끼 소녀.<br/>
                    행동 빈도는 적지만 높은 위력의 범위 공격을 날리고<br/>
                    아군 전체의 물리 공격력을 크게 높이는 스킬도 발군의 효과를 보인다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】빙글빙글 토끼씨 스탬프</strong><br/>
                        전방 범위 내 적 전체에게 물리 (대) 대미지
                    </li>
                    <p/>
                    <li><strong>【skill 1】빙글빙글 어택 +</strong><br/>
                        전방 범위 내 모든 적에게 물리 (대) 대미지
                    </li>
                    <p/>
                    <li><strong>【skill 2】빙글빙글 토끼씨의 응원</strong><br/>
                        아군 전체의 물리 공격력 (특대) 증가, 아군전체의 물리 방어력과 마법 방어력이 초기치의 10% 감소
                    </li>
                    <p/>
                    <li><strong>【EX】빙글빙글 토끼씨 파워 +</strong><br/>
                        전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>



        </div>
    )
}