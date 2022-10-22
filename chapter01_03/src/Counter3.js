import { Component } from "react";
class Counter3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
            this.setState({ number: this.state.number + 1 });
            // this.setState를 두 번 사용한다고 해서 state 값이 바로 바뀌지 않음
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter3;
