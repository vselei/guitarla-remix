import { Link, useLocation } from '@remix-run/react';

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link className={location.pathname === '/' ? 'active' : ''} to="/">
        Home
      </Link>
      <Link
        className={location.pathname === '/about-us' ? 'active' : ''}
        to="/about-us"
      >
        Sobre Nós
      </Link>
      <Link
        className={location.pathname === '/store' ? 'active' : ''}
        to="/store"
      >
        Loja
      </Link>
      <Link
        className={location.pathname === '/post' ? 'active' : ''}
        to="/post"
      >
        Blog
      </Link>
    </nav>
  );
};

export default Nav;
