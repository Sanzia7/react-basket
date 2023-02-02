import React from 'react'
import s from './style.module.css'


export default function BasketElem({ id, title, price, count, incr, decr }) {
   return (
      <div className={s.card}>

         <p>Title: {title}</p>
         <p>Price: {price}</p>
         <p>Count: {count}</p>
         <div>
            <button onClick={() => incr(id)}>+</button>
            <button onClick={() => decr(id)}>-</button>
         </div>
      </div>
   )
}
