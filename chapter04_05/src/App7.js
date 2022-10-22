import EventPractice from "./EventPractice7";

/* Property Initializer Syntax를 사용한 메서드 작성
원래는 constructor에서 메서드 바인딩을 해야함
더 간단한 방법 => 바벨의 transform-class-properties 문법
사용하여 화살표 함수 형태로 메서드를 정의
*/

function App() {
  return (
<EventPractice />
  );
}

export default App;
