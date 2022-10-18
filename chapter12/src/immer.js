import produce from "immer";

/* immer를 사용하면 불변성 유지가 쉽다 
produce 함수는 두 가지 파라미터를 받고
첫 번째, 수정하고 싶은 상태
두 번째, 상태를 어떻게 업데이트할 지 정의
*/

const nextState = produce(originalState, (draft) => {
  // 바꾸고 싶은 값 바꾸기
  draft.somewhere.deep.inside = 5;
});
