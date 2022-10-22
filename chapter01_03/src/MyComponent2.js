const MyComponent2 = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

// name 값이 지정되지 않았을 때 보여줄 기본값 설정
MyComponent2.defaultProps = {
  name: "기본 이름",
};

export default MyComponent2;
