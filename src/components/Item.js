import React, {useState} from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false)

  const buttonHandler = !isAdded ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={isAdded ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonHandler} onClick={() => setIsAdded(!isAdded)}>
        {buttonHandler}
      </button>
    </li>
  );
}

export default Item;
