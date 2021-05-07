import React from 'react';

const Quantity = ({ changeField, name }) => {
  const inputQuantity = (e) => {
    changeField(e.target.value);
  }
  return (
    <div className="selectProd-quantity">
      <input name={name} type="number" onChange={inputQuantity} placeholder="Quantité" className="selectProd-quantity-input"/>
    </div>
  );
};

export default Quantity;
