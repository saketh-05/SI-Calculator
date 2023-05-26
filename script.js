function function1(){
    var input= document.getElementById("userinput1").value;
    var input1= document.getElementById("userinput2").value;  
    var input2= document.getElementById("userinput3").value;

var  result=(input * input1 * input2) / 100;
var resultExp=document.getElementById("output");
resultExp.innerHTML= result;
}

document.getElementById("firstbutton").addEventListener("click",function(){
   window.location.href="newpage.html";
})


document.getElementById("homebutton").addEventListener("click",function(){
    window.location.href="index.html";
})
