
import Sign from './sign.js';
class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sign: false
        };
    }   
    myChangeHandler(){
        event.preventDefault();        
        this.setState({sign: true});
    }
  render() {
    return (  
    <div>
     {(this.state.sign)? <Sign />:  
     <form>
      <p>Check Out</p>
      <button type="submit" onClick={this.myChangeHandler.bind(this)}>Check Out</button>
      </form>
      } 
   </div>
    
    )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));


