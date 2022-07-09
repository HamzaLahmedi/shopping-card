var sum=document.getElementById("mytotal").innerText
var x=document.getElementById("totaal").innerText
var y=document.getElementById("totality").innerText

function summ(){
    var quantity =document.getElementById("quantity").value
    var price =document.getElementById("myprice").innerText
    x =(Number(price)*Number(quantity))
    if(Number(quantity)>0){
        console.log(Number(quantity))
    return document.getElementById("mytotal").innerText=x+""
}
else{
    return document.getElementById("mytotal").innerText=0+""
}
}
var sum=document.getElementById("mytotal").innerText

function summm(){
    var quantity =document.getElementById("quantite").value
    var price =document.getElementById("prix").innerText
    sum =(Number(price)*Number(quantity))
    if(Number(quantity)>0){
        console.log(Number(quantity))
    return document.getElementById("totaal").innerText=sum+""
}
else{
    return document.getElementById("totaal").innerText=0+""
}
}
function somme(){
    var quantity =document.getElementById("quan").value
    var price =document.getElementById("soum").innerText

    y =(Number(price)*Number(quantity))
    if(Number(quantity)>0){
        console.log(Number(quantity))
    return document.getElementById("totality").innerText=y+""
}
else{
    return document.getElementById("totality").innerText=0+""
}

}

function g_tot(){
    var t=Number(sum)+Number(x)+Number(y)
    return document.getElementById("general-total").innerText=t+""
}



