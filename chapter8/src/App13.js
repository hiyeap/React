import Average from "./Average4";

/* useRef
함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 함

Average에서 등록을 눌렀을 때 포커스가 
인풋 쪽으로 넘어가도록 설계
useRef를 통해 ref를 설정하면 useRef를 통해 만든 
객체 안의 current 값이 실제 엘리먼트를 가리킴
*/

const App = () => {
  return <Average />
};

export default App;
