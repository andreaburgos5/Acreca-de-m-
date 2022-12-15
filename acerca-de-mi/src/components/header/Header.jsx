import React from 'react'
import './header.css'
import Portrait from '../../assets/portrait.jpeg'
import Photo from '../../assets/about.jpeg'
const Header = () => {
  return (
    <div className='header'>
          <img className='portrait' src={Portrait} alt="portrait" />
          <img className='photo' src={Photo} alt="" />
        <div className="text">
          <h1 className='about'>Acerca de mí</h1>
          <h1 className='txt'>Mi nombre es <span className='name'>Andrea Carolina Burgos</span> tengo <span className='name'>25 años</span> nací en <span className='name'>Pasto-Nariño</span> y hace 24 años <span className='name'>vivo en Putumayo</span> Mis pasatiempos son:<span className='name'> cantar, bailar, ir al gimnasio, y diseñar ropa.</span> Me encantan los <span className='name'>animales,</span> en especial los <span className='name'>perritos</span> y la <span className='name'> naturaleza</span>, amo <span className='name'>viajar</span>, pasear y <span className='name'>conocer lugares</span> mi <span className='name'>sueño</span> es <span className='name'>viajar por el mundo</span> <span className='name'>Tengo 4 perros: apolo, max, kiyo, loki y un gato llamado tiger.</span><span className='name'> ¡Vivo muy felíz y contenta!</span></h1>
        </div>
    </div>
  )
}

export default Header