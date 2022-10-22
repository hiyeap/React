import {Component} from 'react';
import IterationSample from './IterationSample3';

/* 유동적인 데이터 렌더링
초기 상태 설정하기(지금) -> 데이터 추가 기능 구현하기 -> 데이터 제거 기능 구현하기

useState를 사용하여 상태 설정
데이터 배열, input, id
*/
class App extends Component {
  render(){
    return <IterationSample/>
  }
}

export default App;
