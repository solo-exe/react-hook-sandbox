import { useState } from 'react'

function useLocalStorage(key, initialValue) {

    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue))


    const setValue = (value) => {
        // check if function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value
        //set tot state

        //Ooohh, it's like because in the setState of a hook like useState cn receive it's previous value
        setLocalStorageValue(value) // I DO NOT UNDERSTAND HOW THIS WORKS YET

        // set to local storage
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    return [localStorageValue, setValue]
}

const getLocalStorageValue = (key, initialValue) => {
    const itemFromStorage = localStorage.getItem(key)
    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage