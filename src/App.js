function App(props)
{
  var a=props.data.rno
  var b=props.data.sname
  var c=props.data.issingle
  var d=props.data.rank
  var e=props.data.hobbies
  
  
  return(<>
       <h3>Type of rno:{typeof(a)}</h3>
       <h3>Type of sname:{typeof(b)}</h3>
       <h3>Type of martial status:{typeof(c)}</h3>
       <h3>Type of marks:{typeof(a)}</h3>
       <h3>{Array.isArray(d)?"it is array":"it is object json"}</h3>
       <h3>{Array.isArray(e)?"it is array":"it is object json"}</h3>
  
  </>)
  
}
export default App






// import parse from 'html-react-parser'
// function App(props)
// {
//   var ans=""
//   for (var s in props.data)
//     {
//       ans = ans + `<li>${s} = ${props.data[s]}</li>`
//       console.log(s)
//     }

//   return(
//     <>
//       {parse("<ol>"+ans+"</ol>")}
//     </>
//   )
// }
// export default App








// import React from "react";

// import parse from "html-react-parser";

// class App extends React.Component
// {
//   constructor(props)
//   {
//     var ans = ""
//     super(props)
//     for (var s in props.data)
//     {
//       ans = ans + `<li>${s} = ${props.data[s]}</li>`;
//       console.log(s);
//     }
// this.state={
//   res:`<ol type='I'>${ans} </ol>`

// }
//   }
//   render(){
//     return(
//       <>
//       <h1>Combine react state + props</h1>
// {parse(this.state.res)}
// <div id="res"></div>

//       </>
//     )
//   }
// }

// export default App







// import React from 'react';
// class App extends React.Component
// {
//   constructor(props)
//   {
//     super(props)
//     this.state={
//       studentname:this.props.sname,
//       studentmark:this.props.mark

//     }
//   }
//   render()
//   {
//     return(
//     <>
//        <h1>combine react state + props</h1>
//        <h2>Student Name:{this.state.studentname}</h2>
//        <h2>Student Mark:{this.state.studentmark}</h2>
//         </>
//         )
//   }
// }
// export default App












// import React from"react";
// class App extends React.Component
// {
//   constructor()
//   {
//     super()
//     this.state={
//       sno:111,
//       sname:"harshini",
//       mark:[88,99,100,99,76]
//     }
//   }
//   show=()=>{
//     this.setState({sname:"harshini s"})
//     }

//     dis=()=>{
//       this.setState({mark:[56,78,89,98,55]})
//     }
//     dis1=()=>{
//       const newmark=[...this.state.mark]
//       newmark[2]=99
//       this.setState({mark:newmark})
//     }
    
//     render()
//     {
//       return(<>
//            <h1>This is class components</h1>
//            <h2>Serial Number:{this.state.sno}</h2>
//            <h2>Student Name:{this.state.sname}</h2>
//            <h2>Student mark:{this.state.mark}</h2> 
//            <h2>mark</h2>
//         {this.state.mark.map((v,index)=><>Mark:{index+1} = {v}<br></br></>)}
//         <button onClick={this.show}>update name</button>
//         <button onClick={this.dis}>update all mark</button>
//         <button onClick={this.dis1}>update single mark</button>
//         </>)

//     }
//  }
//   export default App



// import{aadhar,accno,place,sname} from"./mycomponents/commonvar"
// import Harshini from "./mycomponents/Harshini"

// function App()
// {
//   return(
//     <>
//        <Harshini/>
//        <h1>this is default App components</h1>
//        <h2>My name is:{sname}</h2>
//        <h3>My city:{place}</h3>
//        <h3>My aadhar:{aadhar}</h3>
//        <h3>My accno:{accno}</h3>
         
         
//        </>
//   )
// }
// export default App


// function App()
// {
//   var arr=[11,22,33,44,78,98,43,27,12,56,111,119,222]
//   var s=0
//   var ma=arr[0]

