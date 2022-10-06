import Say from './Say';

/* 배열 비구조화 할당
const array = [1,2];
const one = array[0];
const two = array[1];
-->
const array = [1,2];
const [one,two] = array;
*/

// useState 사용하기
const App = ()=>{
  return <Say />;
};

export default App;
