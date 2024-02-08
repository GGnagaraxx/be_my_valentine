import React, { useState } from 'react'
import begDialogs from '../../../assets/data/beg'
import img1 from '../../../assets/images/img1.gif'
import img2 from '../../../assets/images/img2.gif'
import img3 from '../../../assets/images/img3.jpg'
import img4 from '../../../assets/images/img4.gif'
import img5 from '../../../assets/images/img5.gif'
import img6 from '../../../assets/images/img6.gif'
import img7 from '../../../assets/images/img1.gif'
import img8 from '../../../assets/images/img2.gif'
import img9 from '../../../assets/images/img3.jpg'
import img10 from '../../../assets/images/img4.gif'
import img11 from '../../../assets/images/img5.gif'
import img12 from '../../../assets/images/img6.gif'
import img13 from '../../../assets/images/img3.jpg'
import img14 from '../../../assets/images/img4.gif'
import img15 from '../../../assets/images/img5.gif'
import img16 from '../../../assets/images/img6.gif'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]


function Main(props) {

    
    const [count, setCount] = useState(1);
    const { setYes } = props;
    
    const styles = {
        yesBtn: {
            height: 50 + 10  * (Math.pow(count - 1, 2)),
            fontSize: count + "rem",
        },

        defYesBtn: {
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: count + "rem",
            zIndex: 1
        },

        noBtn: {
            position: count > 1 ? 'absolute' : 'inline',
            top: (Math.random() * 80).toString() + '%',
            left: (Math.random() * 80).toString() + '%',
        }
    }

    function handleNoClick(){
        setCount(count+1)
    }
    
    function handleYesClick(){
        setYes(true);
    }

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
                    }
                    onClick={handleYesClick}>
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