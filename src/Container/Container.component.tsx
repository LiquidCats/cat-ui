import React, {forwardRef, HTMLAttributes} from "react";
import {ContainerProps} from "./Container.types";
import useStyles from './Container.styles';
import {useTheme} from "react-jss";
import {UI} from "../theme.white";
import clsx from "clsx";

const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & ContainerProps>((props, ref) => {
    const {
        children,
        className,
        fixed = false,
        maxWidth = 'xl',
        ...rest
    } = props

    const theme = useTheme<UI>();
    const cls = useStyles({theme, fixed, maxWidth});

    return <div className={clsx(cls.container, className)} ref={ref} children={children} {...rest}/>
})

export default Container;