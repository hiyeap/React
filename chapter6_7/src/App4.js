import {Component} from 'react';
import IterationSample from './IterationSample4';

/* 유동적인 데이터 렌더링
초기 상태 설정하기 -> 데이터 추가 기능 구현하기(지금) -> 데이터 제거 기능 구현하기

배열에 새 항목을 추가할 때 push(기존 배열 자체를 변경)가 아니라 concat(새로운 배열 생성) 사용
리액트에서 상태 업데이트시 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야함
-> 불변성 유지
*/
class App extends Component {
  render(){
    return <IterationSample/>
  }
}

export default App;
