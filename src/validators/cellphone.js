export const validateCellphone = (value) => {
    var regex = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g
    console.log(!regex.test(value))
    if (value == "") {
        return true
    } else if (!regex.test(value) && value.lenght < 11) {
        return true
    } else {
        return false
    }
}
