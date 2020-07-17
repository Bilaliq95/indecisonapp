import React from 'react'
import Option from './Option';

const Options=(props)=>(
        <div>
        <div className='widget-header'>
        <h3 className='widget-header__title'>Your Options:</h3>
        <button className='button button--link' onClick={props.handleRemoveAll}>RemoveAll</button>
        </div>
        {props.options.length==0 && <p className='widget__message'>Please add an option to get started!</p>}
       <ol>
       {props.options.map((option)=>{
        return (<Option key={option} option ={option} handleRemoveOption={props.handleRemoveOption} />);
    })}
       </ol>
   
        </div>    //Wrapping it in a div is imprtant because it should have a parent element.
        )



export {Options as default}