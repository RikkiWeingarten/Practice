import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategoryById } from "./categoriesSlice";

const CategorySelector = ({ selectedCategoryId, onCategorySelect }) => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div>
      <label htmlFor="category-select">Select Category: </label>
      <select
        id="category-select"
        value={selectedCategoryId}
        onChange={(e) => onCategorySelect(Number(e.target.value))}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
