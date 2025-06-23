import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// carregar a data atual 
selectedDate.value = inputToday

// definindo data minima 
selectedDate.min = inputToday


form.onsubmit = async (event) => { 
   
   // Previne o comportamento padrão de carregar a página. 

    event.preventDefault()


    try {
        // recuperando o nome do cliente.
        const name = clientName.value.trim()

        if(!name) { 
            return alert ("Informe o nome do cliente!")
        }

        // recupera o horário selecionado 
        const hourSelected = document.querySelector(".hour-selected")
        
        if(!hourSelected) { // estou dizendo (se nao selecionar horario, exibe esse alerta:)
            return alert ("Selecione um horário.")
        }


        // recupera somente a hora 
        const [hour] = hourSelected.innerText.split(":")

        // insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour"
        )

        // gera um ID
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when,
        })


    } catch (error) {
        alert ("Não foi possível agendar.")
        console.log(error)
    }
 }

