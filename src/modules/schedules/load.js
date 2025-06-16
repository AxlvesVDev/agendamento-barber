import { hoursLoad } from "../form/hours-load.js"

// seleciona o input de data. 
const selectedDate = document.getElementById("date")

export function schedulesDay(){
    // ontem a data do input.
    const date = selectedDate.value
    
    
    
    // Busca na API os agendamentos para carregar do lado direito da tela.
    //Renderiza as horas disponiveis
    

hoursLoad({ date })
    // Os horários disponiveis (horário futuro + nao agendado) do lado esquerdo (form)
}
