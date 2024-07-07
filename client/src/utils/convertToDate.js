export function convertToDate(timestamp) {
    const date = new Date(timestamp)

    const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const day = date.getDate()
    const month = allMonths[date.getMonth()]
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
}