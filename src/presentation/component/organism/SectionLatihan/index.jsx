import React, { useState } from 'react';

const SectionLatihan = () => {
  // Menggunakan state untuk menyimpan nilai input
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  
  // Menyertakan parameter a dan b pada fungsi
  const calculate = (a, b) => {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b; // Memperbaiki operasi perkalian
    const divide = a / b;
    
    // Melakukan sesuatu dengan hasil perhitungan (misalnya, mencetak ke konsol)
    console.log('Add:', add);
    console.log('Subtract:', subtract);
    console.log('Multiply:', multiply);
    console.log('Divide:', divide);
  };

  return (
    <div className='container'>
      <p>Calculate</p>
      {/* Menyertakan input element dengan value dan onChange */}
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br/>
      <input 
      type="number"
      value={inputValue1}
      onChange={(e) => setInputValue1(e.target.value)}
      />
      
      {/* Menambahkan tombol untuk menghitung */}
      <button onClick={() => calculate(Number(inputValue),Number(inputValue1) )}>
        Calculate
      </button>
      
    </div>
  );
};

export default SectionLatihan;
