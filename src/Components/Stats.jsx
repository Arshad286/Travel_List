import React from 'react'

function Stats({item}) {

     let CurrentItem = item.length;
     let PacketItems = item.filter((i) => i.packed).length;
     let percentge =    Math.round((PacketItems/CurrentItem)*100);

    if(!item.length )
      return(
        <footer className='stats'>
        <em>Start Packing for your Trip🚗</em>

        </footer>
        )

  return (

    <footer className='stats'>
      <em>
      { percentge == 100  ? "You got everything Let's go 🏍🏍" :
    `You have ${CurrentItem} items in your list, and you already packet ${PacketItems} (${percentge})%`
    
      }
    </em>
    </footer>
  )
}

export default Stats