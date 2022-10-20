import { Component } from "react";
class Counter2 extends Component {
    // 1. constructor를 정의하여 state의 초깃값을 설정
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  /* 2. constructor 정의 없이 state의 초깃값을 설정
  state = {
    number: 0,
    fixedNumber: 0,
  };
  */

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter2;
