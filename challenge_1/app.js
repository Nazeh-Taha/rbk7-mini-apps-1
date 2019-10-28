var toyArray =
[['','',''],
['','',''],
['','','']];

var count = 0;

window.addEventListener("load", function(){
var html = '';

setInterval(function(){
html = "<table style = 'border: 1px solid black;'><tr>";
for (i=0; i<toyArray.length; i++){
    
    for(j=0; j<toyArray.length; j++){
        html += "<td style = 'border: 1px solid black; height: 50px; width: 50px;'>"
         +"<button id="+i+'f'+j+" type='button'style = 'border: 1px solid black; height: 50px; width: 50px; font-size: 30px;'onclick="
         +"myFunction("+i+","+j+")"+">"+toyArray[i][j]+"</button>"+ 
         "</td>";      
    }
    html += "</tr><tr>";
}
html += "</tr></table>";
document.getElementById("container").innerHTML = html;
}, 1000);

});

/////////////////////////////////
myFunction =function(x,y){
if(count % 2 == 0 && toyArray[x][y] != 'o'){
    toyArray[x][y] = 'x';
    count ++; 
}else if(count % 2 != 0 && toyArray[x][y] != 'x'){   
    toyArray[x][y] = 'o';
    count ++; 
}
     
}
reset = function(){
    for (i=0; i<toyArray.length; i++){
        for(j=0; j<toyArray.length; j++){
            toyArray[i][j]='';
        }
    }
}
///////////////////////////////////////////
var xWin = 0;
var oWin = 0;  

for (i=0; i<toyArray[0].length; i++){
    if(toyArray[0][i] == 'x'){
        xWin ++;
    }else if((toyArray[0][i] == 'y')){
        oWin ++;
    }
    
} 

if(xWin != 3 || oWin != 3){
    xWin = 0;
    oWin = 0; 
for (i=0; i<toyArray[1].length; i++){
    if(toyArray[1][i] == 'x'){
        xWin ++;
    }else if((toyArray[1][i] == 'y')){
        oWin ++;
    }
        
} 
}
if(xWin != 3 || oWin != 3){
    xWin = 0;
    oWin = 0;
    for (i=0; i<toyArray[2].length; i++){
        if(toyArray[2][i] == 'x'){
            xWin ++;
        }else if((toyArray[0][2] == 'y')){
            oWin ++;
        }
            
    } 
}
if(xWin == 3){
    console.log("pleayer 1 win");
}else if(oWin == 3){
    console.log("pleayer 2 win");
}





