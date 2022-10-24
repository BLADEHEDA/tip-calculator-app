let buttons = document.querySelectorAll(".buttons");
let tipinput=document.querySelector("#input1").value;
let custominput= document.querySelector("#input2").value;
let peopleinput = document.querySelector("#input3").value;
let resetbtn= document.querySelector(".reset");
let tipamtperson = document.querySelector(".tip");
let totalamtperson = document.querySelector(".total-amt");


// this functionsruns same for every button click 

buttons.forEach(function(i){
    i.addEventListener("click" , function(){
        // this stores the value of a button in a variable (then iconver it to percentege)
  let value = (this.value)/100;
  bill = (tipinput) *value;
    console.log( value);
    return value;
    // calculate()
    })
})

// function calculate() {
     

//     bill = (tipinput) *value;
//     console.log(bill)
//  }