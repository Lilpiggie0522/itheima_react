import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Proptypes, { number } from 'prop-types';
// import react from 'react';
// import Hello from './Hello';
// import Event from './Event';
// import EvObject from './Events_Object'
// import State from './State';
// import Form from './Form';
// import Form_Prac1 from './Form_Prac1';
// import FormPrac2 from './FormPrac2';
import cat from './images/cat.png';

import { BrowserRouter as Router, Route, Link, Routes, HashRouter as Hash, useNavigate} from 'react-router-dom';

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

// const Component_advanced = (props) => {
//   console.log(props)
//   return(
//     <div>
//       <h1>Props: {props.name}</h1>
//     </div>
//   )
// }

// function Component_advanced(props){
//   console.log(props)
//     return(
//       <div>
//         <h1>Props: {props.name}</h1>
//       </div>
//     )
// }

// class Component_advanced extends react.Component{
//   constructor(props){
//     super(props)
//     console.log(this.props)
//   }

//   render(){
//     console.log(this.props)
//     this.props.fn()
//     return(
//       <div>
//         <h1>Props: {this.props.name}</h1>
//         {this.props.tag}
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Component_advanced 
//   name="rose" age={19} 
//   colors={["red", "blue", "green"]} 
//   fn={()=>{console.log("this is an arrow function")}}
//   tag = {(<p>Piggie is a doggie</p>)}
//   />, document.getElementById('root')
// );

// class Parent extends react.Component{
//   state = {
//     lastName: "wang"
//   }
  
//   render(){
//     return(
//       <div className="parent">
//         <Child name={this.state.lastName} />
//       </div>
//     )
//   }
// }

// const Child = (props) =>{
//   console.log("child", props)
//   return(
//     <div className="child">
//       <p>Child Component:{props.name}</p>
//     </div>
//   )
// }

// class Parent extends react.Component{
//   getChildMsg = (props) => {
//     console.log("receiving data from child", props)
//   }

//   render(){
//     return(
//       <div className="parent">
//         <Child getMsg = {this.getChildMsg}/>
//       </div>
//     )
//   }
// }

// class Child extends react.Component{
//   sendProps= () => {
//     this.props.getMsg(this.state.name)
//   }

//   state = {
//     name: "piggie",
//   }

//   render(){
//     return(
//       <div className="child">
//         <button onClick={this.sendProps}>Click me to send data to parent!</button>
//       </div>
//     )
//   }
// }

// class Parent extends react.Component{
//   state = {
//     parentName: ""
//   }

//   getMsg = (props) => {
//     this.setState({
//       parentName: props.name,
//     })
//   }

//   render(){
//     return(
//       <div>
//         <div className="parent">
//           <h1>Parent: {this.state.parentName}</h1>
//         </div>
//         <div className="child">
//           <Child sendMsg={this.getMsg}/>
//         </div>
//       </div>
//     )
//   }
// }

// class Child extends react.Component{
//   constructor(){
//     super()
//     this.state = {
//       name: "piggie",
//     }
//   }

//   sendParent = () => {
//     this.props.sendMsg(this.state)
//   }

//   render(){
//     return(
//         <button onClick={this.sendParent}>Click me and send props to parent</button>
//     )
//   }
// }

// class Counter extends react.Component{
//   state = {
//     count: 0,
//   }

//   getIncrement = () =>{
//     this.setState({
//       count: this.state.count+1,
//     })
//     console.log("+1")
//   }

//   render(){
//     return(
//       <div>
//         <Child1 count={this.state.count}/>
//         <Child2 setIncrement={this.getIncrement}/>
//       </div>
//     )
//   }
// }

// const Child1 = (props) => {
 
//   return(
//     <p>Counter:{props.count} </p>
//   )
// }

// const Child2 = (props) => {
//   const gg = () =>{
//     props.setIncrement()
//     console.log("props: ", props)
//   }

//   return(
//     <button onClick={gg}>+1</button>
//   )
// }


// const {Provider, Consumer} = react.createContext();

// class App extends react.Component{
//   constructor(){
//     super()
//     this.state = {
//       count: 22,
//     }
//   }
  
//   render(){
//     return(
//       <Provider value="piggie">
//         <div>
//           <Node />
//         </div>
//       </Provider>
//     )
//   }
// }

