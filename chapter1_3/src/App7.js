// 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 {}로 감싸기
function App() {
  const name = "리액트";
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜표기법으로 작성
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px", // font-size -> fontSize
    fontWeight: "bold", // font-weight -> fontWeight
    padding: 16,  // 단위를 생략하면 px로 지정
  };
  return <div style={style}>{name}</div>;
}

export default App;
