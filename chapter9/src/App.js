import { Component } from "react";
import StyledComponent from './StyledComponenet2';

/* styled-components 사용하면 자바스크립트 파일 하나에
스타일까지 작성할 수 있으므로 .css/.scss 확장자 파일을
따로 만들지 않아도 된다
*/

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />;
      </div>
    );
  }
}

export default App;
