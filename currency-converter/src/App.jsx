import React, { useState, useEffect } from 'react';
import CurrencySelector from './components/CurrencySelector';
import AmountInput from './components/AmountInput';
import ConversionResult from './components/ConversionResult';
import axios from 'axios';

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const fetchCurrencies = async () => {
    try {
      const response = await axios.get('https://v6.exchangerate-api.com/v6/541d9d4c5998ac4519ade5ad/latest/USD');
      setCurrencies(Object.keys(response.data.conversion_rates));
    } catch (err) {
      setError('Failed to fetch currencies');
    }
  };

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/541d9d4c5998ac4519ade5ad/latest/${fromCurrency}`
      );
      const rate = response.data.conversion_rates[toCurrency];
      setResult((amount * rate).toFixed(2));
    } catch (err) {
      setError('Conversion failed');
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency && amount) {
      convertCurrency();
    }
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Currency Converter</h1>

      <CurrencySelector
        label="From Currency"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        options={currencies}
      />
      <CurrencySelector
        label="To Currency"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        options={currencies}
      />
      <AmountInput value={amount} onChange={(e) => setAmount(e.target.value)} />

      {error && <p className="text-red-500 text-center">{error}</p>}

      {result && (
        <ConversionResult amount={amount} from={fromCurrency} to={toCurrency} result={result} />
      )}
    </div>
  );
};

export default App;
