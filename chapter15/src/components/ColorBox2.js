import {ColorConsumer} from "../contexts/color2";

// Consumber 사이에 중괄호로 그 안에 함수 넣기
// Function as a child(Render Props)라고 함!
// 컴포넌트의 children이 있어야 할 자리에 JSX/문자열이 아닌 함수 전달

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
