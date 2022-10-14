import { Component } from "react";
import CSSModule from "./CSSModule2";

/* classnames
CSS 클래스를 조건부로 설정할 때 유용!
여러 클래스를 적용할 때(true인 것만 적용)
*/

class App extends Component {
  render() {
    return (
      <div>
        <CSSModule />;
      </div>
    );
  }
}

export default App;
