import { Meta, Links, Outlet } from '@remix-run/react';

import styles from './styles/index.css';

export const meta = () => ({
  charset: 'utf-8',
  title: 'GuitarLA Remix',
  viewport: 'width=device-width,initial-scale=1'
});

export const links = () => [
  {
    rel: 'stylesheet',
    href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'true'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
  },
  {
    rel: 'stylesheet',
    href: styles
  }
];

const Document = ({ children }) => (
  <html lang="pt-BR">
    <head>
      <Meta />
      <Links />
    </head>
    <body>{children}</body>
  </html>
);

const App = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};

export default App;
