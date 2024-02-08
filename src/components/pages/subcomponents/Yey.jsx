import React from 'react'
import bubu from '../../../assets/images/BUBU.jpg'
import bubu_hug from '../../../assets/images/BUBU_Hugs.jpg'


function Yey() {
  return (
    <div className='page'>
        <div className="yey-img-container">
            <img
                src={bubu}
                alt='Yey Image'
            />
            <img
                src={bubu_hug}
                alt='Yey Image'
            />
        </div>
        <h1 className='yey-message'>YEY!!! HAPPY VALENTINES!!! MMMWAHH!!!</h1>
    </div>
  )
}

export default Yey