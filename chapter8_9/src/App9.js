import Info from "./Info7";

/* 인풋 상태 관리하기
기존) 인풋이 여러개여서 useState를 여러 번 사용
useReducer) 클래스형 컴포넌트에서 input태그에 name값을 할당하고
e.target.name을 참조하여 setState 하는 것과 유사
*/

const App = () => {
  return <Info />
};

export default App;
