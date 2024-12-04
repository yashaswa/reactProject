import React from "react";

class UserClass extends React.Component
{
    constructor(props){
    super(props)
        this.state = {
           name : "mba",
        }
      

    }

   async componentDidMount(){
    // const data = await fetch("https://api.github.com/users/yashaswa");//yeh fetch kiya hai github se
    // const json = await data.json();
     

    // console.log(json.login);
     this.setState({
       // name : json.login,
        
     })
    

   
    }
        
    render(){
     
      
        return (
    <div>
       

     <h1>count:  {this.state.count}</h1> 
     <button onClick={()=> this.setState({count: this.state.count+1,})}> count++</button>  
    {/* <h1> name : {this.state.name} </h1> */}
    <h1> name : {this.props.name} </h1>
    <h1> contact = {this.props.contact}</h1>
    </div>
        )

     
        
    }
}


export default UserClass;