import React from 'react'


const Action=(props)=> (
        <div>
      
        <button className='big-button' disabled={props.arrayLen} onClick={props.handlepick}>What should I do?</button>
        
        </div>    //Wrapping it in a div is imprtant because it should have a parent element.
        )


export {Action as default}