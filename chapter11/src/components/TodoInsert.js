import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

/* 새로운 항목을 입력하고 추가할 수 있음
state를 통해 인풋의 상태를 관리
*/

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킴
      // 이를 방지하기 위해 e.preventDefault() 함수를 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  /* onSubmit 대신에 onClick을 사용하여 다음과 같이 할 수 있음
  차이- onSubmit은 본문에서 Enter 눌렀을 때도 발생,
  onCick은 onKeyPress 이벤트로 Enter를 감지하는 로직 추가로 릴요
  const onClick = useCallback(() => {
    onInsert(value);
    setValue('');
  }, [onInsert, value]);
  */

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
