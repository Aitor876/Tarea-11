
function principal(){
    letsuma=0;
    for( let i=1; i<=100; i++){
        if(i%2==0){
            suma+=1;
        }
    }
console.log("suma nº pares del 1 al 10:", suma)
}
function multi1(){
    let multi=parseInt(document.getElementById("multiplicacion1").value):
    for (let i=1; i<=10; i++){
        resultado=multi*1
                console.log(`${multi}x ${i} = ${resultado}`)
    }
}

function vocal(){

    let vocal=document.getElementById("frase1").value;
    let contadorvocales=0
    for (let i = 0; i < text.length; i++) {
        let letra= vocal[i].toLowerCase();


        if (letra === "a" ||
            letra === "e" ||
            letra === "i" ||
            letra === "o" ||
            letra === "u")
        (
            contadorvocales++;
        )
    }
console.log("La cantidad de vocales es " + contadorvocales + "vocales"):
document.getElementById("vocales").value=contadorvocales
}
function fibol(){
    let num1 =0
    let num2 =1;
    let num3;
    let fin = 20
    console.log("Los primeros 20 numeros de la serie de fibonacci son:")
    console.log(num1)
    console.log(num2)
    num3 = num1 + num2
    console.log(num3):
    for (let i = 3; i <= 20; i++) {
        let num3 = num1 + num2;
        console.log(num3);
        num1 = num2;
        num2 = num3;
    }
}