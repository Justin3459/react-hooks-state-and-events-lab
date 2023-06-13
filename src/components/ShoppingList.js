import React, {useState}from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [setCat, isSetCat] = useState("All")

  const handleSetCat = (e) =>{isSetCat(e.target.value)}

  const displayCat = items.filter((item) => {
    if(setCat === "All"){
      return setCat
    }
    else{
      return item.category === setCat
    }
  
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSetCat}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayCat.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
