function display(num){
    result.value+=num //result.value=result.value+num
}
function allclear(){
    result.value=''
}
function  evaluation(){
    currentexp=result.value
    result.value=eval(currentexp)
    // result.value=eval(result.value)
}
 
function backspace(){
    result.value=result.value.slice(0,-1)
}