//    var order=arr
//    var fans=""
//   return(
//     <>
//       <h1>React Loop map method</h1>
//       <h2>old model</h2>
//       {arr[0]}
//       {arr[1]}
//       {arr[2]}
//       {arr[3]}
//       <h2>New Model Map (loop)</h2>
//       {arr.map((v)=><>{v}+</>)}
//       <h2>New Model Map (loop)</h2>
//       <ol type="I">
//       {arr.map((v)=><li>{v}</li>)}
//       </ol>
//       <h2>Task: Sum of array</h2>
//       <div style={{display:"none"}}>
//       {arr.map((item)=><>{s=s+item}<br></br></>)}
//       </div>
//       <h3>Sum of Array:{s}</h3>

      
//       <div style={{display:"none"}}>
//       {arr.map((v)=><>{ma<v && <>{ma=v} </>}</>)}    
//       </div>
//       <h3>Max of Array:{ma}</h3>

//       <h2>Ascending order</h2>
//       <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}</div>
//       {order.map((item)=><>{item} + </>)}
    
//       <h2>descending order</h2>
//       <div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
//       {order.map((item)=><>{item},</>)}

//       <h3>Adding element in an array</h3>
//       <div style={{display:"none"}}>{order.push(999)}</div>
//       {order.map((item)=><>{item},</>)}
//       <br></br>
//       <h3>remove last element in an array</h3>
//       <div style={{display:"none"}}>{order.pop()}</div>
//       <div style={{display:"none"}}>{order.pop()}</div>
//       <div style={{display:"none"}}>{order.pop()}</div>      
//       {order.map((item)=><>{item},</>)}

//     <h2>Remove last comma or plus or any char</h2>
//       <div style={{display:"none"}}>{order.map((item)=><>{fans=fans+item+","}</>)}</div>
//       {fans.slice(0,-1)}  
// </>
//   )
// }
// export default App




 // function App()
// {
//   var res="Pass"
//   var avg=65 
   
//   return(<>
//     <h2>
//       {
//         (res==="Pass" &&
//         ((avg>=85 && "Outstating") ||
//          (avg>=75 && "Excellent") ||
//          (avg>=65 && "Very good") ||
//          (avg>=50 && "good") ||
//          "Fair")) || "No grade because fail"}
//          </h2>
//          </>
//   )
//   }
//   export default App
    
  
// function App()
// {
//   var unit=102
//   return(<>
//         <center><h2>Electricity Bill Calculation</h2></center>
//         <h3>{(unit<=100 && "Rs.0") ||
//          (unit >=101 && unit<=125 && "Rs.50") ||
//          (unit >=126 && unit<=200 && "Rs."+(unit-100)*2) ||
//          (unit >=201 && unit<=300 && "Rs."+(200+(unit-200)*3)) || 
//          (unit >=301 && unit<=400 && "Rs."+(500+(unit-300)*4)) ||
//           "₹"+(900+(unit-400)*5)}</h3>
          
//         </>)
// }
// export default App



// function App()
// {
//   var avg=85 
//   return(<><
//       <h1>React Simple if else if statement</h1>
//       <h2>{(avg>=85 && "OutStating")|| (avg>=75 && "Excellent")|| (avg>=65 && "very good")||
//       (avg>=50 && "good")|| "Fair" }</h2>
        
//     </>)
// }
// export default App


// function App()
// {
//   var mark=34
//   return(<>
//         <h1>React Simple if statement</h1>
//         <h2>{(mark>34 && "PASS")|| "FAIL"}</h2>
//         </>)
// }
// export default App

// function App()
// {
//   if(true)
//   {
//     var v=100
//     let l=200
//     const c=300
//     v++;
//     l++;
//     console.log("Let:"+1);
//     // c++
//     console.log("const:"+c);
//   }
//   return(
//     <>
//        <h1>variable : global :{v}</h1>
//        <h1>does not work let and const : because local</h1>
//     </>
//   )
// }
// export default App


// function App()
// {
//   let myfun=(a,b,c)=>{
//     var tot=a+b+c
//     document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;

