import {Component} from 'react';
import IterationSample from './IterationSample2';

/* 데이터 배열을 컴포넌트 배열로 변환하기 */
/* key 설정
key는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용
map함수에서 고유번호인 index 사용
*/
class App extends Component {
  render(){
    return <IterationSample/>
  }
}

export default App;
