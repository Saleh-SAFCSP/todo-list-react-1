import React from 'react';

const TodoForm = ({ inputValue, setInputValue, addTodo }) => {
  return (
    <div className='input-group mt-5'>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type='text'
        className='form-control'
        placeholder='Todo name'
      />
      <button onClick={addTodo} className='btn btn-secondary' type='button'>
        Add todo
      </button>
    </div>
  );
};

export default TodoForm;
