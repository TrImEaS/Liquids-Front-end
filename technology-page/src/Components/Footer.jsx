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
        <h1 className="font-bold text-[20px]">No pierdas la oportunidad de suscribirte</h1>
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
            <p className="bg-page-lightblue text-page-white py-2 px-3 rounded-lg">Suscribir</p>
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
              <p>Electrodomésticos</p>
            </li>
            <li>
              <p>Informática</p>
            </li>
            <li>
              <p>Mas Categorías</p>
            </li>
            <li>
              <p>Tecnología</p>
            </li>
            <li>
              <p>Sección Outlet</p>
            </li>
          </ul>
        </article>

        <article className="flex flex-col gap-y-2 px-1">
          <h1 className="font-bold">
            Real Color
          </h1>

          <ul className="text-page-gray-light flex flex-col gap-y-1">
            <li>
              <p>Sobre nosotros</p>
            </li>
            <li>
              <p>Trabajá con nosotros</p>
            </li>
            <li>
              <p>Sucursales</p>
            </li>
            <li>
              <p>Venta a mayoristas</p>
            </li>
          </ul>
        </article>

        <article className="flex flex-col gap-y-2 px-1">
          <h1 className="font-bold">
            Ayuda y información
          </h1>
          
          <ul className="text-page-gray-light flex flex-col gap-y-1">
            <li>
              <p>Centro de ayuda</p>
            </li>
            <li>
              <p>Garantía</p>
            </li>
            <li>
              <p>Políticas de cambio y devolución</p>
            </li>
            <li>
              <p>Nuestro blog</p>
            </li>
          </ul>
        </article>


        <article className="flex flex-col gap-y-2 px-1">
        <h1 className="font-bold">
          Usuarios
        </h1>
          
          <ul className="text-page-gray-light flex flex-col gap-y-1">
            <li>
              <p>Login</p>
            </li>
            <li>
              <p>Registrarse</p>
            </li>
            <li>
              <p>Opciones</p>
            </li>
            <li>
              <p>Mis pedidos</p>
            </li>
          </ul> 
        </article>
      </section>

      <article className="flex w-full px-[100px] pt-5 pb-10 bg-page-blue-normal">
        <div className="flex gap-x-20">
          <ul 
            name={'mini-social-icons'}
            className="flex w-full justify-between items-end text-3xl text-white"
          >
            <li>
              <a href="#"><FaFacebook></FaFacebook></a>
            </li>
            <li>
              <a href="#"><FaTwitter></FaTwitter></a>
            </li>
            <li>
              <a href="#"><FaLinkedin></FaLinkedin></a>
            </li>
            <li>
              <a href="#"><FaInstagram></FaInstagram></a>
            </li>
            <li>
              <a href="#"><FaTiktok></FaTiktok></a>
            </li>
            <li>
              <a href="#"><FaYoutube></FaYoutube></a>
            </li>
          </ul>
        
          <ul 
            name={'card-icons'}
            className="flex text-3xl justify-between items-end w-full gap-x-2"
          >
            <li>
              <img 
                src={visaIcon} 
                width={35}                
              />
            </li>

            <li>
              <img 
                src={mastercardIcon}
                width={35}                
              />
            </li>

            <li>
              <img 
                src={americanexpressIcon}
                width={35}                
              />
            </li>

            <li>
              <img 
                src={cabalIcon}
                width={35}
              />
            </li>

            <li>
              <img 
                src={naranjaIcon}
                width={35}
              />
            </li>
          </ul>

          <div className="flex items-center pl-[240px] ">
            <button className="bg-white px-4 py-1 text-sm w-[200px] text-black rounded-full">
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