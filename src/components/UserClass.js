import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)

        this.state={
            count:0,
            count2:0
        }
       
        // console.log(name)
    }
    
    render(){
        const {name}=this.props;
       
        return(
            <div>
                <h1>Count = {this.state.count}</h1>
                <h1>Count2 = {this.state.count2}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1,
                    
                    })
                    this.setState({
                        count2:this.state.count2 + 1
                    })
                }}>Increase</button>
              
                <h1>{name}</h1>
                <h2>Daman</h2>
            </div>
        )
    }
}
export default UserClass;