import React, { useRef, useState } from 'react';
import Login from './Login';
import Navbar from './Navbar';

export default function Header() {
  const toggleRef = useRef(null);
  const closeRef = useRef(null);
  const openRef = useRef(null);
  const modalRef = useRef(null);
  const navbarRef = useRef(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeNavbar(e) {
    if (
      isNavbarOpen &&
      e.target !== toggleRef.current &&
      !toggleRef.current.contains(e.target) &&
      e.target !== navbarRef.current &&
      !navbarRef.current.contains(e.target)
    ) {
      setIsNavbarOpen(false);
    }
  }

  return (
    <div className="header">
      <button
        id="toggle"
        className="toggle"
        ref={toggleRef}
        onClick={() => {
          setIsNavbarOpen(!isNavbarOpen);
        }}
      >
        <i className="fa fa-bars fa-2x"></i>
      </button>
      <h1>마리마리얍의 공간</h1>
      <p>지금은 공사중에요! 나중에 다시오세요!</p>
      <div className='but'>
      <button
        className="cta-btn"
        id="open"
        ref={openRef}
        onClick={() => {
          setIsModalOpen(true);
          setIsNavbarOpen(false);
        }}
      >
        로그인!
      </button><br />
      {isNavbarOpen && (
        <nav id="navbar" ref={navbarRef}>
          {<Navbar />}
        </nav>
      )}
      {isModalOpen && (
        <div id="modal" ref={modalRef}>
          <button ref={closeRef} onClick={() => setIsModalOpen(false)}>
            닫기
          </button>
          {<Login />}
        </div>
      )}
      </div>
    </div>
  );
}