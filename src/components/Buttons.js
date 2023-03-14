
import React from 'react'

function Buttons({categories,filterCategory}) {
    
    
  return (
    <div className='btn-container'>
        {
            categories.map((category,index) => {
                return <button onClick={() => filterCategory(category)} key={index} type="button" className='btn'>{category}</button>

            })
        }

    </div>
  )
}

export default Buttons