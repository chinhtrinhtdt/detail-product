import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './QuantityInput.css'

function QuantityInput() {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <InputGroup className="quantity-input">
      <Button variant="light" onClick={handleDecrease}>-</Button>
      <FormControl value={quantity} readOnly />
      <Button variant="light" onClick={handleIncrease}>+</Button>
    </InputGroup>
  );
}

export default QuantityInput;