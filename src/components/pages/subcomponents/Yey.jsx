import React from 'react'
import bubu from '../../../assets/images/BUBU.jpg'
import bubu_hug from '../../../assets/images/BUBU_Hugs.gif'


function Yey() {
  return (
    <div className='page yey'>
        <div className="yey-img-container">
            <img
                className='yey-img'
                src={bubu}
                alt='Yey Image'
            />
            <img
                className='yey-img'
                src={bubu_hug}
                alt='Yey Image'
            />
        </div>
        <h1 className='yey-message'>YEY!!! HAPPY VALENTINES!!! MMMWAHH!!!</h1>
    </div>
  )
}

export default Yey