import { Component } from "react";
import CSSModule from "./CSSModule3";

/* Sass + CSS Module
파일이름 + .module.scss

CSS Module에서 글로벌 클래스 정의 :global
CSS Module 아닌 일반 .css/.scss 파일에서는 :local
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
