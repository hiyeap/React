const complexObject = ['a', 'b', 'c', 'd', 'e'];

/* 전개 연산자(... 문법)을 사용하여 
객체나 배열 내부의 값을 복사할 때는
얕은 복사(shallow copy)를 함
내부의 값이 완전히 복사되는 것이 아니라
가장 바깥에 있는 값만 복사됨
.objectInside를 사용하면 내부값 복사가능 */
const nextComplexObject = {
  ...complexObject,
  objectInside: {
    ...complexObject.objectInside,
    enabled: false,
  },
};
console.log(complexObject === nextComplexObject); // false
console.log(complexObject.objectInside === nextComplexObject.objectInside); // false