// class Node extends react.Component{
//   render(){
//     return(
//       <div>
//       <Subnode />
//       </div>
//     )
//   }
// }

// class Subnode extends react.Component{
//   render(){
//     return(
//       <div>
//       <Child />
//       </div>
//     )
//   }
// }


// class Child extends react.Component{
//   render(){
//     return(
//       <div>
//       <Consumer>{data => <p>{data}</p>}</Consumer>
//       </div>
//     )
//   }
// }


// 5.1 Props.children
// class App extends react.Component{

//   render(){
//     console.log(this.props)

//     return(
//       <div>
//         <h1>Components Subnode:{this.props.children()}</h1>
//       </div>
//     )
//   }
// }

// class Node extends react.Component{

//   print = () =>{
//     console.log("This is a function in Node")
//   }

//   render(){
//     return(
//         <div>
//         <h1>Now the function executes.</h1>
//         {this.print()}
//       </div>
//     )
//   }
// }

// 5.2 Props verification

// class App extends react.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       pet: "piggie"
//     };
    // this.piggie = this.piggie.bind(this)
  // }
  //   piggie=()=>{
  //     this.setState(
  //       {
  //         pet: "doggie"
  //       }
  //     )
  //     console.log(this.state.pet)
  // }
  // arr = this.props.colors;
  // lis = this.arr.map((item, index) => <li key={index}>{item.name}</li>)

//   render(){
//     // this.props.fn()
//     return(
//       <div>
//         <ul>{this.lis}</ul>
//         <h3>{this.props.pageSize}</h3>
//       </div>
//     )
//   }
// }
// -----------------------
// const App = (props) => {
//   const arr = props.colors;
//   const lis = arr.map((item, index) => <li key={index}>{item.name}</li>)
//   return(
//     <ul>{lis}</ul>
//   )
// }

// App.propTypes= {
//   colors: Proptypes.array
// }

// 5.2 Type checking
// adding props type checking
// a: number
// fn: is a function and required
// tag: react elements
// filter: object with certain structure{area: "shanghai", price: 1999}

// App.propTypes={
//   a: Proptypes.number,
//   fn: Proptypes.func.isRequired,
//   tag: Proptypes.element,
//   pageSize: Proptypes.number,
//   filter: Proptypes.shape(
//     {
//       area: Proptypes.string,
//       price: Proptypes.number,
//     }
//   )
// }
// ------------------------------
// 5.3 Props default values
// App.defaultProps = {
//   pageSize: 10,
// }

// 6.3 life span of components
// when Component was creating

// class App extends react.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       count: 0,
//     }
//     const title = document.getElementById("title");
//     // console.log(title);
//     // console.log("Life span hook function: ", "constructor")
//   }

//   componentDidMount(){
//     const title = document.getElementById("title");
//     console.log(title);
//     console.warn("Life span hook function: ", "Component did mount");
//   }

//   render(){
//     const title = document.getElementById("title");
//     console.log(title);
//     console.log("Life span hook function: ", "render")
//     return(
//       <div>
//         <h1 id="title">The number of times doudou got hit: </h1>
//       </div>
//     )
//   }
// }

//-------------------------------
// Updating (update phase)
// Time that this stage is executed => 1. setState() is called 2. forceUpdate() is called 3. Components receive new props

// class App extends react.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       hit: 0,
//     }
//   }
//   hitIt = () => {
//     this.setState({
//       hit: this.state.hit +=1,
//     })
//     // this.forceUpdate()
//   }
//   render(){
//     console.log("life span hook function: ", "App")
//     return(
//       <div>
//         <Counter hit={this.state.hit}/>
//         <button onClick = {this.hitIt}>Hit doudou</button>
//       </div>
//     )
//   }
// }

// class Counter extends react.Component{
//   state = {
//     name: 55,
//   }

//   render(){
//     console.log("life span hook function: ", "Counter")
//     return(
//         <div>
//           <h1 id="title">The number of times doudou got hit: {this.props.hit}</h1>
//         </div>
//     )
//   }

//   componentDidUpdate(prevProps){
//     console.log(document.getElementById("title").innerHTML)
//     // console.log("Props from last time: ", prevProps, ', Current props: ', this.props)
//     // this.setState({})
//     if(prevProps !== this.props){
//       this.setState({
//       })
//     }
//   }
// }



// ---------------
// update stage (unmount stage)


