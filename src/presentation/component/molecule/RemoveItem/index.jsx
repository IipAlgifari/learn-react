import React, { useState } from 'react';

function RemoveItem() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Produk A' },
    { id: 2, name: 'Produk B' },
    { id: 3, name: 'Produk C' },
  ]);

  const removeProduct = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Keranjang Belanja</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => removeProduct(product.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RemoveItem;
