const colors = {
    blue: '#3A5FD6',
    gray: '#adadb1',
    pink: '#FF606E',
    black: '#53515e',
    white: '#fff',
    red: '#CB1E3F',
}
const backgrounds = {
    gray: 'rgba(158,158,165,0.2)',
    blue: 'rgba(58, 95, 214, 0.2)',
    red: 'rgba(203, 30, 63, 0.2)',
    black: 'rgba(0, 0, 0, 0.2)',
}

export const whiteTheme = {
    font: {
        size: {
            small: '0.8rem',
            normal: '1rem',
            big: '1.3rem',
        },
        color: colors.black,
        family: "'Roboto', sans-serif",
        weight: {
            normal: 300,
            bold: 500,
            fat: 700,
        },
    },
    colors,
    backgrounds,
    border: {
        radius: {
            default: 5
        }
    },
    transaction: ".3s ease-in-out",
    grid: {
        padding: 4,
    },
    screen: {
        size: {
            xs: '100%',
            sm: 540,
            md: 720,
            lg: 960,
            xl: 1140,
            xxl: 1320,
        }
    }
};

export type UI = typeof whiteTheme;

export default whiteTheme;