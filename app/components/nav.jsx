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
        className={location.pathname === '/guitars' ? 'active' : ''}
        to="/guitars"
      >
        Loja
      </Link>
      <Link
        className={location.pathname === '/posts' ? 'active' : ''}
        to="/posts"
      >
        Blog
      </Link>
    </nav>
  );
};

export default Nav;
