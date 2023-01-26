import { useEffect, useState } from "react";
import "./css/Login.css";

const User = {
  email: "react3215@naver.com",
  pw: "react3215@@",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickconfirmBut = () => {
    if (email === User.email && pw === User.pw) {
      alert("환영합니다 마리마리얍 !");
    } else {
      alert("누구세요?");
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className="page">
      <div className="title">
        <h3>
          <p>
            <b>정보를 입력 해주세요!</b>
          </p>
        </h3>
      </div>

      <div className="form_control">
        <label htmlFor="email">이메일</label>
        <input
          value={email}
          onChange={handleEmail}
          type="text"
          id="email"
          className="form-input"
          placeholder="Enter email"
        />
        <div className="error">
          {!emailValid && email.length > 0 && (
            <div>이메일이 유효하지 않아요!</div>
          )}
        </div>

        <label style={{ marginTop: "20px" }} htmlFor="password">
          비밀번호
        </label>
        <input
          value={pw}
          onChange={handlePw}
          type="password"
          id="password"
          className="form-input"
          placeholder="Enter password"
        />
        <div className="error">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요!</div>
          )}
        </div>
      </div>

      <div>
        <button
          onClick={onClickconfirmBut}
          disabled={notAllow}
          type="submit"
          className="loginbut"
        >
          확인!
        </button>
      </div>
    </div>
  );
}
