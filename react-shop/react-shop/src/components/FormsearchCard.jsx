import React from 'react'

const FormsearchCard = () => {
  return (
   <form className="card__form">
   <input
     className="card__input"
     type="text"
     placeholder="Искать здесь..."
   />
   <button className="card__btn" type="submit"></button>
 </form>
  )
}

export default FormsearchCard
