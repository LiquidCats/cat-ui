import {createUseStyles} from "react-jss";
import {UI} from "../theme.white";
import {ButtonProps} from "./Button.types";
import {ButtonColorsEnum, ButtonWeightEnum} from "./Button.enums";

const useStyles = createUseStyles<string, ButtonProps & {grouped: boolean}, UI>({
    button: {
        margin: 8,
        display: 'inline-flex',
        boxShadow: 'border-box',
        position: 'relative',
        outline: 'none',
        alignItems: 'center',
        verticalAlign: 'middle',
        justifyContent: 'center',
        fontWeight: ({theme}) => theme.font.weight.bold,
        fontSize: ({theme}) => theme.font.size.small,
        fontFamily: ({theme}) => theme.font.family,
        borderRadius: ({theme}) => theme.border.radius.default,
        cursor: 'pointer',
        textTransform: 'uppercase',
        wordWrap: 'unset',
        transition: ({theme}) => theme.transaction,
        minWidth: ({theme, ...props}) => {
            if ('number' === typeof props.fixedWidth) return props.fixedWidth
            if (props.fixedWidth) return 140
            return 'auto'
        },
        padding: ({theme, ...props}) => {
            let value = [8, 21];
            if (ButtonWeightEnum.BIG === props.weight) value = [13, 21]
            if (ButtonWeightEnum.SMALL === props.weight) value = [5, 13]
            return [value]
        },
    },
    outlined: {
        border: ({theme, ...props}) => [[1, 'solid']],
        borderColor: ({theme, ...props}) => {
            if (ButtonColorsEnum.PRIMARY === props.color) return theme.colors.blue
            if (ButtonColorsEnum.SECONDARY === props.color) return theme.colors.red
            return theme.colors.black
        },
        color: ({theme, ...props}) => {
            if (ButtonColorsEnum.PRIMARY === props.color) return theme.colors.blue
            if (ButtonColorsEnum.SECONDARY === props.color) return theme.colors.red
            return theme.colors.black
        },
        //
        backgroundColor: 'transparent',
        '&:disabled': {
            cursor: "not-allowed",
            borderColor: ({theme}) => theme.colors.gray,
            color: ({theme}) => theme.colors.gray,
        },
        '&:disabled:hover': {
            borderColor: ({theme}) => theme.colors.gray,
            color: ({theme}) => theme.colors.gray,
            backgroundColor: "transparent",
        },
        '&:hover': {
            backgroundColor: ({theme, ...props}) => {
                if (ButtonColorsEnum.PRIMARY === props.color) return theme.backgrounds.blue
                if (ButtonColorsEnum.SECONDARY === props.color) return theme.backgrounds.red
                return theme.backgrounds.black
            },
        },
        '&:active': {
            transform: 'scale(0.98)',
        },
        '&:focus': {
            backgroundColor: ({theme, ...props}) => {
                if (ButtonColorsEnum.PRIMARY === props.color) return theme.backgrounds.blue
                if (ButtonColorsEnum.SECONDARY === props.color) return theme.backgrounds.red
                return theme.backgrounds.black
            },
        }
    },
    default: {
        border: 0,
        color: ({theme, ...props}) => {
            if (ButtonColorsEnum.DEFAULT === props.color) return theme.colors.black
            return theme.colors.white
        },
        backgroundColor: ({theme, ...props}) => {
            if (ButtonColorsEnum.PRIMARY === props.color) return theme.colors.blue
            if (ButtonColorsEnum.SECONDARY === props.color) return theme.colors.red
            return theme.colors.white
        },
        boxShadow: '0 0 1px rgba(0, 0, 0, 0.15), ' +
            '0px 1px 1px rgba(0, 0, 0, 0.03), ' +
            '0px 1px 2px rgba(0, 0, 0, 0.04), ' +
            '0px 2px 3px rgba(0, 0, 0, 0.05), ' +
            '0px 3px 5px rgba(0, 0, 0, 0.06)',
        '&:disabled': {
            cursor: "not-allowed",
            color: ({theme}) => theme.colors.gray,
            backgroundColor: ({theme}) => theme.backgrounds.gray,

        },
        '&:disabled:hover': {
            color: ({theme}) => theme.colors.gray,
            backgroundColor: ({theme}) => theme.backgrounds.gray,
            boxShadow: '0 0 1px rgba(0, 0, 0, 0.15), ' +
                '0px 1px 1px rgba(0, 0, 0, 0.03), ' +
                '0px 1px 2px rgba(0, 0, 0, 0.04), ' +
                '0px 2px 3px rgba(0, 0, 0, 0.05), ' +
                '0px 3px 5px rgba(0, 0, 0, 0.06)',
        },
        '&:hover': {
            boxShadow: '0 0 1px rgba(0, 0, 0, 0.15), ' +
                '0px 1px 1px rgba(0, 0, 0, 0.03), ' +
                '0px 1px 2px rgba(0, 0, 0, 0.04), ' +
                '0px 2px 3px rgba(0, 0, 0, 0.05), ' +
                '0px 3px 5px rgba(0, 0, 0, 0.06), ' +
                '0px 5px 8px rgba(0, 0, 0, 0.07)',
        },
        '&:active': {
            transform: 'scale(0.98)',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0.15), ' +
                '0px 1px 1px rgba(0, 0, 0, 0.03), ' +
                '0px 1px 2px rgba(0, 0, 0, 0.04), ' +
                '0px 2px 3px rgba(0, 0, 0, 0.05)',
        },
        '&:focus': {
            boxShadow: '0 0 1px rgba(0, 0, 0, 0.15), ' +
                '0px 1px 1px rgba(0, 0, 0, 0.03), ' +
                '0px 1px 2px rgba(0, 0, 0, 0.04), ' +
                '0px 2px 3px rgba(0, 0, 0, 0.05), ' +
                '0px 3px 5px rgba(0, 0, 0, 0.06), ' +
                '0px 5px 8px rgba(0, 0, 0, 0.07)',
        }
    },
    text: {
        border: 0,
        color: ({theme, ...props}) => {
            if (ButtonColorsEnum.PRIMARY === props.color) return theme.colors.blue
            if (ButtonColorsEnum.SECONDARY === props.color) return theme.colors.red
            return theme.colors.black
        },
        backgroundColor: 'transparent',
        '&:disabled': {
            cursor: "not-allowed",
            color: ({theme}) => theme.colors.gray,
            backgroundColor: "transparent",
        },
        '&:disabled:hover': {
            color: ({theme}) => theme.colors.gray,
            backgroundColor: "transparent",
        },
        '&:hover': {
            backgroundColor: ({theme, ...props}) => {
                if (ButtonColorsEnum.PRIMARY === props.color) return theme.backgrounds.blue
                if (ButtonColorsEnum.SECONDARY === props.color) return theme.backgrounds.red
                return theme.backgrounds.black
            },
        },
        '&:active': {
            transform: 'scale(0.98)',
        },
        '&:focus': {
            backgroundColor: ({theme, ...props}) => {
                if (ButtonColorsEnum.PRIMARY === props.color) return theme.backgrounds.blue
                if (ButtonColorsEnum.SECONDARY === props.color) return theme.backgrounds.red
                return theme.backgrounds.black
            },
        }
    },
});

export default useStyles;