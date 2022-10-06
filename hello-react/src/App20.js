import Counter from './Counter3';

// state 객체 안에 여러 값이 있을 때(number, fixedNumber)
// this.setState를 두 번 사용한다고 해서 state 값이 바로 바뀌지 않음

const App = () => {
  return (
    <Counter />
  );
};

export default App;
