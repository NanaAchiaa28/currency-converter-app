import React from 'react';

const AmountInput = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Amount</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Enter amount"
      />
    </div>
  );
};

export default AmountInput;
