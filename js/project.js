var input_info;
var texto = document.getElementById('entrada');
var main_task= document.getElementById('main-task');
var p_main= document.getElementById('p-main');
var contador=0;
var btn= document.getElementById('btn');




function pegar(){
    input_info=document.getElementById('entrada').value; 
   if (input_info==''){
    texto.value='Build by Dalff! Escreva uma Tarefa Porfavor'
    texto.style.color= 'red'
    texto.style.fontWeight='bold'
    btn.style.backgroundColor= 'red'
   
   } else {
    contador++
    var new_task= `<div class="task" id="${contador}">
            <div class="icon">
                <i class="material-icons"
                onclick="selected(${contador})" id="circle_${contador}">radio_button_unchecked</i>
            </div>
            <div class="text" id="txt_${contador}">
                ${input_info}  

            </div>
            <div class="clean">
                <button class="deletar" onclick="limpar(${contador})">
                    <i class="material-icons">delete</i>
                    Limpar</button>
            </div>
        </div> `
        p_main.innerHTML+= new_task
        
   }
      
}

// making the enter as add button
texto.addEventListener("keydown",
    function(event){
        if(event.keyCode===13){
            event.preventDefault();
            btn.click()
            // here we are making the work as our add button and command event.preventDefault() will prevent any error that may happen

        }
    }
)

function limpar(id){
   var tarefa= document.getElementById(id)
   tarefa.remove()

}

function focuss(){
    texto.value=''
    texto.style.color= 'black'
    texto.style.fontWeight= 'lighter'
    btn.style.backgroundColor= 'lightgreen'
}

function selected(id){
    var item = document.getElementById(id);
    var classes= item.getAttribute('class')
    var icon= document.getElementById('circle_'+id)
    var class2= icon.getAttribute('class')
    var txt= document.getElementById('txt_'+id)
    var class3= txt.getAttribute('class')
    

    // the line above will allow us knowing which _class is in our main html, so that we can make changes things like that  
    if(classes=='task'){
        item.classList.add('new-back')
        icon.classList.add('circle')
        icon.innerText= 'task_alt'
        txt.classList.add('riscado')
        // the line bellow will allow to send the checked item to all the way down parentNode it is reference the are where the children is and the appendChild means that it will add the child inside the parent area in this is it's child
        item.parentNode.appendChild(item)
    } else {
        item.classList.remove('new-back')
        icon.classList.remove('circle')
        icon.innerText= 'radio_button_unchecked'
        txt.classList.remove('riscado')
    }


   

}
