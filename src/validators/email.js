export const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (value == "") {
        return true
    } else if (!regex.test(value)) {
        return true
    } else {
        return false
    }
}
