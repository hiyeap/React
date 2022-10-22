// 해당 값이 undefined일때 or 연산자를 사용하여 오류 방지 가능
function App6() {
  const name = undefined;
  return <div>{name||'리액트'}</div>;
}

export default App6;
