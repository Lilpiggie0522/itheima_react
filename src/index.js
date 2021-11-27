import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import react from 'react';
// import Hello from './Hello';
// import Event from './Event';
// import EvObject from './Events_Object'
// import State from './State';
// import Form from './Form';
// import Form_Prac1 from './Form_Prac1';
import FormPrac2 from './FormPrac2';

const name = "Jack"
const isLoading = true;

// const loadData = () =>{
//   if(isLoading){
//     return(
    // <h1 className="gg">
    // Loading<span />
    // </h1>
//     )
//   }
//     return(
//       <h1>Hello JSX {name}</h1>
//     )
//   }

// const loadData = () => {
//   return isLoading? (<div>Loading</div>):(
//     <h1 className="gg">
//         Hello, JSX {name}<span />
//     </h1>
//   )
// }

// const loadData = () => {
//  return isLoading && <h1>Loading...</h1>
// }

// const title = <div>{loadData()}</div>;
const title = 
      <div>
        {isLoading?
        (<h1>Loading</h1>)
        :(
          <h1>
            Hello JSX {name}
          </h1>
      )}
      </div>

const songs = [
  {id:1, name:"space oddity"}, 
  {id:2, name:"I love you so"},
  {id:3, name: "Moon & Stars"}
];

const list = songs.map(item => (<li key={item.id}>{item.name}</li>))

// function Hello(){
//   return(
//   <div>This is my first function</div>
//   )
// }

// const Hello = () => (<div>This is my first arrow function</div>)

class Hello extends React.Component{
  render(){
    return(
      <div>Hello, this is my first class Component</div>
    )
  }
}



ReactDOM.render(
  <FormPrac2 />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
