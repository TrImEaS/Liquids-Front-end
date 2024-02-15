import React from "react";

export default function ProductCard({ img, price, name, addItemCart }) {
  
  return(
    <section className="flex flex-col justify-between bg-slate-300 w-[200px] h-[250px] p-2">
      <header className="w-full h-[150px]">
        <img 
          src={img} 
          alt="Product-Card" 
          className="w-full h-full bg-red-800" 
        />
      </header>

      <article>
        <p>{parseFloat(price).toFixed(2)}</p>
        <p>{name}</p>
      </article>
      <button 
      className="bg-marine-100 text-white w-full"
      onClick={addItemCart}>
        Añadir al Carrito
      </button>
    </section>
  )
}