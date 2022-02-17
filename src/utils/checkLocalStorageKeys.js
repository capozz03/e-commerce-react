
export const checkLocalStorageKeys = () => {
    let arr = [];
    for (let i = 0, len = localStorage.length; i < len; i++ ) {
        let element = JSON.parse(localStorage.getItem(localStorage.key(i)))
        if (typeof element === 'object' && element !== null) {
            arr.push(element)
        }
    }
    return arr
}

 