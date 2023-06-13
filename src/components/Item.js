import React, {useState} from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false)

  return (
    <li className={isAdded ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setIsAdded(!isAdded)}>Add to Cart</button>
    </li>
  );
}

export default Item;
