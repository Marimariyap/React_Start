
export default function Tomo() {
    const newLocal = "img/RediveCharacter/Tomo_back.png";
    const newLocal_1 = "img/RediveCharacter/TomoMagical_back.png";
    return(
        <div className="container">

<img src={newLocal} alt="redive" className="character" />
            <div className="well">          <h1>토모 ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>천검백람 (미쿠마류 검술 · 진풍 강화)</strong><br/>
                미쿠마류에 전해져 내려오는 보검. 깃털같이 가볍게 정련된 검은 토모의 실력과 호응해, 수많은 적을 쓸어버리는 회오리를 일으킨다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>전위에서 날렵한 참격을 가하고 적을 물리치는 검술소녀.<br/>
                    유니온 버스트로 자신의 공격력과 행동속도를 상승시키고 다른 공격 스킬의 잔멸 능력을 극한까지 높여 적들을 압도한다.                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】미쿠마류 오의 · 아수라</strong><br/>
                    전방의 적 하나에게 물리 (대) 데미지
자신의 물리 공격력을 (특대) 증가
행동 속도 (중) 증가                    </li>
                    <p/>
                    <li><strong>【skill 1】미쿠마류 검술 · 진풍 +</strong><br/>
                    범위 내 적 전체에게 물리 (중) 데미지
범위 내 적의 수에 따라 데미지 추가                    </li>
                    <p/>
                    <li><strong>【skill 2】미쿠마류 검술 · 제비베기</strong><br/>
                    전방의 적 하나에게 물리 (중) 데미지
자신의 TP (소) 회복                    </li>
                    <p/>
                    <li><strong>【EX】기맥호응 · 파동의형 +</strong><br/>
                    전투 시작 시 자신의 물리 공격력 (대) 증가
                    </li>
                </ul>
</div>


<img src={newLocal_1} alt="redive" className="character" />
            <div className="well">            <h1>토모(매지컬) ⭐⭐⭐⭐⭐</h1>

            <h2>전용장비 ⚔️</h2>
                <p><strong>매지컬 샤이니 레이피어 (샤이니 블레이드 강화)</strong><br/>
                마법 검사 샤이니 ★ 토모가 사용하는 마법의 검. 사랑과 희망의 힘을 담음으로써 어떤 사악한 적도 분쇄하는 강력한 일격을 사용할 수 있다.                </p>

            <h2>소개</h2>
                <p>
                    <strong>【물리】</strong>중열에서 정의의 힘을 마법에 실어 싸우는 마법 검사.<br/>
                    자신의 물리 공격력을 마법 공격력에 더하는 마법 소녀의 힘과 꾸준한 노력으로 획득한 검술로 화려한 마법 공격을 날린다.
                </p>

            <h2>스킬</h2>
                <ul>
                    <li><strong>【UB】샤이니 아쿠아 스트림</strong><br/>
                    자신의 물리 / 마법 공격력을 합산한 공격력에 비례하여 전방의 적 하나에게 마법 (특대) 데미지                    </li>
                    <p/>
                    <li><strong>【skill 1】샤이니 블레이드 +</strong><br/>
                    짧은 시간동안 자신의 물리 공격력 (대) 증가
짧은 시간동안 자신의 마법 크리티컬 (특대) 증가
자신의 물리 / 마법 공격력을 합산한 공격력에 비례하여 전방의 적 하나에게 마법 (특대) 데미지                    </li>
                    <p/>
                    <li><strong>【skill 2】샤이니 아쿠아</strong><br/>
                    자신의 물리공격력 (중) 증가
자신의 행동속도, 마법 크리티컬 (대) 증가                    </li>
                    <p/>
                    <li><strong>【EX】샤이니 에티튜드 +</strong><br/>
                    전투 시작 시 자신의 물리공격력 (대) 증가
                    </li>
                </ul>
</div>


        </div>
    )
}