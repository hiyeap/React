import { useState } from "react";
import Info from "./Info5";

/* 뒷정리하기
useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며
두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 다름
컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면
useEffect에서 뒷정리(cleanup) 함수를 반환해주어야 함
*/

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
