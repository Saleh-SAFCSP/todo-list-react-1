import React from 'react';

const TodoList = ({ list }) => {
  return (
    <ul className='list-group'>
      {list.map((item, index) => {
        return (
          <li key={index} className='list-group-item'>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
