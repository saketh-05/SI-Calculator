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
});


document.getElementById("homebutton").addEventListener("click",function(){
    window.location.href="index.html";
});

function function2(){
    var inp=document.getElementById("input1").value;
    var inp1=document.getElementById("input2").value;
    var inp2=document.getElementById("input3").value;
    var inp3=document.getElementById("input4").value;

   var output= inp * [ ( 1 + ( inp2 / ( 100 * inp3 ) ) ) ** ( inp3 * inp1 ) - 1 ];
   var outputexp=document.getElementById("output");
   outputexp.innerHTML= Math.round(output);

   var sum = Number(inp) + output ;
   var finalres=document.getElementById("finalresult");
   finalres.innerHTML=Math.round(sum);
}