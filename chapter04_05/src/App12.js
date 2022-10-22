import { Component } from "react";
import ValidationSample from "./ValidationSample2";
/* 리액트 컴포넌트에서 state 사용
ValidationSample 컴포넌트 만들기 -> input에 ref 달기 -> 버튼을 누를 때마다 input에 포커스 주기
*/
class App extends Component {
  render() {
    return <ValidationSample />;
  }
}

export default App;
