import Average from "./Average3";

/* useCallback
useMemo와 비슷하고, 주로 렌더링 성능을 최적화 해야할 때
이 Hook를 사용하면 만들어놨던 함수를 재사용 가능
컴포넌트의 렌더링이 자주 발생하거나 렌더링해야 할 컴포넌트의
개수가 많아지면 최적화 필요
useCallback의 첫 번째 파라미터 : 생성하고 싶은 함수
두 번째 파라미터 : 배열(어떤 값이 바뀌었을 때 함수를 새로 생성하는지 명시)
*/

const App = () => {
  return <Average />
};

export default App;
