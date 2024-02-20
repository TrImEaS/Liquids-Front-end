import React from "react"
import { 
  FaFacebook,
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube,
} from 'react-icons/fa'
import naranjaIcon from '../Assets/Some-icons/card-icon1.svg'
import visaIcon from '../Assets/Some-icons/card-icon2.svg'
import mastercardIcon from '../Assets/Some-icons/card-icon3.svg'
import cabalIcon from '../Assets/Some-icons/card-icon4.svg'
import americanexpressIcon from '../Assets/Some-icons/card-icon5.svg'
import { MdOutlineEmail } from "react-icons/md"

export default function Footer() {
  return(
    <div className="flex flex-col justify-center items-center">
      <section className="w-3/4 bg-page-gray-light h-20 mt-[100px] flex gap-x-5 justify-center items-center">
        <h1 className="font-bold text-[20px]">
          No pierdas la oportunidad de suscribirte
        </h1>
        <form 
          action="none"
          className="flex rounded-lg"
        >
          <div className="flex bg-page-white justify-center items-center rounded-md">
            <span className="text-3xl px-2 text-gray-400">
              <MdOutlineEmail/>
            </span>
            <input 
              type="email" 
              className="rounded-md outline-none px-2 w-[200px]"
              placeholder="Ingresa tu mail"
            />
          </div>
            <button type="button" className="bg-page-lightblue text-page-white py-2 px-3 rounded-lg hover:bg-page-blue-dark duration-300">
              Suscribir
            </button>
        </form>
      </section>

      <section className="grid grid-cols-5 box-border w-full pl-[100px] pt-10 bg-page-blue-normal text-white gap-x-10">
        <article className="flex flex-col px-1 gap-y-3 ">
          <img 
            src="/logo-realcolor-dark.png"
            className="bg-white rounded-3xl"
          />
          <ul className="flex flex-col w-full text-page-gray-light">
            <li>
            </li>

            <li>
              <span>Informe:</span>
            </li>

            <li>
              <span>Tel.:</span>
            </li>

            <li>
              <span>E-mail:</span>
            </li>
          </ul>
        </article>
        
        <article className="flex flex-col items-start gap-y-2 px-1">
          <h1 className="font-bold">Categorías</h1>

          <ul className="text-page-gray-light flex flex-col gap-y-1">
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Electrodomésticos</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Informática</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Mas Categorías</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Tecnología</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Sección Outlet</a>
            </li>
          </ul>
        </article>

        <article className="flex flex-col gap-y-2 px-1">
          <h1 className="font-bold">
            Real Color
          </h1>

          <ul className="text-page-gray-light flex flex-col gap-y-1">
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Sobre nosotros</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Trabajá con nosotros</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Sucursales</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Venta a mayoristas</a>
            </li>
          </ul>
        </article>

        <article className="flex flex-col gap-y-2 px-1">
          <h1 className="font-bold">
            Ayuda y información
          </h1>
          
          <ul className="text-page-gray-light flex flex-col gap-y-1">
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Centro de ayuda</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Garantía</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Políticas de cambio y devolución</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Nuestro blog</a>
            </li>
          </ul>
        </article>


        <article className="flex flex-col gap-y-2 px-1">
        <h1 className="font-bold">
          Usuarios
        </h1>
          
          <ul className="text-page-gray-light flex flex-col gap-y-1">
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Login</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Registrarse</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Opciones</a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300">Mis pedidos</a>
            </li>
          </ul> 
        </article>
      </section>

      <article className="flex w-full px-[100px] pt-5 pb-10 bg-page-blue-normal">
        <div className="flex gap-x-20">
          <ul 
            name={'mini-social-icons'}
            className="flex w-[180px] justify-between gap-x-2 items-center text-3xl text-white"
          >
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300"><FaFacebook></FaFacebook></a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300"><FaInstagram></FaInstagram></a>
            </li>
            <li>
              <a href="#" className="hover:text-page-lightblue duration-300"><FaTiktok></FaTiktok></a>
            </li>
          </ul>
        
          <ul 
            name={'card-icons'}
            className="flex text-3xl justify-between items-end w-[300px] ml-[110px] gap-x-4"
          >
            <li>
              <img 
                src={visaIcon} 
                width={70}                
              />
            </li>

            <li>
              <img 
                src={mastercardIcon}
                width={70}                
              />
            </li>

            <li>
              <img 
                src={americanexpressIcon}
                width={70}                
              />
            </li>

            <li>
              <img 
                src={cabalIcon}
                width={70}
              />
            </li>

            <li>
              <img 
                src={naranjaIcon}
                width={70}
              />
            </li>
          </ul>

          <div className="flex items-center pl-[350px] ">
            <button className="bg-white px-4 py-1 text-sm w-[240px] text-black rounded-full hover:bg-page-lightblue duration-300">
              BOTÓN DE ARREPENTIMIENTO
            </button>
          </div>
        </div>
      </article>

      <section className="flex justify-center items-center w-full bg-page-gray-light">
        <h1 className="font-bold text-gray-800 text-sm py-2">©️ 2024 REAL-COLOR SRL</h1>
      </section>
    </div>
  )
}