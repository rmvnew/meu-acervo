import { strToDate } from "./strToDate.js";


const currentDate = strToDate('02/07/2022')

export function dateToStr(date) {

    const dateReceived = new Date(date)

    let day = `${dateReceived.getDate()}`.length == 1 ? `0${dateReceived.getDate()}` : dateReceived.getDate()
    let month = `${dateReceived.getMonth()}`.length == 1 ? `0${dateReceived.getMonth()}` : dateReceived.getMonth()
    let year = dateReceived.getFullYear()

    return `${day}/${month}/${year}`

}

console.log(dateToStr(currentDate));