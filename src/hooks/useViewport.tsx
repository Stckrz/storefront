import { useEffect, useState } from 'react';

export const useViewport = () => {
	const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
			console.log(width)
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [window.innerWidth])

	return { width }
}
