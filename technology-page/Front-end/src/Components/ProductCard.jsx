import React from "react";

export default function ProductCard({ img, price, name, addItemCart }) {

  const maxNameLength = 40
  const limitedName = name.length > maxNameLength ? `${name.substring(0, maxNameLength)}...`: name

  
  return(
    <section className="flex flex-col box-border items-center justify-between bg-white w-full h-[400px] max-h-[400px] md:max-w-[290px] max-w-[200px] min-w-[200px] p-2 shadow-xl hover:shadow-page-blue-normal hover:shadow-lg duration-500 m-9 border-2 rounded-xl hover:cursor-pointer">
      <header className="w-full h-[50%] box-border">
        <img 
          src={'https://http2.mlstatic.com/D_NQ_NP_622122-MLU74089433592_012024-O.webp'} 
          // src={img} 
          alt="Product-Card" 
          className="w-full h-full bg-" 
        />
      </header>

      <article className="w-full h-[35%] box-border flex flex-col justify-between">
        <p>{limitedName}</p>
        <p className="font-bold text-xl">${parseFloat(price).toFixed(2)}</p>
      </article>

      {/* <button 
        className="bg-marine-100 h-[15%] font-bold text-white w-full"
        onClick={addItemCart}
      >
        Añadir al Carrito
      </button> */}
    </section>
  )
}