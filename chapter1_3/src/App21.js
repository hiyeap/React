import Counter from './Counter4';

// state 객체 안에 여러 값이 있을 때(number, fixedNumber)
// this.setState를 두 번 사용한다고 해서 state 값이 바로 바뀌지 않음
// -> this.setState에 prevState를 사용 

const App = () => {
  return (
    <Counter />
  );
};

export default App;
