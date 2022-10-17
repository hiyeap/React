import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

/* 각 할 일 항목에 대한 정보를 보여줌
todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI를 보여줌
*/

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

/* 컴포넌트의 props(todo, onRemove, onToggle)가 바뀌지 않았다면
리렌더링 하지 않도록 설정하여 성능 최적화 가능 */
export default React.memo(TodoListItem);
