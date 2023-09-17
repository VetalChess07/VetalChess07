import React from 'react'

const Header = () => {
  return (
   <header className="header">
   <div className="header__inner">
     <div className="header__item ">
       <img width={40} height={40} src="/img/logo.png" className="logo" />

       <div className="header__logo-item">
         <h3 className="header__logo-title">REACT SNEAKERS</h3>
         <span className="header__logo-span">
           Магазин лучших кроссовок
         </span>
       </div>
     </div>

     <div className="header__item">
       <ul className="header__item-ul  ">
         <li className="header__item-li header__item-cart">
           <img src="/img/cart.svg" className="header__item-svg" />
           <span className="header__item-li-price">1205 руб.</span>
         </li>
         <li className="header__item-li  ">
           <img src="/img/favorite.svg" className="header__item-svg" />
         </li>
         <li className="header__item-li">
           <img src="/img/acount.svg" className="header__item-svg" />
         </li>
       </ul>
     </div>
   </div>
 </header>
  )
}

export default Header
