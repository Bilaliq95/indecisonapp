import React from 'react';


const Header=(props)=>(    //This is a stateless functional component 
        <div className='header'>
        <div className='container'>
        <h1 className='header__title'>{props.title}</h1>
        {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
        </div>
        </div>    //Wrapping it in a div is imprtant because it should have a parent element.
        )


Header.defaultProps={
    title:'Indecision'
}

export {Header as default}