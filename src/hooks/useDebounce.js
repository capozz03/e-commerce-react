import { useEffect, useRef } from "react";

export const useDebounce = (callback, delay, query) => {
    const timer = useRef(null);

    const debouncedCallback = useEffect(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback()
        }, delay)
    }, [query, delay])

    return debouncedCallback;
}