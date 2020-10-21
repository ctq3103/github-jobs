import theme from 'styled-theming';

export const mainColor = theme('mode', {
	light: 'hsl(235, 69%, 62%)',
	dark: 'hsl(235, 69%, 62%)',
});

export const bodyBgColor = theme('mode', {
	light: 'hsl(220, 18%, 97%)',
	dark: 'hsl(240, 28%, 14%)',
});

export const cardBgColor = theme('mode', {
	light: 'hsl(0, 0%, 100%)',
	dark: 'hsl(223, 48%, 16%)',
});

export const textPrimaryColor = theme('mode', {
	light: 'hsl(240, 6%, 50%)',
	dark: 'hsl(0, 0%, 100%)',
});

export const textSecondaryColor = theme('mode', {
	light: 'hsl(236.9,38.1%,30.4%)',
	dark: 'hsl(228,21.7%,95.5%)',
});

// export const buttonBackgroundColor = theme('mode', {
//   light: '#222',
//   dark: '#eee'
// });

// export const buttonTextColor = theme('mode', {
//   light: '#eee',
//   dark: '#222'
// });

//https://medium.com/@rossbulat/react-dark-mode-with-styled-theming-and-context-57557de6400

// //light
// main-soft-blue: hsl(235, 69%, 62%);
// //--text--
// dark-grayish-blue: hsl(240, 6%, 50%);
// very dark desaturated blue: hsl(236.9,38.1%,30.4%);
// //--bg--
// dark-gray: hsl(0, 0%, 63%);
//white

// //dark:
// main-soft-blue: hsl(235, 69%, 62%);
// //--text--
// light-grayish-blue: hsl(228,21.7%,95.5%);
//white
// //--bg--
// very-dark-blue: hsl(245, 62%, 15%);
// very dark desaturated blue: hsl(236.9,38.1%,30.4%);
