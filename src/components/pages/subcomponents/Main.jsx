import React, { useEffect, useState } from 'react'
import begDialogs from '../../../assets/data/beg'
import img1 from '../../../assets/images/img1.gif'
import img2 from '../../../assets/images/img2.gif'
import img3 from '../../../assets/images/img3.jpg'
import img4 from '../../../assets/images/img4.gif'
import img5 from '../../../assets/images/img5.gif'
import img6 from '../../../assets/images/img6.gif'
import img7 from '../../../assets/images/img7.gif'
import img8 from '../../../assets/images/img8.gif'
import img9 from '../../../assets/images/img9.gif'
import img10 from '../../../assets/images/img10.gif'
import img11 from '../../../assets/images/img11.gif'
import img12 from '../../../assets/images/img12.gif'
import img13 from '../../../assets/images/img13.gif'
import img14 from '../../../assets/images/img14.gif'
import img15 from '../../../assets/images/img15.gif'
import img16 from '../../../assets/images/img16.gif'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]


function Main(props) {

    
    const [count, setCount] = useState(1);
    const [noLoc, setNoLoc] = useState({
        x: 0,
        y: 0
    });
    const [imgCount, setImgCount] = useState(0)

    const { setYes } = props;

    useEffect(() => {
        setTimeout(() => {
            if(imgCount == images.length-1){
                setImgCount(0)
            } else {
                setImgCount(imgCount+1);
            }
        }, 8000);
    })
    
    
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
            left: noLoc.x,
            top: noLoc.y,
        }
    }

    function handleNoClick(){
        setCount(count+1);
        setNoLoc({
            x: (Math.random() * 60).toString() + '%',
            y: (Math.random() * 80).toString() + '%'
        })
    }
    
    function handleYesClick(){
        setYes(true);
    }

    return (
        <>
            <div className="img-container">
                <img
                    className='img'
                    src={images[imgCount]}
                    alt="Cute GIF to capture hearts"
                    height={300}
                />
            </div>
            
            <h1 className='proposal-txt'>Will you be my Valentine?</h1>
            
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
                    <button className={count == 1 ? 'no-btn static' : 'no-btn'} onClick={handleNoClick}> 
                        NO 
                    </button>
                    <h3 className='beg-txt'>{begDialogs[count-1]}</h3>
                </div>
            </div>
        </>
    )
}

export default Main