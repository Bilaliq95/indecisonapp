class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        this.AddOne=this.AddOne.bind(this);
        this.SubtractOne=this.SubtractOne.bind(this);
        this.Reset=this.Reset.bind(this);
        this.state={
            count:props.counter
        };
    }
    AddOne()
    {
        this.setState((prevState)=>{
          return{  count:prevState.count+1}

        })
    }
    SubtractOne()
    {
        this.setState((prevState)=>{
          return{  count:prevState.count-1}

        })
    }
    Reset()
    {
        this.setState((prevState)=>{
          return{  count:0}

        })
    }

    componentDidMount(){
    const count=parseInt(localStorage.getItem('count'),10);
    if(isNaN(count)==false){
    this.setState(()=>{
        return{
        count:count
        }
    })
    }       
    
}   
    componentDidUpdate(){
      localStorage.setItem('count',this.state.count)
    }
    render()
    {
        return(
            <div>
            <h1>Counter:{this.state.count}</h1>
            <button onClick={this.AddOne}>+1</button>
            <button onClick={this.SubtractOne} >-1</button>
            <button onClick={this.Reset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps={
    counter:0
}


ReactDOM.render(<Counter />,document.getElementById('app'));
// let count=0;
// let addOne= ()=>{
// count++;
// renderCounterApp();
// }
// let minusOne= ()=>{
// count--;
// renderCounterApp();
// }
// let reset=()=>{
// count=0;
// renderCounterApp();
// }
// const templateTwo=(
//     <div>
//     <h1>Count:{count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//     </div>
// )


// const AppRoot= document.getElementById('app');

//  const renderCounterApp=()=>{
//     const templateTwo=(
//         <div>
//         <h1>Count:{count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,AppRoot);
//  };

//  renderCounterApp();
