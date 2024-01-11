import React, { useState } from 'react'


function PackingList({items, onDeleteItem, onToogle , onDelete}) {

  const [sortBy, SetsortBy] = useState("input")

  let sortedItem;

  if(sortBy === "input")sortedItem =items;

  if(sortBy === 'description') sortedItem = items.slice().sort((a,b) => a.description.localeCompare(b.description));

  if(sortBy === "packed")
    sortedItem = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>   

        {sortedItem.map( (item) => (
           <Item  item= {item} onDeleteItem={onDeleteItem}  onToogle= {onToogle}/> 
           ))}

        </ul>


        <div className='actions'>
          <select  value={sortBy} onChange={(e) =>SetsortBy(e.target.value)}>
           <option value="input">Sort By Input Order</option>
           <option value="description">Sort By description Order</option>
           <option value="packed">Sort By Packed Order</option>
           </select>
           <button onClick={()=> onDelete(items)}>Clear</button>
        </div>
      </div>
  )
}

function Item({item,onDeleteItem, onToogle}){
  return  <li>
    <input type='checkbox'  onChange={()=> onToogle(item.id)}/>
    <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
     {item.quantity} {item.description}
    </span>
    
    <button onClick={(id)=> onDeleteItem(item.id)}>❌</button>
   
    </li>
  
}

export default PackingList