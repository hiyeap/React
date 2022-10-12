import Average from "./Average2";

/* useMemo2
함수 컴포넌트 내부에서 발생하는 연산을 최적화 O

- useMemo 적용 후 : 값이 바뀌었을 때만 연산을 실행하고,
원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
*/

const App = () => {
  return <Average />
};

export default App;
