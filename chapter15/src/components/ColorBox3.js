import {ColorConsumer} from "../contexts/color2";

// ColorBox2.js에서 value조회하는 것을 생략 할 수 있음!
// (객체 비구조화 할당 문법)

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({state}) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
