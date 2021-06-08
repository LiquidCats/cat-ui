import {createUseStyles} from "react-jss";
//
import {UI} from "../theme.white";
import {ContainerProps} from "./Container.types";

const useStyles = createUseStyles<string, ContainerProps, UI>({
    container: ({theme, fixed, maxWidth}) => {
        const size = maxWidth || 'xl'
        const width = theme.screen.size[size]
        const key = fixed ? 'width' : 'maxWidth'

        return {
            display: "block",
            boxSizing: "border-box",
            margin: '0 auto',
            [key]: width
        }
    }
})

export default useStyles;