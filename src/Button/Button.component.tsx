import React, {memo, ButtonHTMLAttributes, forwardRef, useContext} from "react";
import {useTheme} from "react-jss";
import clsx from "clsx";
//
import {ButtonProps} from './Button.types';
import useStyles from './Button.styles';
import {UI} from "../theme.white";
import {ButtonGroupContext} from "../ButtonGroup";

const Button = memo(
    forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>((props, ref) => {
        const groupContext = useContext(ButtonGroupContext)
        const theme = useTheme<UI>()
        //
        const {
            children,
            color = 'default',
            variant = 'default',
            weight = 'default',
            fixedWidth = false,
            className,
            onClick = groupContext.onClick,
            ...rest
        } = props;
        const cls = useStyles({theme, color, variant, weight, fixedWidth})
        //

        const classes = clsx(cls.button, cls[variant], className)
        //
        return <button className={classes} onClick={onClick} {...rest} ref={ref}>{children}</button>
    })
)

if (process.env.NODE_ENV !== 'production') {
    Button.displayName = 'Button'
}

export default Button;