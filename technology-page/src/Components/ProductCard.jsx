import React from "react";

export default function ProductCard({ img, price, name, addItemCart }) {

  const getImagePath = `../assets/Products-images/${img}` 
  
  return(
    <section className="flex flex-col box-border justify-between bg-slate-300 min-w-[300px] h-[400px] p-2">
      <header className="w-full h-[150px] box-border">
        <img 
          src={getImagePath} 
          alt="Product-Card" 
          className="w-full h-[200px] bg-red-800" 
        />
      </header>

      <article className="w-full box-border">
        <p className="font-bold">${parseFloat(price).toFixed(2)}</p>
        <p>{name}</p>
      </article>
      <button 
        className="bg-marine-100 font-bold text-white w-full"
        onClick={addItemCart}
      >
        Añadir al Carrito
      </button>
    </section>
  )
}