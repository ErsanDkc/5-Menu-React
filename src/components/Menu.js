import React from "react";

function Menu({ menuItems }) {
  return (
    <div className="menu">
      {menuItems.map((item, index) => {
        return (
          <article key={index} className="article">
            <div className="image">
              <img src={item.img} alt={item.title} className="food-image" />
            </div>
            <div className="item-info">
              <header className="header">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </header>
              <p className="desc">{item.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
