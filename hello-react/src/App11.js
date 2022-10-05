import { Component } from "react";

// 클래스형 컴포넌트
// state 기능, 라이프 사이클 기능 사용 가능, 임의 메소드 정의 가능
class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}

export default App;
