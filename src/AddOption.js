import React from 'react'

class AddOption extends React.Component{
  
   OnFormSubmit=(e)=>{
    e.preventDefault(); //To avoid page refresh
    const option=e.target.elements.option.value;
    e.target.elements.option.value=null;
    this.props.handleAddOption(option);
    
   }
   
    render(){
        return (
            <div>
            <p className='add-option-error'>{this.props.error}</p>
           <form className='add-option' onSubmit={this.OnFormSubmit}>
            <input className='add-option__input' type="text" name="option"></input>
            <button className='button'>Add Option</button>
            </form>
           
            </div>    //Wrapping it in a div is imprtant because it should have a parent element.
            )
    }
}


export {AddOption as default}