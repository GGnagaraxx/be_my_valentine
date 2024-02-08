import React, { useState } from 'react'
import Main from './subcomponents/Main'
import Yey from './subcomponents/Yey';
import './proposal.css'

function Proposal() {

    const [yes, setYes] = useState(false);

    console.log(yes)

    return (
        <div className='page'>
            {
                !yes ? 
                <Main setYes={setYes}/>  :
                <Yey/>
                
            }
            
        </div>
    )
}

export default Proposal