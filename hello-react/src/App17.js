import MyComponent from "./MyComponent6";

// 클래스형 컴포넌트에서 props 사용하기
// render 함수에서 this.props를 조회

const App = () => {
  return (
    <MyComponent name={"예나"} favoriteNumber={1}>
      리액트
    </MyComponent>
  );
};

export default App;
