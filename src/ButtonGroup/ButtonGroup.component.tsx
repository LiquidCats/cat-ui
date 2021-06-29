import React, {forwardRef, HTMLAttributes, MouseEvent} from "react";
import clsx from "clsx";
import {useTheme} from "react-jss";
//
import {UI} from "../theme.white";
import useStyles from './ButtonGroup.styles';
import {ButtonGroupProps} from './ButtonGroup.types';
import ButtonGroupContext from "./ButtonGroup.context";

const ButtonGroup = forwardRef<HTMLDivElement, HTMLAttributes<ButtonGroupProps>>((props, ref) => {
    const {
        className,
        children,
        onClick = (e: MouseEvent) => {},
        ...rest
    } = props
    const theme = useTheme<UI>();
    const cls = useStyles({theme});
    const classes = clsx(cls.group, className);
    return <div {...rest} className={classes} ref={ref}>
        <ButtonGroupContext.Provider value={{onClick, grouped: true}}>
            {children}
        </ButtonGroupContext.Provider>
    </div>
})

export default ButtonGroup;