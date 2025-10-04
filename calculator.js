const output=document.getElementById("output");

function append(value){
output.value+=value;
}

function allClear(){
output.value="";
}

function clearLast(){
    output.value=output.value.slice(0,-1);
}

function calculateResult(){
    try{

        output.value=eval(output.value);
    }
    catch{
        output.value="error"
    }
}