import dayjs from "dayjs"

import { openingHours } from "../../util/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) { 
    // limpa a lista de horários. 
    hours.innerHTML = ""

    // obtem a lista de horários ocupados. 
    const unvailableHours = dailySchedules.map((schedule) => 
        dayjs(schedule.when).format("HH:mm")
)

    console.log(unvailableHours)

    const opening = openingHours.map((hour) => {
        // recupera somente a hora. 
        const [scheduleHour] = hour.split(":")
      

        // adiciona hora e data e vê se está no passado. 
         const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
   

         const available = !unvailableHours.includes(hour) && !isHourPast
   
        return { 
            hour,
            available
        }
     
    })

    // Renderizar os horários
    opening.forEach (({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

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