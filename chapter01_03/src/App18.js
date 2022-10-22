import Counter from './Counter';

// state는 컴포넌트 내부에서 바뀔 수 있는 값
// props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값
// 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용 가능(변경은 부모에서)

function App18() {
  return (
    <Counter />
  );
};

export default App18;
