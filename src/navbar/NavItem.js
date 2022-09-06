import React from 'react';

const NavItem = ({ item }) => {
  return (
    <li className='nav-item'>
      <a href={item.url} className='nav-link'>
        {item.name}
      </a>
    </li>
  );
};

export default NavItem;
