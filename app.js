 // Step 1-selecting all the elements
 var initialPrice=document.querySelector("#initial-price")
 var stocksQuantity=document.querySelector("#stocks-quantity");
 var currentPrice=document.querySelector("#current-price")
 var submitBtn=document.querySelector("#submit-btn")
 var outputBox=document.querySelector("#output-box")

 function calculateProfitAndLoss(initial,quantity,current){
     if(initial>current){
        var loss=(initial-current)*quantity;
        var lossPercentage=(loss/initial)*100
        
       showOutput(`hey the loss is ${loss}and the percent is${lossPercentage.toFixed(2)}%`) 
    
    }
      
    else if(current>initial){
        var profit=(current-initial)*quantity
        var profitPercentage=(profit/initial)*100
        
        showOutput(`hey the profit is ${profit}and the percent is ${profitPercentage.toFixed(2)}%`) 
        
       
    }
    else{
        showOutput("No pain no gain and no gain no pain");

        
    }

     
 }
 function submitHandler(){
    var ip=Number(initialPrice.value);
    var qty=Number(stocksQuantity.value);
    var curr=Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);
 }
 function showOutput(message){
   /* switch(status){
        case "PROFIT":
             outputBox.innerHTML=message;
             break;
        case "LOSS":
             outputBox.innerHTML=message;
*/
  outputBox.innerHTML=message;
}
     
    
 
 

 submitBtn.addEventListener("click",submitHandler
 )

 