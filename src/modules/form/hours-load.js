import dayjs from "dayjs"

import { openingHours } from "../../util/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) { 
    // limpa a lista de horários. 
    hours.innerHTML = ""


    const opening = openingHours.map((hour) => {
        // recupera somente a hora. 
        const [scheduleHour] = hour.split(":")
      

        // adiciona hora e data e vê se está no passado. 
         const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
   
   
        return { 
            hour,
            available: !isHourPast, 
        }
     
    })

    // Renderizar os horários
    opening.forEach (({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unvailable")

        li.textContent = hour 

        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        }else if (hour === "13:00") { 
            hourHeaderAdd("Tarde")
        }else if (hour === "18:00") { 
            hourHeaderAdd("Noite")
        }
        
        
            hours.append(li)
    })

    // adiciona o evento de click nos horários disponiveis
    hoursClick()

}


function hourHeaderAdd(title) { 
     const header = document.createElement("li")
     header.classList.add("hour-period")
     header.textContent = title 

     hours.append(header)
}