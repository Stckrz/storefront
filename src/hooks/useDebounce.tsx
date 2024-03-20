import { useState, useRef, useEffect } from 'react';

export const useDebounce = (value: string, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState("");
	const timer = useRef<ReturnType<typeof setInterval>>();

	useEffect(() => {
		timer.current = setTimeout(() =>
			setDebouncedValue(value), delay)

		return () => {
			clearTimeout(timer.current)
		}

	}, [value, delay])

	return debouncedValue;
}
