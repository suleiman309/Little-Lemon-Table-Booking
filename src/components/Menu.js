import React from "react";
import recipes from "../recipes";

const Menu = () => {
  const handleOrder = (id) => {
    const confirmed = window.confirm(
      "Do you want to confirm this order? You won't be able to revert it."
    );
    if (confirmed) {
      window.alert("Ordered! Your order has been confirmed.");
    }
    console.log(id);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
