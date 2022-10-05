import './App.css';

// HTML에서 CSS 사용할 때 class 속성,
// JSX에서는 className 속성을 설정
function App() {
    const name = "리액트";
    return <div className="react">{name}</div>;
  }
  
  export default App;