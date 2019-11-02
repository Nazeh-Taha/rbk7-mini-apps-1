import Summ from './summ.js';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            summ: false,
            cardnum: null,
            exp: null,
            cvv: null,
            code2: null,
            
        };
        this.signAhip = this.props.signAhip;
    }
    myChangeHandler3(){
        
        event.preventDefault();
        this.setState({summ: true})
    }
    myChangeHandlerC(event){
        let num = event.target.name;
        let val = event.target.value;
        this.setState({[num]: val});

    }
    render(){
        return(
            <div>
                {(this.state.summ)?<Summ allData={Object.assign(this.state, this.signAhip)}/>:
                <div>         
  <h2>Card Info</h2>
  <form >
  Card #:
  <input type="number" name="cardnum" onChange={this.myChangeHandlerC.bind(this)}/>
  <br></br>
  Exp Data:
  <input type="date" name="exp" onChange={this.myChangeHandlerC.bind(this)}/>
  <br></br>
  CVV:
  <input type="number" name="cvv" onChange={this.myChangeHandlerC.bind(this)}/>
  <br></br>
  Zip Code:
  <input type="number" name="code2" onChange={this.myChangeHandlerC.bind(this)}/>
  <br></br>
  
  <button type="submit" onClick={(this.myChangeHandler3.bind(this))}>Next</button>
  </form> 
  </div>
  } 
    </div>
        )
    }
}
export default Card;