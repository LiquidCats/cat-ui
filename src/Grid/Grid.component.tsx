import React, {forwardRef, HTMLAttributes, memo} from "react";
import {useTheme} from "react-jss";
import clsx from "clsx";
//
import {UI} from "../theme.white";
import {GridProps} from "./Grid.types";
import useStyles from "./Grid.styles";

const Grid = memo(
    forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & GridProps>((props, ref) => {
        const {
            children,
            className,
            container = false,
            item = false,
            spacing = 2,
            justify = 'center',
            alignItems = 'flex-start',
            alignContent = 'flex-start',
            direction = 'row',
            wrap = 'wrap',
            xs  = false,
            sm  = false,
            md  = false,
            lg  = false,
            xl  = false,
            xxl = false,
            ...rest
        } = props;

        const theme = useTheme<UI>();
        const styles = useStyles({theme, spacing, justify, alignItems, alignContent, direction, wrap, xs, sm, md, lg, xl, xxl, ...rest});
        const classes = clsx(
            styles.base,
            container && styles.container,
            item && styles.item,
            (item && xs) && `xs-${xs}`,
            (item && sm) && `sm-${sm}`,
            (item && md) && `md-${md}`,
            (item && lg) && `lg-${lg}`,
            (item && xl) && `xl-${xl}`,
            (item && xxl) && `xxl-${xxl}`,
            className,
        );

        return <div className={classes}
                    ref={ref}
                    children={children}
                    {...rest}/>
    })
)

if (process.env.NODE_ENV !== 'production') {
    Grid.displayName = 'Grid'
}

export default Grid