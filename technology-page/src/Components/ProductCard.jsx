import React from "react";

export default function ProductCard({ img, price, name, addItemCart }) {

  const maxNameLength = 25
  const limitedName = name.length > maxNameLength ? `${name.substring(0, maxNameLength)}...`: name

  const getImagePath = `../assets/Products-images/${img}` 
  
  return(
    <section className="flex flex-col box-border items-center justify-between bg-white w-[85%] h-[250px] max-h-[250px] max-w-[200px] p-2 shadow-xl m-9 border-2 rounded-xl">
      <header className="w-full h-[50%] box-border">
        <img 
          src={'https://http2.mlstatic.com/D_NQ_NP_622122-MLU74089433592_012024-O.webp'} 
          // para cuando tenga acceso a fotos - src={getImagePath} 
          alt="Product-Card" 
          className="w-full h-full bg-red-800" 
        />
      </header>

      <article className="w-full h-[35%] box-border flex flex-col justify-between">
        <p>{limitedName}</p>
        <p className="font-bold">${parseFloat(price).toFixed(2)}</p>
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