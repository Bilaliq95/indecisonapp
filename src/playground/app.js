class Indecision extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
        this.handlepick=this.handlepick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleRemoveOption=this.handleRemoveOption.bind(this);
        
        this.state={
            options:props.options,
            error:undefined
        }

      

    }
    handlepick(){
        var random = Math.floor(Math.random() * (+this.state.options.length - +0)) + +0;
        alert(this.state.options[random]);
    }

    handleRemoveAll(){
        this.setState((prevState)=>({options:[]}))
    }
    
    handleAddOption(option)
    {

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

    handleRemoveOption(option)
    {

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
            <Action handlepick={this.handlepick} arrayLen={this.state.options.length==0}/>
            <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemoveOption={this.handleRemoveOption} />
            <AddOption handleAddOption={this.handleAddOption} error={this.state.error} />
            </div>    //Wrapping it in a div is imprtant because it should have a parent element.
            )
    }
}




const Header=(props)=>{    //This is a stateless functional component
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>    //Wrapping it in a div is imprtant because it should have a parent element.
        )
}

Header.defaultProps={
    title:'Indecision'
}

Indecision.defaultProps={
    options:[]
}



const Action=(props)=>{
    return (
        <div>
      
        <button disabled={props.arrayLen} onClick={props.handlepick}>What should I do?</button>
        </div>    //Wrapping it in a div is imprtant because it should have a parent element.
        )
}


const Options=(props)=>{
    return (
        <div>
        <button onClick={props.handleRemoveAll}>RemoveAll</button>
       <ol>
       {props.options.map((option)=>{
           return (<Option key={option} option ={option} handleRemoveOption={props.handleRemoveOption} />);

       })}
       </ol>
        </div>    //Wrapping it in a div is imprtant because it should have a parent element.
        )
}




const Option=(props)=>{
    return (
        <div>
        <li>{props.option}
        <button 
        onClick={()=>{
            //It already knows which option is passed because it is making an object and when the object is clicked 
            //the event handler is called with the props.option called at that time.
            props.handleRemoveOption(props.option)
        }}
        >Remove</button></li>
        </div>    //Wrapping it in a div is imprtant because it should have a parent element.
        )
}



class AddOption extends React.Component{
    constructor(props)
    {
        super(props);
        this.OnFormSubmit=this.OnFormSubmit.bind(this);
    }
   OnFormSubmit(e){
    e.preventDefault(); //To avoid page refresh
    const option=e.target.elements.option.value;
    e.target.elements.option.value=null;
    this.props.handleAddOption(option);
    
   }
   
    render(){
        return (
            <div>
           <form onSubmit={this.OnFormSubmit}>
               <input type="text" name="option"></input>
            <button>Add Option</button>
            </form>
            <p>{this.props.error}</p>
            </div>    //Wrapping it in a div is imprtant because it should have a parent element.
            )
    }
}



ReactDOM.render(<Indecision  />,document.getElementById('app'));