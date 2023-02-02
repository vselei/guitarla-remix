import { Outlet } from '@remix-run/react';

import styles from '~/styles/blog.css';

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
];

const Blog = () => {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
};

export default Blog;
