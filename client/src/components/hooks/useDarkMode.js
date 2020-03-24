import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('darkmode', true)

    useEffect(() => {
        let bodyclass = document.querySelector('body');
        if(value) {
            bodyclass.classList.add('dark-mode');
        } else {
            bodyclass.classList.remove('dark-mode');
        }
    })
    return [value, setValue]
}