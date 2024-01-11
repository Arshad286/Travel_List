
import { useState } from 'react'
import Form from './Components/Form'
import Logo from './Components/Logo'
import PackingList from './Components/PackingList'
import Stats from './Components/Stats'

 function App() {

  const [items , SetItems] = useState([]);

  function handleItems(item){
    SetItems((items) => [...items, item])
  }

  function handleDeleteItems(id){
     SetItems((items) => items.filter((item) => item.id !== id));
  }

  function handleChangeItems(id){
    SetItems((items)=> items.map(item => 
      item.id === id ? {...item, packed: !item.packed}  : item
      
      ) )
  }

  function handleDelete(){
    const confirmed = window.confirm("Are you sure you have to clear this --> dekh le ek baar")

     if(confirmed)SetItems([]);
  }
  
return (
    <div>    
      <Logo/>
      <Form onAddItem = {handleItems}/>
      <PackingList items = {items} onDeleteItem = {handleDeleteItems}  onToogle = {handleChangeItems}  onDelete = {handleDelete}/>
      <Stats item= {items}/>
      
      
    </div>
  )
}

export default App
