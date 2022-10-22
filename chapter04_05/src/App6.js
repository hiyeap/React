import EventPractice from "./EventPractice6";

/* 임의 메서드 만들기
함수가 호출될 때 this는 호출부에 따라 결정되므로 클래스의 임의 메서드가
특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어진다!
따라서 임의 메서드가 이벤트로 등록되어도 this가 컴포넌트 자신으로 가리키기 위하여
메서드를 this와 바인딩(binding)하는 작업 필요!!!!!
*/

function App() {
  return (
<EventPractice />
  );
}

export default App;
