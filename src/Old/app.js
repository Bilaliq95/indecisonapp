//C:\Users\DELL\Desktop\react_projects\indecision-app
//babel public/src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public
console.log("App.js is running");

const app={
    title:'Indecision App',
   subtitle: 'This is some info',
    options:[]
}
const OnFormSubmit=(e)=>{
e.preventDefault(); //To avoid page refresh
const option=e.target.elements.option.value;
console.log(option);
if (option){
    e.target.elements.option.value=' ';
app.options.push(option);
renderIndecisionApp();
}
}

const removeAll=()=>{
app.options=[];
renderIndecisionApp();
}

const generateArray=()=>{
  
    return app.options.map((option)=>{
        return (<li key={option}>{option}</li>);
    })

}

const makeDecision=()=>{

        var random = Math.floor(Math.random() * (+app.options.length - +0)) + +0;
        alert(app.options[random]);
   
   
}

const renderIndecisionApp=()=>{

   
    const template=( 
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length>0? <p>Here are your options</p>:<p>No option</p>}
        <p>Length={app.options.length}</p>
        <ol>
        {generateArray()}
        </ol>
        <button disabled={app.options.length===0} onClick={makeDecision}>What should i do?</button>
        <button onClick={removeAll}>Remove All</button>
        <form onSubmit={OnFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
        </form>
        </div>);
        ReactDOM.render(template,AppRoot);

        
}
const AppRoot= document.getElementById('app');//This function takes two arguments the content to display and the id of the div where to display it.

renderIndecisionApp();
