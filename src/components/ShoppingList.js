import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, doSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedFood, setSearchedFood] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setSearchedFood(event.target.value.toLowerCase())
  }

  function onItemFormSubmit(foodData) {
    doSubmit(foodData)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => {
    if (searchedFood === '') return true;
    return item.name.toLowerCase().includes(searchedFood)
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onSearchChange={handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
