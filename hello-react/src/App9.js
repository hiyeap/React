import "./App.css";

// HTML에서 닫지 않아도 작동하는 태그는 JSX에서는 닫아야만 정상 작동
// 태그 사이에 별도의 내용이 들어가지 않는 경우에는
// self-closing 태그: 태그를 선언하면서 동시에 닫을 수 있음
function App() {
  const name = "리액트";
  return (
    <>
      <div className="react">{name}</div>
      <input />
    </>
  );
}

export default App;
