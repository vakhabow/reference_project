import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({value, onChangeCategory}) => {


  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Вегетарианская",
    "Гриль",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
