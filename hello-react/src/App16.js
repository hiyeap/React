import MyComponent from "./MyComponent5";

// 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때는 propType를 사용
// PropTypes의 종류
// array, arrayOf, bool, func, number, object, string, symbol
// node, instanceOf, oneOf, oneOfType, objectOf, shape, any ...

const App = () => {
  return (
    <MyComponent name={"예나"} favoriteNumber={1}>
      리액트
    </MyComponent>
  );
};

export default App;
