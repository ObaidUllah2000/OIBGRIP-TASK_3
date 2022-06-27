let cel = document.getElementById("celsius");
let fahr = document.getElementById("fahrenheit");

function celToFar(){
    let output = ( parseFloat(cel.value) * 9/5 ) + 32;
    fahr.value = parseFloat(output.toFixed(2));
}

function farToCel(){
    let output = ( parseFloat(fahr.value) - 32) * 5/9;
    cel.value = parseFloat( output.toFixed(2));
    console.log(output);
}