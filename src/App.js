import items from './components/Data';
import './App.css';
import Buttons from './components/Buttons';
import Menu from './components/Menu';
import { useState } from 'react';


const allCategories = [...new Set(items.map((item) => item.category))]
allCategories.unshift("all")




function App() {
  const [menuItems,setmenuItems] = useState(items)
  const [categories, ] = useState(allCategories)

  const filterCategory = (category) => {
    if(category === "all") {
      setmenuItems(items)
      return
    }
    const newItem = items.filter((item) => item.category === category)
    setmenuItems(newItem)
  }
  return (
    <div className='container'>
      <div className="title">our menu</div>
      
      <Buttons categories={categories} filterCategory={filterCategory}  />
      <Menu menuItems={menuItems} />

      
    </div>
  );
}

export default App;
