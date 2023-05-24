let c = document.getElementById("celsius");
let f = document.getElementById("fahrenheit");

function ctf(){
    let output=(parseFloat(c.value)*9/5)+32;
    f.value=parseFloat(output.toFixed(2));
}

function ftc(){
    let output = ( parseFloat(f.value) - 32) * 5/9;
    c.value = parseFloat( output.toFixed(2));
    console.log(output);
}