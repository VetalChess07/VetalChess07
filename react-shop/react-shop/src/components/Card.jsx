import React from 'react'

const Card = () => {
  return (
   <div className="card">
              <div className="card__item">
                <div className="card__item-favorit"></div>
                <img className="card__item-img" src="/img/sneakers1.jpg" />
              </div>
              <div className="card__item">
                <h3 className="card__item-title">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </h3>
              </div>
              <div className="card__item">
                <div className="card__item-price">
                  <span>цена:</span> <br />
                  <p>12 999 руб. </p>
                </div>
                <button className="card__item-btn">
                  <img src="/img/plus.svg" />
                </button>
              </div>
   </div>
  )
}

export default Card
