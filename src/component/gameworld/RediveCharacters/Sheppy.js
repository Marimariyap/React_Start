
export default function Sheppy() {
    const newLocal = "img/RediveCharacter/Sheppy_back.png";
    const newLocal_1 = "img/RediveCharacter/SheppyNewyear_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>셰피 ⭐⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>빙룡검 (설답 강화)</strong><br/>
                셰피가 자신의 검에 얼음칼을 휘감아 놓은 모습. 마력이 높아짐에 따라 위력을 더해, 셰피 외에는 잡기조차 힘든 냉기를 뿜어내고 있다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 빙설을 컨트롤하여 적을 동멸하는 얼음용 소녀.<br/>
                    유니온 버스트로 획득할 수 있는 [빙룡의 표식]을 사용하며<br/>
                    스킬의 효과를 증폭하여 청렴한 검술로 적을 베어 쓰러뜨린다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】무참・월하빙룡 프로스트 팽</strong><br/>
                        전방의 적 하나에게 물리 (특대) 데미지, 자신에게 [빙룡의 인] 7개 증가<br/>
                        UB를 사용할 때마다 얻는 [빙룡의 인] 수가 1개씩 최대 20개까지 증가<br/>
                        [얼어붙는 호수제게플로레인] 필드 전개 중 자신에게 TP 회복 상태 부여<br/>
                        이 기술의 TP 회복량은 [빙룡의 인] 수에 따라 증가
                    </li>
                    <p/>
                    <li><strong>【skill 1】설답 +</strong><br/>
                        [빙룡의 인]을 1개 소모하여 전방의 적 하나에게 물리 (소) 데미지 및 물리 방어력 (중) 감소<br/>
                        자신의 물리 공격력 (소) 증가, 
                        이 스킬의 데미지와 물리공격력 상승 효과는 [빙룡의 인] 수에 따라 증가
                    </li>
                    <p/>
                    <li><strong>【skill 2】얼어붙는 호수</strong><br/>
                        [빙룡의 인]을 1개 소모하여 물리 공격력 (소) 증가시키는 필드 전개<br/>
                        가지고 있는 [빙룡의 인] 수에 따라 물리 공격력 상승량 증가
                    </li>
                    <p/>
                    <li><strong>【EX】엑셀론도 +</strong><br/>
                        전투 시작 시 물리 공격력 (대) 증가
                    </li>
                    <p/>
                    <li><strong>【SP】빙룡의 인</strong><br/>
                        [빙룡의 인] 4개 증가
                    </li>
                </ul>
</div>

          
<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>셰피(새해) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>업데이트 예정</strong><br/></p>

            <h2>소개</h2>
                <p>
                    <strong>【마법】</strong>전위, 눈꽃을 날리며 하늘을 누비는 신춘 얼음용 소녀.<br/>
                    
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】천무・초춘빙룡</strong><br/>
                        전방 범위 내 모든 적에게 물리 (대) 데미지, TP가 전부 없어질 때 까지 [빙룡의 엄니]를 사용
                    </li>
                    <p/>
                    <li><strong>【skill 1】춘답</strong><br/>
                        자신을 중심으로 한 범위 내 아군 전체의 물리 공격력 (중) 증가<br/>
                        자신을 중심으로 한 범위 내 아군 전체의 TP 상승 (소) 증가, [빙룡의 엄니] 활성화 시<br/>
                        이 스킬의 효과량이 증가
                    </li>
                    <p/>
                    <li><strong>【skill 2】빙섬</strong><br/>
                        전방 범위 내 모든 적에게 물리 (중) 데미지, 피해를 준 적의 물리 방어력 (소) 감소<br/>
                        [빙룡의 엄니] 활성화 시, 추가로 적 전체에게 물리 (중) 데미지
                    </li>
                    <p/>
                    <li><strong>【EX】스파클 점프 +</strong><br/>
                        전투 시작 시 물리 공격력 (대) 증가
                    </li>
                </ul>
</div>


        </div>
    )
}