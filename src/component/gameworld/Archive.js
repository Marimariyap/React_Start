import { Link } from "react-router-dom";

export default function Archive() {
    return(
        <div className="container">
            <div className="bluearc">
                <h1>블루 아카이브</h1>
            </div>
            <div className= 'gameImg'>
                <h2>2023년 가챠 미래시</h2>
                <p><img src="img/Blue_Get.jpg" alt="archive"/></p>

                <h2>2023년 이벤트 스토리 및 업데이트 일정</h2>
                <p><img src="img/Blue_Event.jpg" alt="redive"/></p>

                <div className="sources"><p>출처 : <Link to="https://gall.dcinside.com/mgallery/board/view/?id=projectmx&no=3150575">블루 아카이브 갤러리</Link></p></div>
          </div>
        </div>
    )
}