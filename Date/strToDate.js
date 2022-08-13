


export function strToDate(str) {
    let currentValue = str.split('/')
    let day = currentValue[1]
    let month = currentValue[0]
    let year = currentValue[2]
    return new Date(`${day}/${month}/${year}`)
}