// class App extends react.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       hit: 0,
//     }
//   }
//   hitIt = () => {
//     this.setState({
//       hit: this.state.hit +=1,
//     })
//   }
//   render(){
//     console.log("life span hook function: ", "App")
//     return(
//       <div>
//         <Counter hit={this.state.hit}/>
//         <button onClick = {this.hitIt}>Hit doudou</button>
//       </div>
//     )
//   }
// }

// class Counter extends react.Component{
//   componentDidMount(){
//     this.setState({

//     })
//   }
//   componentDidUpdate(prevProps){
//     if(prevProps !== this.props){
//       this.setState({

//       })
//     }
//   }
//   render(){
//     console.log("life span hook function: ", "Counter")
//     return(
//         <div>
//           <h1 id="title">The number of times doudou got hit: {this.props.hit}</h1>
//         </div>
//     )
//   }
// }

//-------------------------------------
// Render props and high order props
// 1. render props
// class App extends react.Component{
//  getCords = (mouse) =>
//   <div>Current mouse location: {mouse.X}, {mouse.Y}</div>


//   render(){
//     return(
//       <div>
//         <h1>Render props mode</h1>
//         {/* <Mouse render={(mouse)=><p>{mouse.X}, {mouse.Y}</p>}/> */}
//         <Mouse render = {this.getCords}/>
//         {/* <h3>{this.state.X}, {this.state.Y}</h3>*/}
//         {/* <Mouse /> */}
//       </div>
//     )
//   }
// }

// // Create component
// class Mouse extends react.Component{
//   state = {
//     X: 0,
//     Y: 0,
//   }

//   handleMove = (e) => {
//     this.setState({
//       X: e.clientX,
//       Y: e.clientY,
//     })
//     console.log(this.state.X, this.state.Y)
//   }

//   componentDidMount(){
//     window.addEventListener('mousemove', this.handleMove)
//   }

//   render(){
//     return this.props.render(this.state)
//     // return <p>{this.state.X}, {this.state.Y}</p>
//   }
// }

// 2. Render props - Cat catches mouse

// class App extends react.Component{
//   getCords = (mouse) =>
//   //  <div>Current mouse location: {mouse.X}, {mouse.Y}</div>
//   <img src={img} alt="cat" style={{
//     position: "absolute", 
//     top: mouse.Y-64,
//     left: mouse.X-64
//   }}/>

//    render(){
//      return(
//        <div>
//          <h1>Render props mode</h1>
//          {/* <Mouse render={(mouse)=><p>{mouse.X}, {mouse.Y}</p>}/> */}
//          {/* <Mouse render = {this.getCords}/> */}
//          {/* <h3>{this.state.X}, {this.state.Y}</h3>*/}
//          {/* <Mouse /> */}
        //  <Mouse>
        //    {/* {(mouse) => {return(<p>Current mouse location: {mouse.X} {mouse.Y}</p>)}} */}
        //   {this.getCords}
        //  </Mouse>
//        </div>
//      )
//    }
//  }
 
//  class Mouse extends react.Component{
   
//    state = {
//      X: 0,
//      Y: 0,
//    }
 
//    handleMove = (e) => {
//      this.setState({
//        X: e.clientX,
//        Y: e.clientY,
//      })
//      console.log(this.state.X, this.state.Y)
//    }
 
//    componentDidMount(){
//       window.addEventListener('mousemove', this.handleMove)
//    }

//    componentWillUnmount(){
//      window.removeEventListener('mousemove', this.handleMove)
//    }
 
//    render(){
//     //  return this.props.render(this.state)
//      return this.props.children(this.state)
//      // return <p>{this.state.X}, {this.state.Y}</p>
//    }
//  }

//  Mouse.propTypes= {
//    children: Proptypes.func.isRequired,
//  }

//--------------------------------
// High orders components re-use
// creation of higher order component
// class App extends react.Component{
//   render(){
//     return <div>
//             <h1>Higher order component</h1>
//             <MousePosition />
//            </div>
//   }
// }

// function withMouse(WrappedComponent){

//   class Mouse extends react.Component{
//     state = {
//       X: 0,
//       Y: 0,
//     }

//     handleMove = (e) => {
//       this.setState({
//         X: e.clientX,
//         Y: e.clientY,
//       })
//     }

