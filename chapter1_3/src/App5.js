// react에서 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않지만,
// 예외적으로 falsy(거짓같은 값)한 값인 0은 화면에 나타난다.
function App5() {
  const number = 0;
  return number && <div>내용</div>;
}

export default App5;
