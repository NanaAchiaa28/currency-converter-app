import React from 'react';

const ConversionResult = ({ amount, from, to, result }) => {
  return (
    <div className="mt-4 p-4 bg-green-100 rounded">
      <p className="text-lg font-semibold">
        {amount} {from} = {result} {to}
      </p>
    </div>
  );
};

export default ConversionResult;
