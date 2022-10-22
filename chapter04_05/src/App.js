import { Component } from "react";
import ScrollBox from "./ScrollBox2";
/* 
scrollTop : 세로 스크롤바 위치(0~350)
scrollHeight : 스크롤이 있는 박스 안의 div 높이(650)
clientHeight : 스크롤이 있는 박스의 높이(300)
*/
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