//     componentDidMount(){
//       window.addEventListener('mousemove', this.handleMove)
//     }

//     componentWillUnmount(){
//       window.removeEventListener('mousemove', this.handleMove);
//     }

//     render(){
//       return <WrappedComponent {...this.state}></WrappedComponent>
//     }
//   }

//   return Mouse
// }

// const Position = (props) => (
//   <p>Current mouse location: x: {props.X}, y: {props.Y}</p>
// )

// const Cat = (props) => 
//   (
//   <img src={cat} style={
//     { position: "absolute",
//       top: props.Y-64,
//       left: props.X-64}
//   } alt="cat"/>
//   )

// const MousePosition = withMouse(Position)
// const MousePosition = withMouse(Cat);

//---------------------------------------
// 7.3 Set-up display name for higher order component so that they are not all called "Mouse"
// Line 785

// class App extends react.Component{
//   render(){
//     return(
//     <div>
//       <h1>Cat catches mouse</h1>
//       <WithMouseComponent />
//       <WithMouseInfo />
//     </div>)
//   }
// }

// function withMouse(WrappedComponent){
//   class Mouse extends react.Component{
//     state = {
//       X: 0,
//       Y: 0,
//     }

//     handleMove = (e) => {
//       this.setState({
//         X: e.clientX,
//         Y: e.clientY,
//       })
//     }

//     componentDidMount(){
//       window.addEventListener("mousemove", this.handleMove)
//     }


//     render(){
//       return(
//         <WrappedComponent {...this.state}/>
//       )
//     }
//   }
//   Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
//   return Mouse
// }

// const Cat = (props) => (
//   <img src={cat} alt="cat" style={
//     {
//       position: "absolute",
//       top: props.Y-64,
//       left: props.X-64,
//     }
//   }/>
// )


// const Position = (props) => (
//   <p>Current Mouse location: {props.X}, {props.Y}</p>
// )

// const WithMouseComponent = withMouse(Cat);
// const WithMouseInfo = withMouse(Position);

// function getDisplayName(WrappedComponent){
//   return WrappedComponent.displayName || WrappedComponent.name || 'Component';
// }

//---------------------------------------------
// Passing on props (Props get lost when passing)

// class App extends react.Component{
//   render(){
//     return(
//     <div>
//       <h1>Cat catches mouse</h1>
//       <WithMouseInfo a="1"/>
//     </div>)
//   }
// }

// function withMouse(WrappedComponent){
//   class Mouse extends react.Component{
//     state = {
//       X: 0,
//       Y: 0,
//     }

//     handleMove = (e) => {
//       this.setState({
//         X: e.clientX,
//         Y: e.clientY,
//       })
//     }

//     componentDidMount(){
//       window.addEventListener("mousemove", this.handleMove)
//     }


//     render(){
//       // console.log("Mouse: ", this.props)
//       return(
//         <WrappedComponent {...this.state} {...this.props}/>
//       )
//     }
//   }
//   Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`

//   return Mouse
// }

// const Position = (props) => {
//   console.log(props)
//   return(
//     <p>Current Mouse location: {props.X}, {props.Y}</p>
//   )
// }

// const WithMouseInfo = withMouse(Position);

// function getDisplayName(WrappedComponent){
//   return WrappedComponent.displayName || WrappedComponent.name || 'Component';
// }

//------------------------------------------
// React theory
// setState() demonstration
// Asynchronous data update

// class App extends react.Component{
//   state = {
//     count: 0,
//   }

  // handleClick = () => {
    // this.setState({
    //   count: this.state.count+1
    // })

    // this.setState({
    //   count: this.state.count+1
    // })

//     this.setState((state) => {
//       return({
//         count : state.count+1,
//       })
//     })

//     this.setState((state) => {
//       return({
//         count : state.count+1,
//       })
//     })       
//     console.log(this.state.count)
//   }

//   render(){
//     return(
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.handleClick}>+1</button>
//       </div>
//     )
//   }
// }

//----------------------------------------
// Components update mechanism
// Rule: only update itself and child component under it

// class App extends react.Component{
// state = {
//   color: '#369',
// }
// getColor = () => {
//     return Math.floor(Math.random()*256);
// }

// changeBG = () => {

//   this.setState((state)=>{
//     return({
//       color: `rgb(${this.getColor()}, ${this.getColor()}, ${this.getColor()})`
//     })
//   })
// }

