import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [inputFood, setInputFood] = useState('');
  const [inputCategory, setInputCategory] = useState('Produce')

  function handleName(event) {
    setInputFood(event.target.value)
  }

  function handleCategory(event) {
    setInputCategory(event.target.value)
  }
  const newItem = {
    id: uuid(),
    name: inputFood,
    category: inputCategory,
  }
  return (
    <form className="NewItem" onSubmit={(e) => {
      e.preventDefault()
      console.log(newItem)
      props.onItemFormSubmit(newItem)
      setInputFood('')
      setInputCategory('Produce')
    }
      }
    >
    
      <label>
        Name:
        <input type="text" name="name" value={inputFood} onChange={handleName}/>
      </label>

      <label>
        Category:
        <select name="category" value={inputCategory} onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
