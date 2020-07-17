import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';



class Indecision extends React.Component{
    state={
        options:this.props.options,
        error:undefined,
        modalval:undefined
    }
   
    handleClosebtn=()=>{
        this.setState(()=>{
            return{
                modalval:undefined
            }
        })
    }

    handlepick=()=>{
        var random = Math.floor(Math.random() * (+this.state.options.length - +0)) + +0;
        
        this.setState((prevState)=>({modalval:this.state.options[random]}));
    }

  

    

    handleRemoveAll=()=>{
        this.setState((prevState)=>({options:[]}))
    }
    
    handleAddOption=(option)=>{

        this.setState((prevState)=>{
            if(!option)
            {
                return {error:`Please enter a valid value`}
            }
            if(this.state.options.indexOf(option)>-1)
            {
                return {error:`option already exists`}
            }
            return{
                options:prevState.options.concat([option]),
                error:undefined
            }        
         })
    }

    handleRemoveOption=(option)=>{

        this.setState((prevState)=>{
           return{ options:prevState.options.filter((op)=> op!=option)
         }

        })
    }

    componentDidMount(){
    try{
        const json=localStorage.getItem('options');
       const options=JSON.parse(json);

        if (options)
        {
            this.setState(()=>{
                return{  options:options}
            })
        }
    }
    catch(e)
    {
        {
            this.setState(()=>{
            return{  options:[]}
            })

        }
    }
}
    componentDidUpdate(prevProps,prevState) {
       if(prevState.options.length!= this.state.options.length)
       {
           const json=JSON.stringify(this.state.options)
           localStorage.setItem("options",json);
       }
    }

    render(){
     

      
        const subtitle='Put your life in the hands of a computer'
      
        return (
            <div>
            <Header  subtitle={subtitle}/>
            <div className='container'>
            <Action handlepick={this.handlepick} arrayLen={this.state.options.length==0}></Action>
            <OptionModal modalval={this.state.modalval} handleClosebtn={this.handleClosebtn} />
           <div className='widget-body'>
            <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemoveOption={this.handleRemoveOption} />
            <AddOption handleAddOption={this.handleAddOption} error={this.state.error} />
            </div>
            </div>
            </div>    //Wrapping it in a div is imprtant because it should have a parent element.
            )
    }
}





Indecision.defaultProps={
    options:[]
}

export {Indecision as default}
