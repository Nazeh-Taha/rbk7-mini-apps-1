import Card from './card.js';

class Ship extends React.Component{
    constructor(props){
     super(props);
     this.state ={
         card: false,
         adress1: '',
         adress2: '',
         state: '',
         code1: null,
         phone: null,

     };
     this.userInfo = this.props.userInfo
    }
    myChangeHandler2(){
        
        event.preventDefault();
        this.setState({card: true});
    }
    myChangeHandlerB(event){
       let num = event.target.name;
       let val = event.target.value;
       this.setState({[num]: val});
    }
    render(){
        return(
            <div>
                {(this.state.card)?<Card signAhip={Object.assign(this.state, this.userInfo)}/>:
                <div>          
  <h2>Ship Info</h2>
  <form >
  Adress 1:
  <input type="text" name="adress1" onChange={this.myChangeHandlerB.bind(this)}/>
  <br></br>
  Adress 2:
  <input type="text" name="adress2" onChange={this.myChangeHandlerB.bind(this)}/>
  <br></br>
  State:
  <input type="text" name="state" onChange={this.myChangeHandlerB.bind(this)}/>
  <br></br>
  Zip Code:
  <input type="text" name="code1" onChange={this.myChangeHandlerB.bind(this)}/>
  <br></br>
  Phone Num:
  <input type="text" name="phone" onChange={this.myChangeHandlerB.bind(this)}/>
  <br></br>
  <button type="submit" onClick={this.myChangeHandler2.bind(this)}>Next</button>
  </form> 
    </div>
} 
</div> 
        )
    }
}
export default Ship;
