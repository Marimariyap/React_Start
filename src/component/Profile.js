import "./css/Profile.css";

export default function Profile() {
    return(
        <div className="container">
            <div className="big_Box" style={{ backgroundImage: `url("img/Main/KakaoTalk_20230126_163408497.jpg")`}}>
                <div className="pro_Box">
                    <div className="profile">
                        <h1>나의 프로필</h1>
                        <p>마리마리얍</p>
                    </div>
            
                        <div className="img">
                            <img src="img/Main/KakaoTalk_20221122_003936497.jpg" alt="user" />        
                        </div>
                    <div className="im">집가고 싶다</div>
                </div>    
            </div>
        </div>
    )
}