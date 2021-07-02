import {createUseStyles} from "react-jss";
import {UI} from "../theme.white";
import {GridProps} from "./Grid.types";

const useStyles = createUseStyles<string, GridProps, UI>({
    base: {
        justifyContent: ({justify}) => justify,
        alignItems: ({alignItems}) => alignItems,
        alignContent: ({alignContent}) => alignContent,
        flexDirection: ({direction}) => direction,
        flexWrap: ({wrap}) => wrap,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        width: ({theme, spacing = 2}) => `calc(100% + ${theme.grid.padding * spacing}px * 2)`,
        margin: ({theme, spacing= 2}) => [-(theme.grid.padding * spacing)],
    },
    item: ({theme, spacing = 4}) => {
        const breakpoints = theme?.grid?.breakpoints?.keys || [];
        const breakpointValues: any = theme?.grid?.breakpoints?.values || [];
        const sizes = generateSizes(theme?.grid.columns);
        const columns = theme?.grid?.columns || 12;
        return {
            margin: 0,
            flexGrow: 1,
            boxSizing: 'border-box',
            padding: theme.grid.padding * spacing,
            ...breakpoints.reduce<{[k: string]: any}>((globalStyles, breakpoint) => {
                return sizes.reduce((globalStyles, size: any) => {
                    const name = `&.${breakpoint}-${size}`;
                    const value = breakpointValues[breakpoint];
                    const width = percentage(size, columns);
                    const media = mediaUp(value);

                    if (!globalStyles[name]) globalStyles[name] = {}

                    const styles = (size === true)
                        ? {flexGrow: 1, maxWidth: '100%', flexBasis: 0}
                        : (size === 'auto')
                            ? {flexGrow: 0, maxWidth: 'none', flexBasis: 'auto'}
                            : {flexGrow: 0, maxWidth: width, flexBasis: width}

                    0 === value ? globalStyles[name] = styles : globalStyles[name][media] = styles

                    return globalStyles
                }, globalStyles);
            }, {})
        }
    },
}, {name: 'grid'})

const mediaUp = (w: number) => `@media (min-width: ${w}px)`
const generateSizes = (c: number) => ['auto', true, ...Array(c).fill(0, 0).map((v, i) => i + 1)]
const percentage = (s: number, c: number = 12) => `${Math.round((s / c) * 10e7) / 10e5}%`

export default useStyles;