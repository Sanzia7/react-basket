import React from 'react'
import s from './style.module.css'

export default function Total({ basket }) {

   const totalAmount = basket.reduce((acc, { count, price }) => acc + count * price, 0);

   const totalCount = basket.reduce((acc, { count }) => acc + count, 0);

   return (
      <div className={s.total}>
         <p>Total amount :{totalAmount}</p>
         <p>Total count: {totalCount}</p>
      </div>
   )
}