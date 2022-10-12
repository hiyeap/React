import Average from "./Average";

/* useMemo
함수 컴포넌트 내부에서 발생하는 연산을 최적화 O

- useMemo 적용 전! : 숫자 등록뿐만 아니라 
인풋 내용 수정될 때도 getAverage 함수 호출.
*/

const App = () => {
  return <Average />
};

export default App;
