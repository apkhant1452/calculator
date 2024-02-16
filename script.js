const display=document.getElementById("display");
let clickValue="";
 const operatorKeyAppendToDisplay = (val) => {
    const lastCharIsDecimal = clickValue.includes('.') && val === '.'; 
    const lastCharIsOperator = [
        '+', '-', '*', '/','%'
    ].includes(clickValue.slice(-1));
    if (!(lastCharIsDecimal || lastCharIsOperator)) {
        clickValue += val;
        display.value = clickValue;
    }else{
        deleteval();
        clickValue += val;
        display.value = clickValue;
    };
 };
const numberKeyAppendToDisplay = (val) => {
    
    clickValue += val;
    display.value = clickValue;
};
const clearDisplay = () => {
    clickValue="";
    display.value="";
};
const calculate=()=>{
    try{
        clickValue=eval(clickValue).toString();
    display.value=clickValue;
    }catch(err){};
    
};
const deleteval=()=>{
    clickValue=clickValue.slice(0,-1);
    display.value=clickValue;

};