//   }
//   return(<>
//       <h2>Arrow Function Without parameters</h2>
//       <h3>Note: onClick C must be caps</h3>
//       <h3>Note: in calling function don't use parenthesis when without passing args</h3>
//       <button onClick={()=>myfun(10,20,30)}>click me</button>
//       <div id="res"></div>
//       </>)
// }
// export default App 





// import myimg from'./images/image1.jpeg'
// function App()
// {
//   return(<>
//       <h2>Hello Teddy</h2>
//       <img src={myimg} width="30%" height="auto" alt="path is wrong"></img>
//       </>)
// }
// export default App


// function App()
// {
//   var a=600
//   var b=200
//   var c=800
//   return(
//     <>
//         <h2>Biggest Among 2 no's using conditional or ternaray operator</h2>
//         <h1>Biggest Number a or b:{a>b?a:b}</h1>
//         <h1>Biggest Number a or b or c:{(a>b && a>c) ?a:(b>c?b:c)}</h1>
//     </>    
       
       
//   )

// }
// export default App
// function App(){
//   // javascript learned code
//   var a=10
//   var b=20
//   var c="Harshini"

//   return(<>
//          <h1>Total:{a+b}</h1>
//          <marquee bgcolor='pink'><font size='7'>{c}</font></marquee>
//          </>)
// }
// export default App

// import React from "react";
// class Parent extends React.Component
// {
//   render()
//   {
//        return(<>
//        <h1>This is parent class</h1>
//         <h1>This is parent class</h1>
//          <h1>This is parent class</h1>
//          <h1>This is parent class</h1>
//          <h1>This is parent class</h1>
//        </>
//        )
//   }
// }
// class App extends Parent
// {
//   render()

//   {
//     return(<>
//     <Parent/>
//     <h1>Welcome to class components</h1>
//      <h1>Welcome to class components</h1>
//       <h1>Welcome to class components</h1>
//        <h1>Welcome to class components</h1>
//        <hr></hr>
//        <p>In adipisicing veniam est do et nostrud. Dolor aliquip veniam nulla incididunt commodo voluptate adipisicing dolore id commodo. Duis magna quis amet velit nostrud esse anim id dolore enim et. Sint esse commodo ad do eu. Officia cupidatat velit pariatur ad do tempor ullamco laboris consequat adipisicing ullamco ullamco ut.

// Non tempor eu quis exercitation. Officia anim consequat veniam ipsum dolore nisi veniam fugiat. Cupidatat anim ipsum ad esse minim enim est do irure laboris tempor consectetur elit anim. Sit sunt exercitation aliqua laborum occaecat in labore elit dolore veniam qui adipisicing nostrud. Elit nulla ea elit dolore aute minim labore exercitation.

// Cillum ad sint laboris labore elit ut culpa irure incididunt. Dolor elit voluptate eu Lorem sint ut ad duis voluptate. Laborum qui et ullamco aliquip cupidatat cillum esse do deserunt veniam.

// Sunt qui quis ex adipisicing ad duis et incididunt. Tempor est incididunt qui quis. Amet occaecat nostrud anim voluptate nostrud laboris commodo aliqua dolor sunt. Ad magna velit qui laborum officia sit aliqua. Aute occaecat ad et eu aute fugiat minim do aliquip non laborum. Ad velit laborum sit do dolor commodo in. Minim commodo elit sit minim minim.

// Pariatur adipisicing nostrud sint elit minim enim deserunt officia anim sint. Reprehenderit aliquip enim esse esse elit anim quis officia enim est. Aliqua deserunt velit velit deserunt excepteur ad id nostrud occaecat consequat officia esse veniam. Et officia incididunt esse cupidatat laboris in ipsum consequat consequat. Cillum nisi ullamco dolore officia dolore in.</p>
//     </>

//     )
//   }
// }
// export default App 

// function App()
// {
//   return(
//     <div>
//       <h1>Welcomew to react JS</h1>
//       <h1>Welcomew to react JS</h1>
//       <h1>Welcomew to react JS</h1>
//  </div>
//   )

  
// }
// export default App



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
