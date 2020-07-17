import React from 'react'


const Option=(props)=>(
      <li className='option-widget__li'>
    <div className='option-widget'>
       <p>{props.option}</p>
        <button className='button button--link'
        onClick={()=>{
            //It already knows which option is passed because it is making an object and when the object is clicked 
            //the event handler is called with the props.option called at that time.
            props.handleRemoveOption(props.option)
        }}
        >Remove</button>
       
       
     
        </div>
        </li>
          //Wrapping it in a div is imprtant because it should have a parent element.
        )


export {Option as default}
