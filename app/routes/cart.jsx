import styles from '~/styles/cart.css';

export const meta = () => ({
  title: 'GuitarLA | Carrinho',
  description: 'Venda de guitarras e blog. Carrinho de compras'
});

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
];

const Cart = () => {
  return (
    <main className="container">
      <h1 className="heading">Carrinho de Compras</h1>
      <div className="content">
        <div className="cart">
          <h2>Itens</h2>
        </div>
        <aside className="summary">
          <h3>Resumo do Pedido</h3>
          <p>Total a pagar: $</p>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
