class VisibilityToggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.onbtnclick=this.onbtnclick.bind(this);
        this.state={
            data:<p></p>,
            btnText:'Show Details',
            toggle:0 
        }

    }

    onbtnclick(){
    this.setState((prevState)=>{
       if (prevState.toggle==0)
       {
        return{
            data:<p>This is some info</p>,
            btnText:'Hide Details',
            toggle:1
        }
    }
       else{
           return{
            data:<p></p>,
            btnText:'Show Details',
            toggle:0 
           }
       }
    })

    }
    
    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.onbtnclick}>{this.state.btnText}</button>
            {this.state.data}
            </div>
        );

    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));


// const AppRoot= document.getElementById('app');
// const onbtnclick=()=>{
// console.log("Clicked");
// let templateTwo=(
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={render}>Hide Details</button>
//     <p>Here is some info</p>
//     </div>
// );
// ReactDOM.render(templateTwo,AppRoot);
// }
// const render=()=>{
// let templateTwo=(
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={onbtnclick}>Show Details</button>
//     </div>
// );
// ReactDOM.render(templateTwo,AppRoot);
// }
// render();

