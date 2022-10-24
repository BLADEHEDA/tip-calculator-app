let buttons = document.querySelectorAll(".buttons");
let tipinput=document.querySelector("#input1");
let custominput= document.querySelector("#input2");
let peopleinput = document.querySelector("#input3");
let resetbtn= document.querySelector(".reset");
let tipamtperson = document.querySelector(".tip");
let totalamtperson = document.querySelector(".total-amt");
let discount=0; let amt=0; let ppl=0;

// this functionsruns same for every button click 

reset()
buttons.forEach(btn =>{
    btn.addEventListener("click" ,()=>{
        // this stores the value of a button in a variable (then iconver it to percentege)
        discount = btn.value;
        custominput.value-"";         
        calc()
    })
})

// the lines below decribes the behavior of the  people input field
peopleinput.addEventListener("input" , function(){
    ppl= peopleinput.value;
    calc()
})
// the function describes the behavior of the custom input field 
custominput.addEventListener("input" , function(){
    let custom= custominput.value;
    if(custom>0){
        discount= custom;
    }
    calc()
})

// the lines below displays the behavior  of the bill input
tipinput,addEventListener("input", ()=>{
    amt=Number(tipinput.value);
    calc()
})
// the lines below display the behaviour of the reset button 
resetbtn.addEventListener("click", reset)
    function reset(){
    tipinput.value= "";
    peopleinput.value=" ";
    custominput.value=" ";
    tipamtperson.textContent=0.00;
    totalamtperson.innerHTML=0.00;

} 

// the function below performs the required calcultions 
function calc(){
    if(amt>=0 && ppl>=1){
        let totalTip = (discount*amt)/(100);
        let totalAmt = amt + totalTip;
        tipamtperson.textContent= (totalTip/ppl).toFixed(2);
        totalamtperson.innerHTML= (totalAmt/ppl).toFixed(2);
    }
 ;
}