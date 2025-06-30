
import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"


const periods = document.querySelectorAll(".period")

// vou gerar um evento de clique para cada lista (manhã, tarde, noite). 
periods.forEach((periods) => { 
 // captura o evento de clique na lista 
 periods.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")) { 
        // obtem a li pai do elemento clicado. 
        const item = event.target.closest("li")

        // pega o id do agendamento para remover 
        const { id } = item.dataset

        // confirma o id selecionado
        if ( id ) { 
            // confirma se o usuario quer cancelar 
            const isConfirm = confirm("Tem certeza que deseja cancelar o corte?")
       
            if (isConfirm) { 
                //faz a requisição na API para cancelar 
            await scheduleCancel({id})

            //Recarrega a lista. 
            schedulesDay()
        }
       
       
        } 
    }
 })



})