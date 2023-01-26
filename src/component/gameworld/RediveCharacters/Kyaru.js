
export default function Kyaru() {
    const newLocal = "img/RediveCharacter/Kyaru_back.png";
    const newLocal_1 = "img/RediveCharacter/KyaruSummer_back.png";
    const newLocal_2 = "img/RediveCharacter/KyaruNewyear_back.png";
    const newLocal_3 = "img/RediveCharacter/KyaruPrincess_back.png";
    return(
        <div className="container">



<img src={newLocal} alt="redive" className="character" />
            <div className="well">            <h1>캬루 ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>카오스 그리모어 (썬더 볼 강화)</strong><br/>
                캬루가 가지고 다니는 마도서. 책에 깃든 흘러넘칠 듯한 마력을 제어하면 기입된 강력한 술식을 자유자재로 다룰 수 있다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 강력한 전체 공격을 하는 기가 센 고양이 소녀.<br/>
                    스킬로 적의 물리·마법 양쪽의 방어력을 낮추기 때문에 어떠한 편성에서도 전투를 유리하게 이끌 수 있다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】어비스 버스트</strong><br/>
                    적 전체에게 마법 (대) 데미지, 패닉 상태로 만듦
                    </li>
                    <p/>
                    <li><strong>【skill 1】썬더 볼 +</strong><br/>
                    전방의 적 하나에게 마법 (중) 데미지, 대상 주변의 적에게 마법 (소) 데미지, 대상의 마법 방어력 (소) 감소
                    </li>
                    <p/>
                    <li><strong>【skill 2】아머 다운</strong><br/>
                    전방의 적 하나의 물리 방어력 및 마법 방어력 (소) 감소
                    </li>
                    <p/>
                    <li><strong>【EX】다크 이클립스 +</strong><br/>
                    전투 시작 시 자신의 마법 공격력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>캬루(수영복) ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>고양이 튜브 서머 플로트 (워터 배럿 강화)</strong><br/>
                캬루가 여름을 즐기기 위해 몰래 준비한 튜브. 본인은 안정성이 좋아서 골랐다고 주장하지만 귀여움이 잔뜩 묻어난 디자인이라 진의가 의심스럽다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 적 하나에게 강력한 공격을 입히는 한여름의 고양이 소녀.<br/>
                    스킬로 적의 마법 방어력을 낮춘 후 적 하나에게 마법 공격을 연속으로 퍼부어 큰 데미지를 입힌다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】서머 풀 플로터</strong><br/>
                        바로 앞의 적 하나에게 마법(특대)데미지, 마법 방어력(소) 감소<br/>
                        이 스킬의 대상이 마법 방어력이 감소 되어있는 상태의 경우 마법(대) 데미지를 추가로 입힌다.
                    </li>
                    <p/>
                    <li><strong>【skill 1】워터 배럿 +</strong><br/>
                        전방의 적 하나에게 마법 (대) 데미지, 마법 방어력 (소) 감소
                    </li>
                    <p/>
                    <li><strong>【skill 2】스파이럴 웨이브</strong><br/>
                        전방의 적 하나에게 마법 (소) 데미지, 대상의 마법 방어력 (중) 감소
                    </li>
                    <p/>
                    <li><strong>【EX】하이드로링크 +</strong><br/>
                        전투 시작 시 자신의 마법 공격력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_2} alt="redive" className="character" />
            <div className="well">            <h1>캬루(새해) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>하정 고양이귀 하고이타 (섀도우 배럿 강화)</strong><br/>
                나들이옷 차림의 캬루가 가진 특별주문 하고이타. 새로운 한 해의 복을 바라는 마음이 무수한 하네를 만들어내어, 온갖 재앙을 물리친다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 공격과 방어, 두 방면에서 활약하는 기모노 차림의 고양이 소녀.<br/>
                    피격 데미지에 따라 마법 공격력이 증가하는 유니온 버스트로 높은 공격력이 더욱 막강해진다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】뉴 이어 버스트</strong><br/>
                        전방의 적 하나에게 마법 (특대) 데미지, 마법 공격력 (중) 증가<br/>
                        이 스킬로 입힌 데미지량에 따라 공격력 상승량 증가
                    </li>
                    <p/>
                    <li><strong>【skill 1】섀도우 배럿 +</strong><br/>
                        전방 범위 내 적 전체에게 마법 (대) 데미지
                    </li>
                    <p/>
                    <li><strong>【skill 2】위싱 필드</strong><br/>
                        아군 전체의 마법 공격력 (중) 증가, 물리 무효 배리어 전개<br/>
                        자신의 마법 공격력이 높을수록 배리어의 무효 데미지량 증가
                    </li>
                    <p/>
                    <li><strong>【EX】디자이어 베일 +</strong><br/>
                        전투 시작 시 자신의 마법 공격력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_3} alt="redive" className="character" />
            <div className="well">            <h1>캬루(프린세스) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>후열에서 극대 마법을 사용해 적을 토벌하는 프린세스 고양이 소녀.<br/>
                    회복이나 보조를 겸한 공격스킬을 구사해 전황을 정비하고 극대 위력의 유니온 버스트로 적을 태워버린다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】어비스 엔드 버스트</strong><br/>
                        전방의 적 하나에게 마법 (극대) 데미지
                    </li>
                    <p/>
                    <li><strong>【skill 1】캘러미티 썬더</strong><br/>
                        전방의 적 하나에게 마법 (소) 데미지, 마법 방어력 (중) 감소
                    </li>
                    <p/>
                    <li><strong>【skill 2】어비스 콜 에이드</strong><br/>
                        전방의 적 하나에게 마법 (중) 데미지, HP가 가장 적은 아군 하나의 HP (소) 회복<br/>
                        이 스킬로 입힌 데미지량에 따라 회복량 증가
                    </li>
                    <p/>
                    <li><strong>【EX】다크 풀 문 +</strong><br/>
                        전투 시작 시 자신의 마법 공격력 (대) 증가  
                    </li>
                </ul>
          </div>


        </div>
    )
}