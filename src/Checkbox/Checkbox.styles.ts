import {createUseStyles} from "react-jss";
import {StyleCheckboxProps} from "./Checkbox.types";
import {UI} from "../theme.white";

const colorSwitch = <T extends {theme: UI} & StyleCheckboxProps>({theme, disabled = false, color = 'default'}: T) => {
    if (disabled) return theme.colors.gray;
    if (color === 'primary') return theme.colors.blue;
    if (color === 'secondary') return theme.colors.red;
    return theme.colors.black;
}

const useStyle = createUseStyles<string, StyleCheckboxProps, UI>({
    text: {
        fontFamily: ({theme}) => theme.font.family,
        fontWeight: ({theme}) => theme.font.weight.normal,
        fontSize: ({theme}) => theme.font.size.normal,
    },
    label: {
        cursor: ({disabled = false}) => disabled ? 'not-allowed' : 'pointer',
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginRight: ({placement = 'left'}) => placement === 'left' ? 9 : 0,
        marginLeft: ({placement = 'left'}) => placement === 'right' ? 9 : 0,
        flexDirection: ({placement = 'left'}) => placement === 'left' ? 'row': 'row-reverse',
    },
    drawer: {
        display: 'block',
        width: 18,
        height: 18,
        '& svg': {
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            stroke: colorSwitch,
            strokeWidth: 1.5,
            transition: ({theme}) => ['all', theme.transaction, 'ease'],
            '& path': {
                transition: ({theme}) => ['all', theme.transaction, 'ease'],
                strokeDasharray: 60,
                strokeDashoffset: ({active = false}) => active ? 60 : 0,
            },
            '& polyline': {
                transition: ({theme}) => ['all', theme.transaction, 'ease'],
                strokeDasharray: 22,
                strokeDashoffset: ({active = false}) => active ? 42 : 66,
            },
        },
    },
    input: {
        display: 'none',
        visibility: 'hidden',
    },
    box: {
        padding: 9,
        display: 'block',
    },
}, {name: 'checkbox'})

export default useStyle;