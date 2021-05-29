import React, {forwardRef, SVGAttributes} from "react";
import { SvgIconProps } from "./SvgIcon.types";
import clsx from "clsx";


const SvgIcon = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement> & SvgIconProps>((props, ref) => {
    const {
        src,
        className,
        viewBox = '0 0 24 24',
        size=16,
        color,
        children,
        ...rest
    } = props

    const classes = clsx(className)

    return <svg
        className={classes}
        focusable="false"
        viewBox={viewBox}
        stroke="currentColor"
        fill="currentColor"
        height={size}
        width={size}
        role='img'
        color={color}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        ref={ref}
        children={children}
    />
})

export default SvgIcon