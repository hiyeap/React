import { Component } from "react";
import SassComponent from "./SassComponent2";

/* utils 함수 분리하기
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
