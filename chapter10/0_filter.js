/* filter 함수는 기존 배열을 그대로 둔 상태에서
특정 조건을 만족하는 원소들만 따로 추출하여 새로운 배열을 만듦
filter 함수에는 조건을 확인해주는 함수를 파라미터로 넣어야함
파라미터로 넣는 함수는 true or false를 반환해야 하며,
true를 반환할 때만 새로운 배열에 포함!
*/

const array = [1,2,3,4,5,6,7,8,9,10];
const biggerThanFive = array.filter(number=>number>5);
console.log(biggerThanFive);

// 결과: [6,7,8,9,10]