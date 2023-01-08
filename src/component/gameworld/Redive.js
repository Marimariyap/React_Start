import { Link } from "react-router-dom";

export default function Redive() {
    return(
        <div className="container">

            <div className="princess">
                <h1>프린세스 커넥스 Re:Dive</h1>
            </div>

            <div className= 'gameImg'>
                <h2>2022년 가챠 미래시</h2>
                <p><img src="img/Redive/Re_Dive_Get.jpg" alt="redive"/></p>

                <h2>2022년 해금 지역 관련 정보</h2>
                <p><img src="img/Redive/Re_Dive_VeryHard.jpg" alt="redive"/></p>

                <h2>2022년 이벤트 스토리</h2>
                <p><img src="img/Redive/Re_Dive_Story.jpg" alt="redive"/></p>

                <h2>2022년 전용장비</h2>
                <p><img src="img/Redive/Re_Dive_Weapon.jpg" alt="redive"/></p>

                <h2>2022년 코인상점</h2>
                <p><img src="img/Redive/Re_Dive_Coin.jpg" alt="redive"/></p>

                <div className="sources"><p>출처 : <Link to="https://www.fmkorea.com/4773880784">에펨코리아</Link></p></div>
          </div>
        </div>
    )
}