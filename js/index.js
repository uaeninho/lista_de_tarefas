// var a= 1;
// var b= 7;
// var c= a+b;
// console.log(c);

// javascript it's case sensitive
// var PESSOA= 'bela';
// var pessoa= 'short';
// console.log(PESSOA)

// variables being declarated
var pote, a, b, c;
pote= 'bombom';
a= 'dalton';
b= 'uaene';
c= a+' '+b
console.log(c)
// alert(pote);

// operators in javascripts

// aritimetic operators are +, -, /, *;

// comparison operators !=(means different onemore 
// !== include the type too)
// comparison= (a==b);
// console.log(comparison)

// condicional operators
// var idade, eleitor;
// idade= 50;
// eleitor= (idade<18) ? "can not  vote": 'can vote' 
// result= (idade> 30 && idade <50) 
// // this && means and
// result2= (idade===20 || idade === 50)
// console.log(result)
// console.log(result2 +' você está admitido')
// // and ! this operator means no

// function lessons
function soma(value1, value2){
    return value1+value2;
}
// // document.getElementById('texto').innerHTML= 
// //     soma(10,5);

//     function hello(){
//         var show
//         show= document.getElementById('texto').innerHTML=
//         'hello world I am Dalff it is a pleasure to know you guys';
//         return show
//     }

// const carro = {
//     marca: 'ford',
//     modelo: 'mustang',
//     placa: 'avc-144',
//     start: function(){
        
//         return 'started'
        
//     } 
// }
// console.log(carro.start())


// event in javascripts
function showinfo(){
    var mostrar
    // mostrar= document.getElementById('texo').innerHTML=
    // 'foi acionado';
    document.body.style.color= 'green'
   
}
function red(){
    var div= document.getElementById('test');
    div.style.background= 'red'
}
function back(){
    var div= document.getElementById('test');
    div.style.background= 'greenyellow'
}
function change(){
    var campo =document.getElementById('texto2');
    campo.style.borderBlockStartColor= 'red'
    campo.value= ''
    
}