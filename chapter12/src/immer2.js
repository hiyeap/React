import produce from "immer";

/* 좀 더 복잡한 데이터를 불변성을 유지하면서 업데이트 */ 

const originalState = [
  {
    id: 1,
    todo: "전개 연산자의 배열 내장 함수로 불변성 유지하기",
    checked: true,
  },
  {
    id: 2,
    todo: "immer로 불변성 유지하기",
    checked: false,
  },
];

const nextState = produce(originalState, (draft) => {
  // id가 2인 항목의 checked 값을 true로 설정
  const todo = draft.find((t) => t.id === 2); // id로 항목 찾기
  todo.checked = true;
  // 혹은 draft[1].checked = true;

  // 배열에 새로운 데이터 추가
  draft.push({
    id: 3,
    todo: "일정 관리 앱에 immer 적용하기",
    checked: false,
  });

  // id=1인 항목을 제거하기
  draft.splice(
    draft.findIndex((t) => t.id === 1),
    1
  );
});
