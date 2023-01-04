import { Link } from "react-router-dom";

export default function Game() {
    return(
        <div className="container">
           <h2>재화</h2>
          <p>
            2022-09-15 쥬얼110,000
          </p>

          <h2>진행 상황</h2>
          <p>NORMAL ★★★ 690/732<br /> HARD ★★★ 146/146<br /> VERY HARD ★★★ 31/31<br /></p>
          <ul>
            <li>배틀 아레나 순위 : 최고 랭크 1위, 현재 랭크 393위</li>
            <li>프린세스 아레나 순위 : 최고 랭크 139위, 현재 랭크 293위</li>
            <li>오픈 횟수 : 캐릭터 136 스토리 2100</li>
            <li>루나의 탑 : 도달 층 570 EX퀘스트 24/36</li>
            <li>클랜전 : 최고 랭크 399위 최고 점수 12,104,455,936점</li>
          </ul>
    
          <h2><Link to="/redive">🖱️ 2022년 종합 정보</Link></h2>
        </div>
    )
}