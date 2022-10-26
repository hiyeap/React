import ColorContext from "../contexts/color";

// Consumber 사이에 중괄호로 그 안에 함수 넣기
// Function as a child(Render Props)라고 함!
// 컴포넌트의 children이 있어야 할 자리에 JSX/문자열이 아닌 함수 전달

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{ width: "64px", height: "64px", background: value.color }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
