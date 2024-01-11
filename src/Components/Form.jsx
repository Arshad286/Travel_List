import React, { useState } from 'react'


function Form({onAddItem}) {

  const [description, SetDescriptiton] = useState("");
  const [quantity , SetQuantity] = useState(1);

 function handleSubmit(e){
     e.preventDefault();

     if(!description) return;

     const newItem = {description, quantity, packed : false , id : Date.now()};
     console.log(newItem);

     onAddItem(newItem);

     SetDescriptiton("");
     SetQuantity(1);
         
 }

  return (
   
     <form className='add-form' onSubmit={handleSubmit}>

        <h3>🎁Kya Kya Chahiye Trip me Btao👜</h3>
        <select  value={quantity}
          onChange={(e) => {SetQuantity(Number(e.target.value))}
         }
        >
            {Array.from({length:20}, (_, i) => i+1).map(
              (num) =>(
                <option  value={num} key={num}>
                  {num}
                </option>
              ))   
            }
        </select>
        <input 
        type="text" 
         placeholder='Item..'  
         value={description}
          onChange={(e) => {SetDescriptiton(e.target.value)  
          }}
        />
        <button>Add</button>
        </form>
  )
}

export default Form