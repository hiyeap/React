function App1() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}

/* 이렇게 작성된 코드는 다음과 같이 변환
function App(){
  return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
}
*/

export default App1;
