class Summ extends React.Component{
 constructor(props){
     super(props);
     this.state={
        
     };
     this.allData = this.props.allData;
 }
 
 postData(){
    event.preventDefault(); 
    var that =this;
    
    $.ajax({    
         type: "post",
         url: "/saveData",
         data: that.allData,
         dataType: "json",
         success: function (data) {
            console.log("\_(^_^)_/");
        }
      
     });
     
 }
render(){
    return(
        <div>
     <form >
        <h1>summarizes the data</h1>
        <h3>Username</h3>
        <p>{this.allData.username}</p>
        <h3>Email</h3>
        <p>{this.allData.email}</p>
        <h3>Adress 1</h3>
        <p>{this.allData.adress1}</p>
        <h3>Adress 2</h3>
        <p>{this.allData.adress2}</p>
        <h3>State</h3>
        <p>{this.allData.state}</p>
        <h3>Code</h3>
        <p>{this.allData.code}</p>
        <h3>Phone</h3>
        <p>{this.allData.phone}</p>
        <h3>Card #</h3>
        <p>{this.allData.cardnum}</p>
        <h3>EXP</h3>
        <p>{this.allData.exp}</p>
        <h3>CVV</h3>
        <p>{this.allData.cvv}</p>
        <h3>Zip Code1</h3>
        <p>{this.allData.code1}</p>
        <h3>Zip Code2</h3>
        <p>{this.allData.code2}</p>
        

  <button type="submit"  onClick={this.postData.bind(this)}>Purchase</button>
  </form>
  </div>
    )
    
}

}
export default Summ;