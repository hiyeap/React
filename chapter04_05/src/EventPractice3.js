import { Component } from "react";

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={
            (e)=>{ /* 값이 바뀔때마다 바뀐 값을 콘솔에 출력 */
                console.log(e.target.value);
            }
          }
        ></input>
      </div>
    );
  }
}

export default EventPractice;
