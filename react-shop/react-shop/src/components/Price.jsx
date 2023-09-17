import React from 'react'

const Price = () => {
  return (
   <div className="price">
        <div className="price__item">
          <p className="price__text">Стоимость:</p>
          <p className="price__number">12 450 руб. </p>
        </div>
        <div className="price__item">
          <p className="price__text">Налог 5%:</p>
          <p className="price__number">15 650 руб.</p>
        </div>
        <button className="price__btn">Оформить заказ</button>
      </div>
  )
}

export default Price
