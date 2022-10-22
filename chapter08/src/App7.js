import { useState } from "react";
import Info from "./Info6";

/* 뒷정리하기2
렌더링될 때마다 뒷정리 함수가 계속 나타나는 것이 아니라
오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면
useEffect 함수의 두 번째 파라미터에 빈 배열 넣기
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
