import React from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>(
<Modal isOpen={!!(props.modalval)}
onRequestClose={props.handleClosebtn}
contentLabel="Selected Option"
closeTimeoutMS={200}
className='modal'>

<div>

<h1 className='modal__title'>Selected Option</h1>
<p className='modal__body'>{props.modalval}</p>
<button className='button' onClick={()=>{
    props.handleClosebtn();
  
}}>Okay</button>
</div>  
</Modal>
)


export default OptionModal