// const lista= ['bela', 'morta', 'vela', 1234]
// // document.getElementById('texto').innerHTML = 
// // 'esses são os numeros: '+lista[3] 
// lista.push('dalton')
// lista[lista.length]= 'mulherengo';

// // the Array methods
//  document.getElementById('texto').innerHTML= lista.join(' - ') 
//  lista.pop() 'this method will remove the last item in our list'
// lista.shift() will remove the first item of our list and when you do
// that all the items index will be changed
// lista.unshift() this one will add an item on the first position of our 
// list
// lista.splice(the position where you want to add something, what you want to
//     delete, and finally what you want to add 'and it can add more than one thing
//     you just need to separate with comma'
// )
// lista.concat(lista2) this command will join two list into one just 
// but we need to do like this:
// lista and lista1
// superlista= lista.concat(lista1, lista2) it can work with more than
// two lists
// lista.slice(position) will devide the list into two pieces
// and to be real specific just do  this lista.slice(2,6) 
// lista.sort() it will put the list items in alphabetical order
// base note sort just works for letters
// now if you want to sort number or int type we gonna do like this:
// lista.sort(function(a,b){return a-b}) and if you wanna do the Reverse 
// just the to return b-a 
// lista.reverse() will put them in the reverse mode

// const lista2= [1,2,40, 20, 400,1021, 10, 0]

// function max_number(Array){
//     return Math.max.apply(null, Array)
// } // this func will allow us to grab the biggest number
// console.log(max_number(lista2))

// function min_number(Array){
//     return Math.min.apply(null, Array)
//     // this is for the min
// }
// console.log(min_number(lista2))

// // well to show numbers that are bigger than certain numbers we're going to
// // use the command filter() justa like this:

// const lista3= lista2.filter(maoir_do);

// function maoir_do(value, index, Array){
//     return value < 5;
// }
// console.log(lista3)

// if and else lessons 
var interruptor , hora
// interruptor = 'off';

// if (interruptor=='on'){
//     document.getElementById('texto').innerHTML=
//     'the lamp is on';
// } else {
//     document.getElementById('texto').innerHTML=
//     'the lamp is off'
// }

// hora= 1

// if (hora< 12){
//     document.getElementById('texto').innerHTML= 
//     'Good Morning!!';
// } else if (hora >= 18) {
//     document.getElementById('texto').innerHTML= 
//     'Good Evening!!';
// } else {
//     document.getElementById('texto').innerHTML= 
//     'Good Afternoon!!';
// }

//  function verificar(){
//    var nome= document.getElementById('nome').value
//     if (nome==''){
//         document.getElementById('texto').innerHTML= 
//         'name is required'
//     } else {
        
//         document.getElementById('texto').innerHTML= nome
//         console.log(nome)
//     }
// }

// function weekdate(){
//     var dia = new Date().getDay();
//     switch (dia){
//         case 0:
//             document.getElementById('texto').innerHTML=
//             'Sunday';
//             break
//         case 1:
//             document.getElementById('texto').innerHTML=
//             'Monday';
//             break
//         default:
//             document.getElementById('texto').innerHTML=
//             'Wrong value. pleas try agin!';



//     }
// }
// function check(){
//     var color = document.getElementById('color').value;
//     color = color.toLowerCase();// will lowercase the word
//     switch (color){
//         case 'green':
//             document.body.style.backgroundColor= 'green';
//             break
//         case 'blue':
//             document.body.style.backgroundColor= 'blue';
//             break
//         case 'yellow':
//             document.body.style.backgroundColor= 'yellow';
//             break
//         default:
//             document.getElementById('texto').innerHTML=
//             'The '+ color +' color is not available';
//             document.body.style.backgroundColor= 'white';


//     }
// }

// reapet ties

// for ( i=0; i<11; i++){
//    if (i===10){
//      document.getElementById('texto').innerHTML +=i
//    } else{
//     document.getElementById('texto').innerHTML +=i+'-'
//    }
  
// }
//  const carros= ['gol','chev','brl','bently','mercedes']
//  var len= carros.length;

 
//   for (i=0; i<len; i++){
//     if (i===len-1){
//     document.getElementById('texto').innerHTML +=
//     carros[i]
//     } else {
//         document.getElementById('texto').innerHTML +=
//         carros[i]+' - '
//     }
    

//   }

// for (i=2025; i>1999; i--){
//     document.getElementById('ano').innerHTML +=
//     ' <option  value="'+i+'">'+i+ '</option>'
// }

// classes in javascript
class Carro{
    constructor(valor1, valor2, valor3){
        this.marca= valor1;
        this.modelo= valor2;
        this.ano= valor3;


    }
    buzina(){
        return this.marca + ' Biiiiiii';
    }
}
 const mercedes= new Carro('Mercedes Benz', 'AMG G63', 2020);
 const lambo = new Carro('Lamborghini', 'Aventador SV', 2017)

let date = new Date();
var month= date.getMonth();

console.log(month)