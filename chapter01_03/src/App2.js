/* 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로
감싸야 한다. */

import { Fragment } from "react";

/* 1번 예시 (감싸는 요소가 없어서 오류 발생)
function App2() {
  return (
  <h1>리액트 안녕!</h1>
  <h1>잘 작동하니?</h1>
  )
}
*/

/* 2번 예시 (div라는 감싸는 요소가 있어서 정상 작동)
function App2() {
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h1>잘 작동하니?</h1>
    </div>
  );
}
*/

/* 3번 예시 (Fragment라는 감싸는 요소가 있어서 정상 작동)
function App2() {
  return (
    <Fragment>
      <h1>리액트 안녕!</h1>
      <h1>잘 작동하니?</h1>
    </Fragment>
  );
}
*/

// 4번 예시(Fragment는 <>로도 표현 가능)
function App2() {
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h1>잘 작동하니?</h1>
    </>
  );
}


export default App2;
