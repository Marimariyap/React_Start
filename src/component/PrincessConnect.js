import { Link } from "react-router-dom";

export default function PrincessConnect() {
    return(
        <div className="container">

          <div className="princess">
            <img src="img/Redive/Re_Dive_back.jpg" alt="redive"/>
            <h1>프린세스 커넥스 Re:Dive</h1>
          </div>

          <h2>재화</h2>
          <p>
            2022-09-15 쥬얼 110,000<br/>
            2023-01-05 쥬얼 109,770
          </p>

          <h2>진행 상황</h2>
          <p>NORMAL ★★★ 732/816<br/> HARD ★★★ 149/150<br/> VERY HARD ★★★ 35/36<br/></p>
          <ul>
            <li>총 캐릭터 전투력 : 2,727,446</li>
            <li>배틀 아레나 순위 : 최고 랭크 1위, 현재 랭크 393위</li>
            <li>프린세스 아레나 순위 : 최고 랭크 139위, 현재 랭크 1259위</li>
            <li>오픈 횟수 : 캐릭터 149 스토리 2273</li>
            <li>루나의 탑 : 도달 층 600 EX퀘스트 31/39</li>
            <li>클랜전 : 최고 랭크 399위 최고 점수 12,104,455,936점</li>
          </ul>
    
          <h2><Link to="/redive">🖱️ 2022년 종합 정보</Link></h2>
          <h2><Link to="/redive character">🖱️ 캐릭터 목록</Link></h2>
        </div>
    )
}