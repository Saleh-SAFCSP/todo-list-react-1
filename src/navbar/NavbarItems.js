import NavItem from './NavItem';

const NavbarItems = ({ navItems }) => {
  return (
    <ul className='navbar-nav'>
      {navItems.map((item, index) => {
        return <NavItem key={index} item={item} />;
      })}
    </ul>
  );
};

export default NavbarItems;
