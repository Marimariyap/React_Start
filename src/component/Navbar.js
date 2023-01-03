import { Link } from "react-router-dom";

export default function Navbar() {
    return (
            <div>

                <nav id="navbar">
                    <div className="logo">
                        <Link to="/"><img src="img/KakaoTalk_20221122_003936497.jpg" alt="user" /></Link>
                    </div>

                    <ul>
                    
                        <li><Link to="/main">홈</Link></li>
                        <li><Link to="/profile">프로필</Link></li>

                        <ul>게임 세상
                            <li><Link to="/game-world">프린세스 커넥스 Re:Dive</Link></li>
                        </ul>

                        <ul>내 컨텐츠
                            <li><Link to='/countdown'>새해 카운트 다운</Link></li>
                            <li><Link to='my content\exchange-rate\index.html'>환율 계산기</Link></li>
                            <li><Link to='my content\relaxer-app\index.html'>명상 시간</Link></li>
                            <li><Link to='my content\form-valiodator\index.html'>양식 확인</Link></li>
                            <li><Link to='my content\typing-game-make\index.html'>타자 연습</Link></li>
                            <li><Link to='my content\tetris\index.html'>테트리스</Link></li>
                            <li><Link to='my content\puzzle\index.html'>퍼즐</Link></li>
                            <li><Link to='my content\snake-game\index.html'>뱀</Link></li>
                            <li><Link to='my content\lotto-box\index.html'>로또 추첨기</Link></li>
                            <li><Link to='my content\dom-array-methods\index.html'>개인재산 현황</Link></li>
                        </ul>

                    </ul>
                </nav>
            </div>
    )
}