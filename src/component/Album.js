import "./css/Album.css";

export default function Album() {
  const sample = [
    "img/Album/1주년.jpg",
    "img/Album/2주년.jpg",
    "img/Album/거제도_출발.jpg",
    "img/Album/경주여행.jpg",
    "img/Album/광안리_테라스.jpg",
    "img/Album/놀이동산.jpg",
    "img/Album/스카이캡슐.jpg",
    "img/Album/염색한날.jpg",
    "img/Album/오즈의마법사.jpg",
    "img/Album/일상_서면길거리.jpg",
    "img/Album/일상_이쁜척.jpg",
    "img/Album/일상_카페1.jpg",
    "img/Album/일상_카페2.jpg",
    "img/Album/제주도_나홀로나무.jpg",
    "img/Album/제주도_목장.jpg",
    "img/Album/제주도_선녀와나무꾼.jpg",
    "img/Album/제주도_집가는길.jpg",
    "img/Album/제주도_해안도로.jpg",
    "img/Album/타임캡슐.jpg",
    "img/Album/핑크뮬리_괴롭힘.jpg",
    "img/Album/핑크뮬리.jpg",
    "img/Album/할로윈.jpg",
    "img/Album/흰여울마을_카페.jpg",
    "img/Album/일상_식당.jpg",
    "img/Album/일상_개구리.jpg",
    "img/Album/일상_카페4.jpg",
    "img/Album/새해.jpg",
    "img/Album/새해전날.jpg",
    "img/Album/아이스링크.jpg",
    "img/Album/일상_카페3.jpg",
    "img/Album/일상_트리.jpg",
    "img/Album/일상_노래방.jpg",
    "img/Album/일상_온천천.jpg",
  ];
  return (
    <div
      className="wrap"
      style={{
        backgroundImage: `url("img/Main/Album_back.jpg")`,
      }}
    >
      {sample.map((v, i) => {
        return (
          <div className="items" key={i}>
            <div className="figure">
              <img src={v} alt={v} className="figureimg" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
