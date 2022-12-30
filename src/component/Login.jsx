export default function Login() {
    return (
        <div className= "page">
            <div className="title">
            <h3><p><b>계정을 만들어 주세요!</b></p></h3>
            </div>

            <div className="form_control">
                <label htmlFor="email">이메일</label>
                <input type="text" id="email" className="form-input" placeholder="Enter email" />
                <div className="error">이메일이 유효하지 않아요!</div>
            
                <label style={{marginTop:'20px'}} htmlFor="password">비밀번호</label>
                <input type="password" id="password" className="form-input" placeholder="Enter password" />
                <div className="error">영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요!</div>
            </div>
            
            <div><button disabled= {true} type="submit" className="loginbut">확인!</button></div>
        </div>

        
    )
}