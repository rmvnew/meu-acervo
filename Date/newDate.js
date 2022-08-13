

const currentDate = new Date
const dateTest = new Date('08/01/2022')

console.log(currentDate);

console.log(strToDate('08/01/2022'));

function strToDate(str) {
    let currentValue = str.split('/')
    let day = currentValue[1]
    let month = currentValue[0]
    let year = currentValue[2]
    return new Date(`${day}/${month}/${year}`)
}