//   render(){
//     console.log("Root component")
//     return(
//       <div className="App" style={{background: this.state.color}}>
//         <button onClick={this.changeBG}>Root component - change color state</button>
//         <div className="app-wrapper">
//           <Parent1 />
//           <Parent2 />
//         </div>
//       </div>
//     )
//   }
// }

// class Parent1 extends react.Component{
//   state = {
//     count: 0,
//   }

//   handleClick = () => {
//     this.setState((state)=>{
//       return({
//         count: state.count+1,
//       })
//     })
//   }

//   render(){
//     console.log("Parent component 1")
//     return(
//       <div className="Parent">
//           <h2>
//             Parent component: left
//             <button onClick={this.handleClick}>Click me ({this.state.count})</button>
//           </h2>
//           <div className="parent-wrapper">
//             <Child11 />
//             <Child12 />
//           </div>
//       </div>
//     )
//   }
// }

// class Parent2 extends react.Component{
//   state = {
//     count: 0,
//   }

//   handleClick = () => {
//     this.setState((state)=>{
//       return({
//         count: state.count+1,
//       })
//     })
//   }

//   render(){
//     console.log("Parent component 2")
//     return(
//       <div className="Parent">
//           <h2>
//             Parent right
//             <button onClick={this.handleClick}>Click me ({this.state.count})</button>
//           </h2>

//         <div className="parent-wrapper">
//           <Child21 />
//           <Child22 />
//         </div>
//       </div>
//     )
//   }
// }

// class Child11 extends react.Component{
//   render(){
//     console.log("Child component 1-1")
//     return(
//       <div className="Child">Child component 1-1</div>
//     )
//   }
// }

// class Child12 extends react.Component{
//   render(){
//     console.log("Child component 1-2")
//     return(
//       <div className="Child">Child component 1-2</div>
//     )
//   }
// }

// class Child21 extends react.Component{
//   render(){
//     console.log("Child component 2-1")
//     return(
//       <div className="Child">Child component 2-1</div>
//     )
//   }
// }

// class Child22 extends react.Component{
//   render(){
//     console.log("Child component 2-2")
//     return(
//       <div className="Child">Child component 2-2</div>
//     )
//   }
// }
//------------------------------------------------------
// Component performnace optimization
// State only stores data related to rendering
// For those data that are required in several methods, we put it in this
//eg: componentDidMount(){time.timerId = setInterval(()=>{}, 2000)}

//------------------------------------------------------
// Avoid unnecessary render
// Method: use shouldComponentUpdate() hook

// class App extends react.Component{
//   state = {
//     count: 0,
//   }

//   handleClick = () => {
//     this.setState((state)=>{
//       return({
//         count: state.count+1,
//       })
//     })
//   }

//   shouldComponentUpdate(nextProps, nextState){
//     // return this.state.count === 0 
//     // ?true
//     // :false

//     // if(this.state.count === 0){
//     //   console.log("Update!")
//     //   return true
//     // }
//     // else{
//     //   console.log("Dont update");
//     //   return false;
//     // }

//     console.log("Newest State: ", nextState);
//     console.log("Previous State", this.state);

//     return true;
//   }

//   render(){
//     console.log("Re-rendered")
//     return(
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.handleClick}>+1</button>
//       </div>
//     )
//   }
// }

// Avoid unnecessary update practice 1 using state (Random number)
// class App extends react.Component{
// state = {
//   number: 0,
// }

// getNo = () => {
//   return Math.floor(Math.random()*3)
// }

// handleMath = () => {
//   console.log("Triggered")
//   this.setState(() => {
//     return{
//       number:  this.getNo()
//     }
//   })
// }

// shouldComponentUpdate(nextProps, nextState){
//   // return nextState === this.state
//   // ?false
//   // :true
//   console.log("Next state: ", nextState, "Current state: ", this.state)
//   // if(nextState.number === this.state.number){
//   //   return false;
//   // }
//   // else {
//   //   return true
//   // }
//   return nextState.number !== this.state.number
// }

//   render(){
//     console.log("Render")
//     return(
//       <div>
//         <h1>
//           Random Number: {this.state.number}
//         </h1>
//         <button onClick={this.handleMath}>Re-generate</button>
//       </div>
//     )
//   }
// }

