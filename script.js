var addTarefa = document.getElementById("addTaskBtn")
var input = document.getElementById("taskInput")
var ul = document.getElementById("taskList")

addTarefa.addEventListener("click", adicionar);

function adicionar(){
    if(input.value == ""){
        alert("Campo vazio! Insira um nome para a tarefa!")
    }else{
        var li = document.createElement("li")
        var delTarefa = document.createElement("button")

        li.innerHTML = input.value 
        delTarefa.innerHTML = "x"
        ul.appendChild(li)
        li.appendChild(delTarefa)

        delTarefa.addEventListener("click", ()=>{
            li.remove();
        });
    }
}

// Próxima aula: Calculadora feita com função EVAL
// adicionar interruptor à lâmpada
// fazer portfolio 