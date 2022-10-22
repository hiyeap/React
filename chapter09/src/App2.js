import { Component } from "react";
import SassComponent from "./SassComponent";

/* Sass(Syntactically Awesome Style Sheets) 사용하기
CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 해주고,
스타일 코드의 재활용성 높여주고,
코드의 가독성을 놏여 유지보수 쉽게 해준다.
확장자(.scss / .sass)
*/

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />;
      </div>
    );
  }
}

export default App;
