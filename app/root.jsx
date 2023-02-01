import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link
} from '@remix-run/react';

import styles from '~/styles/index.css';

import Header from '~/components/header';
import Footer from '~/components/footer';

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
    <body>
      <Header />
      {children}
      <Footer />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

const App = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};

/* Manipulação de erros */
export const CatchBoundary = () => {
  const error = useCatch();
  return (
    <Document>
      <p className="error">
        Erro {error.status} - {error.statusText}
      </p>
      <Link className='link-error' to='/'>Talvez você queira voltar a página principal</Link>
    </Document>
  );
};

export const ErrorBoundary = ({ error }) => {
  return (
    <Document>
      <p className="error">
        Erro {error.status} - {error.statusText}
      </p>
      <Link className='link-error' to='/'>Talvez você queira voltar a página principal</Link>
    </Document>
  );
};

export default App;
