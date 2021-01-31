import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function Theme(props) {
	const [theme, setTheme] = useState(false);
	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			{props.children}
		</ThemeContext.Provider>
	);
}
