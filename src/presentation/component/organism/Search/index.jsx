import React, { useState } from 'react';
import RemoveItem from 'presentation/component/molecule/RemoveItem';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [products] = useState([
    'Kemeja Putih',
    'Celana Jeans Biru',
    'Sweater Merah',
    'Sepatu Sneaker Hitam',
    'Topi Baseball',
    'Jaket Kulit',
    'Kaus Polos',
    'Rok Panjang',
  ]);

  // Fungsi yang akan memperbarui state input saat pengguna mengetik
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Di sini, kita memfilter dan menampilkan saran berdasarkan nilai yang diketik
    const filteredSuggestions = products.filter((product) =>
      product.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Fungsi untuk menangani pemilihan saran
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div className='container'>
      <RemoveItem/>
      <h1>Pencarian Produk</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Cari produk..."
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
      <h2>Hasil Pencarian:</h2>
      <ul>
        {products
          .filter((product) =>
            product.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((product, index) => (
            <li key={index}>{product}</li>
          ))}
      </ul>
    </div>
  );
}

export default Search;
