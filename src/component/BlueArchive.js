import { Link } from "react-router-dom";

export default function BlueArchive() {
    return(
        <div className="container">
            
            <img src="img/Blue/Blue_back.jpg" alt="redive" className="imge" />
            <div className="blue">
              <h1> 블루 아카이브</h1>
            </div>

            <h2>재화</h2>
          <p>
            2023-01-05 청휘석 5,337
          </p>

          <h2>진행 상황</h2>
          
          <ul>
            <li>전술 대회 순위 : 최고 순위 273위, 현재 순위 1056위</li>
            <li>현재 해금 학생수 : 79명</li>
          </ul>
    
          <h2><Link to="/archive">🖱️ 2023년 종합 정보</Link></h2>
        </div>
    )
}