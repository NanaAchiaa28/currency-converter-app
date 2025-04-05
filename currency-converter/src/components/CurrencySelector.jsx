import React from 'react';

const CurrencySelector = ({ label, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
      >
        {options.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
