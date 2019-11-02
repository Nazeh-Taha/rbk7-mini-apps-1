import Ship from './ship.js';
class Sign extends React.Component{
    constructor(props){
      super(props);
      this.state={
         ship: false,
         username:'',
         email:'',
         password: null

      };      
    }
    myChangeHandler1(){
        
        event.preventDefault();
        this.setState({ship: true});
    }
    myChangeHandlerA(event){
        let num = event.target.name;
        let val = event.target.value;
        this.setState({[num]: val});
    }
    render(){
        return(
            <div>
              {(this.state.ship)? <Ship userInfo={this.state}/>:
  <div>            
  <h2>Create Acount</h2>
  <form >
  Username:
  <input type="text" name='username' onChange={this.myChangeHandlerA.bind(this)}/>
  <br></br>
  Email:
  <input type="text" name='email' onChange={this.myChangeHandlerA.bind(this)}/>
  <br></br>
  Password:
  <input type="password" name='password' onChange={this.myChangeHandlerA.bind(this)}/>
  <br></br>
  <button type="submit" onClick ={this.myChangeHandler1.bind(this)}>Next</button>
  </form> 
    </div>
              }
            </div>
        )
    }
}
export default Sign;