// Avoid unnecessary update practice 1 using props (Using props with seperate component)
// class App extends react.Component{
//   state = {
//     number: 0,
//   }
  
//   getNo = () => {
//     return Math.floor(Math.random()*3)
//   }
  
//   handleMath = () => {
//     console.log("Triggered")
//     this.setState(() => {
//       return{
//         number:  this.getNo()
//       }
//     })
//   }
  
  
//     render(){
//       // console.log("Render")
//       return(
//         <div>
//           <NumberBox number={this.state.number}/>
//           <button onClick={this.handleMath}>Re-generate</button>
//         </div>
//       )
//     }
//   }

//   class NumberBox extends react.Component{

//     render(){
//       console.log("Render")
//       return(<h1>Random Number: {this.props.number}</h1>)
//     }

//     shouldComponentUpdate(nextProps, nextState){
//       console.log("Previous props: ", this.props.number, "Current props: ", nextProps.number)
//       return nextProps.number !== this.props.number
//     }
//   }
//--------------------------------------------------
// Pure component

// class App extends react.PureComponent{
//   state = {
//     number: 0,
//   }
  
//   getNo = () => {
//     return Math.floor(Math.random()*3)
//   }
  
//   handleMath = () => {
//     console.log("Triggered")
//     this.setState(() => {
//       return{
//         number:  this.getNo()
//       }
//     })
//   }
  
  
//     render(){
//       console.log("Render")
//       return(
//         <div>
//           <NumberBox number={this.state.number}/>
//           <button onClick={this.handleMath}>Re-generate</button>
//         </div>
//       )
//     }
//   }

//   class NumberBox extends react.Component{

//     render(){
//       console.log(this.props.number)
//       return(
//         <h1>
//           Random Number: {this.props.number}
//         </h1>
//       )
//     }
//   }

// Shallow comparison
// When dealing with objects or variables that links to another address, be careful! 
// as shallow comparison only compares their address
// Correct approach is always creating new objects.

// class App extends react.PureComponent{
//   state = {
//     // number: 0,
//     obj: {
//       number: 0,
//     }
//   }
  
//   getNo = () => {
//     return Math.floor(Math.random()*3)
//   }
  
//   handleMath = () => {
//     // False approach
//     // let newObj = this.state.obj;
//     // newObj.number = Math.floor(Math.random()*3)
//     // console.log(this.state.obj)
//     // this.setState(()=>{
//     //   return({
//     //     obj: newObj
//     //   })
//     // })

//      // Correct approach
//     const newObj = {...this.state.obj, number: 2,}
//     this.setState(()=>{
//       return({
//         obj: newObj
//       })
//     })
//   }
   
//     render(){
//       console.log("Render")
//       return(
//         <div>
//           {/* <h1>{this.state.obj.number}</h1> */}
//           <NumberBox number={this.state.obj.number}/>
//           <button onClick={this.handleMath}>Re-generate</button>
//         </div>
//       )
//     }
//   }

//   class NumberBox extends react.Component{

//     render(){
//       console.log(this.props.number)
//       return(
//         <h1>
//           Random Number: {this.props.number}
//         </h1>
//       )
//     }
//   }

//-----------------------------------------------------------
// Virtual DOM and Diff algorithms
// class App extends react.PureComponent{
//   render(){
//     console.log("App rendered")
//     return(
//       <div>
//         <h3>Here it is!</h3>
//         <Node/>
//       </div>
//     )
//   }
// }

// class Node extends react.PureComponent{
//   state = {
//     number: 0,
//   }

//   handleClick = () => {
//     this.setState(()=>{
//       return({
//         number: this.state.number + 1,
//       })
//     })
//   }

//   render(){
//     console.log("Node rendered")
//     return(
//       <div>
//           <h1>{this.state.number}</h1>
//           <button onClick={this.handleClick}>Click me!</button>
//       </div>
      
//     )
//   }
// }
//------------------------------------------------------
// React router application
// Install react-router-dom (yarn add react-router-dom)
// Use Router to wrap the whole app components in return method
// Use link to assign navigation of router
// const First = () => <p>Content of Page 1</p>
// class Home extends react.Component{
//   render(){
//     return(
//       <h1>I am Home</h1>
//     )
//   }
// }

//   const App = () => {
//     return(
//       <Router>
//         <div>
//           <h1>React router basics</h1>
        
