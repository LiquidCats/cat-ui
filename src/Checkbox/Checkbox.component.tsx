import React, {memo, forwardRef, useCallback, useState, MouseEvent, HTMLAttributes} from "react";
import {CheckboxProps} from "./Checkbox.types";
import useStyle from "./Checkbox.styles";
import {useTheme} from "react-jss";
import {UI} from "../theme.white";
import clsx from "clsx";
import {createSvgIcon} from "../SvgIcon";

const Mark = createSvgIcon(<><path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"/><polyline points="1 9 7 14 15 4"/></>, 'Mark');

const Drawer = memo(forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>((props, ref) => <span {...props} ref={ref}><Mark size={18} viewBox="0 0 18 18"/></span>))
if (process.env.NODE_ENV !== 'production') {
    Drawer.displayName = 'Drawer'
}

const Checkbox = memo(
    forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
        const {
            children,
            className,
            selected = false,
            onChange = () => {},
            disabled = false,
            inputProps = {},
            value,
            ...rest
        } = props

        const [active, setActive] = useState<boolean>(selected)

        const theme = useTheme<UI>();
        const cls = useStyle({theme, ...props, active})

        const labelClickHandler = useCallback((e: MouseEvent<HTMLLabelElement>) => {
            if (disabled) {
                return;
            }
            e.preventDefault();
            setActive(!active)
        }, [active, disabled])

        const labelClasses = clsx(cls.label, className)
        const textClasses = clsx(cls.text)
        const boxClasses = clsx(cls.box)
        const inputClasses = clsx(cls.input, inputProps?.className)
        const drawerClasses = clsx(cls.drawer)

        return <label ref={ref} className={labelClasses} onClick={labelClickHandler} {...rest}>
            <span className={boxClasses}>
                <input type="checkbox" {...inputProps} value={value} checked={active} className={inputClasses} onChange={onChange}/>
                <Drawer className={drawerClasses}/>
            </span>
            {children && <span className={textClasses}>{children}</span>}
        </label>
    })
)

if (process.env.NODE_ENV !== 'production') {
    Checkbox.displayName = 'Checkbox'
}

export default Checkbox;