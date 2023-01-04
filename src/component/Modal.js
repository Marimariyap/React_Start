

export default function Modal(){
    return (
        <div className="modal-container" id="modal">
        <div className="modal">
          <button className="close-btn" id="close">
            <i className="fa fa-times"></i>
          </button>
          <div className="modal-header">
            <h3>가입하기</h3>
          </div>
          <div className="modal-content">
            <form className="form" id="form">
              <p><b>계정을 만들어 주세요!</b></p>
                <div className="form_control">
                  <label htmlFor="name">사용자 이름</label>
                  <input type="text" id="username" className="form-input" placeholder="Enter username" />
                  <small>Error message</small>
                </div>
                <div className="form_control">
                  <label htmlFor="email">이메일</label>
                  <input type="text" id="email" className="form-input" placeholder="Enter email" />
                  <small>Error message</small>
                </div>
                <div className="form_control">
                  <label htmlFor="password">비밀번호</label>
                  <input type="password" id="password" className="form-input" placeholder="Enter password" />
                  <small>Error message</small>
                </div>
                <div className="form_control">
                  <label htmlFor="password2">비밀번호 다시입력</label>
                  <input type="password" id="password2" className="form-input" placeholder="Enter password again" />
                  <small>Error message</small>
                </div>
                <button type="submit">SubMit</button>
              </form>
            </div>
          </div>
        </div>
    )
}