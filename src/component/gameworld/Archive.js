
export default function Archive() {
    const sour= "https://gall.dcinside.com/mgallery/board/view/?id=projectmx&no=3150575";

    return(
        <div className="container">
            <div className="bluearc">
                <h1>블루 아카이브</h1>
            </div>
            <div className= 'gameImg'>
                <h2>2023년 가챠 미래시</h2>
                <p><img src="img/Blue/Blue_Get.jpg" alt="archive"/></p>

                <h2>2023년 이벤트 스토리 및 업데이트 일정</h2>
                <p><img src="img/Blue/Blue_Event.jpg" alt="redive"/></p>

                <button className="sources" onClick={()=>{window.open(sour)}}>출처 : 블루 아카이브 갤러리</button>
          </div>
        </div>
    )
}