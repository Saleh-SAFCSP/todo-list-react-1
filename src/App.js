import './App.css';
import { Navbar, Navbar2 } from './navbar/Navbar';
import { useRef, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
const App = () => {
  const navItems = [
    {
      name: 'home',
      url: '/',
    },
    {
      name: 'about',
      url: '/about',
    },
    {
      name: 'price',
      url: '/price',
    },
    {
      name: 'contact',
      url: '/contact',
    },
  ];
  const appName = 'Todo';

  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    console.log(inputValue);
    const oldList = [...list];
    oldList.push(inputValue);
    setList(oldList);
    setInputValue('');
  };
  return (
    <>
      <Navbar navItems={navItems} appName={appName} />
      <div className='container text-center border p-5'>
        <TodoList list={list} />
        <TodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTodo={addTodo}
        />
      </div>
    </>
  );
};

export default App;

// const [count, setCount] = useState(0);
// const [name, setName] = useState('Saleh');
// const appName = 'Clicker';
// let total = 10;

// const buttonClick = (e) => {
//   // count++
//   total = 20;
//   setCount(5);
//   console.log(total);
//   // count = count +1
// };

// const changeName = (e) => {
//   setName('Ali');
// };

// console.log('Hey from مطبخ');
// <div className='container text-center'>
//   <h1>{count}</h1>
//   <button
//     onClick={buttonClick}
//     type='button'
//     className='btn btn-secondary w-100 mt-5'
//   >
//     Click me
//   </button>
//   <h1>{name}</h1>
//   <button
//     onClick={changeName}
//     type='button'
//     className='btn btn-secondary w-100 mt-5'
//   >
//     Change your name
//   </button>
//   <h1>{total}</h1>
