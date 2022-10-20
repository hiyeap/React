/* const MyComponent4 = (props) => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children} 입니다.
    </div>
  );
}; */

const MyComponent4 = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children} 입니다.
    </div>
  );
};

MyComponent4.defaultProps = {
  name: "기본 이름",
};

export default MyComponent4;