//           {/* assign router entrance */}
//           <ul>
//             {/* <li><Link to="/">Main</Link></li> */}
//             <li><Link to="/">Main</Link></li>
//             <li><Link to="/Home">Home</Link></li>
//             <Routes>
//               <Route path="/Home" element={<Home />} />
//             </Routes>
//             <li><Link to="/first">Page 1</Link></li>
//           </ul>
//         </div>
//           {/* assign router exit */}
//           <Routes>
//             {/* <Route path="/Home" element={<Home />} /> */}
//             <Route path="/first" element={<First />}/>
//           </Routes>
        
//       </Router>
//     )
//   }

//-------------------------------------------------------------------
// Programming navigation

// const Login = () => {
// let navigate = useNavigate()

// const handleLogin = () => {
//     navigate("/home")
//   }

//   return(
//     <div>
//         <p>Login page: </p>
//         <button onClick={handleLogin}>Login</button>
//       </div>
//   )

// }

// // class Login extends react.Component{
// //   handleLogin = () => {
// //     useNavigate()
// //   }

// //   render(){
// //     return(
// //     <div>
// //       <p>Login page: </p>
// //       <button onClick={this.handleLogin}>Login</button>
// //     </div>
// //     )
// //   }
// // }

// const Home = () => {
//   const navigate = useNavigate()
//   const handleBack = () => {
//     navigate(-2)
//   }

//   return(
//     <div>
//       <h2>I am background home page!</h2>
//       <button onClick={handleBack}>Go back</button>
//     </div>
//   )
// }

// class App extends react.Component{
//   render(){
//     return(
//       <Router>
//         <div>
//           <h1>Programming navigation</h1>
//           <ul style={{listStyle: "none"}}>
//             <li><Link to="/login">Login</Link></li>
//           </ul>
//         </div>
//         <Routes>
//           <Route path="/login" element={<Login />}/>
//           <Route path="/home" element={<Home />}/>
//         </Routes>
//       </Router>
//     )
//   }
// }

// Default router
// const Login = () => {
//   let navigate = useNavigate()
  
//   const handleLogin = () => {
//       navigate("/home")
//     }
  
//     return(
//       <div>
//           <p>Login page: </p>
//           <button onClick={handleLogin}>Login</button>
//         </div>
//     )
  
//   }
  
  
//   const Home = () => {
//     const navigate = useNavigate()
//     const handleBack = () => {
//       navigate(-2)
//     }
  
//     return(
//       <div>
//         <p>Can you see me when you first entered the page?</p>
//         <h2>I am background home page!</h2>
//         <button onClick={handleBack}>Go back</button>
//       </div>
//     )
//   }
  
//   class App extends react.Component{
//     render(){
//       return(
//         <Router>
//           <div>
//             <h1>Programming navigation</h1>
//             <ul style={{listStyle: "none"}}>
//               <li><Link to="/login">Login</Link></li>
//             </ul>
//           </div>
//           <Routes>
//             <Route path="/login" element={<Login />}/>
//             <Route path="/" element={<Home />}/>
//           </Routes>
//         </Router>
//       )
//     }
//   }

// Arbitrary routing
const Home = () => {
  
  return(
    <p>When entering the page, can you see me?</p>
)
}

const Login = () => {
  const back = useNavigate()
  const handleBack = () => {
    back('/')
  }
  return(
    <div>
      <p>I am the content of login component</p>
      <button onClick={handleBack}>Back</button>
    </div>
  )
}

const Piggie = () => {
  const back = useNavigate()
  const handleBack = () => {
    back('/')
  }
  return(
  <div>
    <p>This is Piggie</p>
    <button onClick={handleBack}>Back</button>
  </div>
  )}
  


const App = () => {
  return(
    <Router>
      <div>
        <h1>Default router</h1>
        <Link to="/login">Login page</Link>
        <br />
        <Link to="/login/Piggie">Piggie</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/login/Piggie" element={<Piggie />}/>
      </Routes>
    </Router>
  )
}


ReactDOM.render(
  // <App>
  //   {
  //     () => {
  //       console.log("this is a function");
  //     }
  //   }
  //   </ App>
  //  <App fn={()=>{console.log("func type now")}} colors={[{name:"piggie"},{name:"doggie"}]}/> , document.getElementById('root')
  <App/> , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
