import React from 'react'

function Main() {
    return (
        <>
            <div className="img-container">
                <img
                    className='current-img'
                    src={img1}
                    alt="Cute GIF to capture hearts"
                    height={300}
                />
                <img
                    className='next-img'
                    src={img2}
                    alt="Next Cute GIF to capture hearts"
                    height={300}
                />
            </div>
            
            <h1 className='proposal-txt'>Will you be my Valentines?</h1>
            
            <div className='btn-container'>
                <button 
                    className='yes-btn' 
                    style={
                        count <= 11 ? styles.yesBtn :
                        styles.defYesBtn
                    }>
                        YES
                </button>

                <div className='no-container' style={styles.noBtn}>
                    <button className='no-btn' onClick={handleNoClick}> 
                        NO 
                    </button>
                    <h3 className='beg-txt'>{begDialogs[count-1]}</h3>
                </div>
            </div>
        </>
    )
}

export default Main