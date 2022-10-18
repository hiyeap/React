/* 전개연산자, 내장함수를 사용하면
 객체 복사, 새로운 값 덮어쓰기 가능
 객체의 구조가 깊어지면, 불변성을 유지하면서
 업데이트 하기 힘듦 */

const object = {
  somewhere: {
    deep: {
      inside: 3,
      array: [1, 2, 3, 4],
    },
    bar: 2,
  },
  foo: 1,
};

// somewhere.deep.inside 값을 4로 바꾸기
let nextObject = {
  ...object,
  somewhere: {
    ...object.somewhere,
    deep: {
      ...object.somewhere.deep,
      inside: 4,
    },
  },
};

// somewhere.deep.array에 5 추가하기
let nextObject2 = {
  ...object,
  somewhere: {
    ...object.somewhere,
    deep: {
      ...object.somewhere.deep,
      array: object.somewhere.deep.array.concat(5),
    },
  },
};


