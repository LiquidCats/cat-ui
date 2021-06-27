import {createUseStyles} from "react-jss";
import {ButtonGroupProps} from "./ButtonGroup.types";
import {UI} from "../theme.white";

const useStyles = createUseStyles<string, ButtonGroupProps, UI>({
    group: {
        '& > button': {
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
        },
        '& > button:first-child': {
            borderRight: 0,
            borderRadius: ({theme}) => [
                [theme.border.radius.default, 0, 0, theme.border.radius.default]
            ],
            marginLeft: 8,
        },
        '& > button:last-child': {
            borderLeft: 0,
            borderRadius: ({theme}) => [
                [0, theme.border.radius.default, theme.border.radius.default, 0]
            ],
            marginRight: 8,
        },
    }
})

export default useStyles;