// JSX 내부의 자바스크립트 표현식에서는 if문을 사용할 수 없다.
function App() {
  const name = "리액트";
  return (
    <>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </>
  );
}

/* AND(&&) 연산자를 사용한 조건부 렌더링
null을 렌더링하면 아무것도 보여주지 않는다

function App() {
  const name = "뤼액트";
  return (
    <>
      {name === "리액트" && <h1>리액트입니다.</h1>}
    </>
  );
}
*/

export default App;
