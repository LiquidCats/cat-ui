import React, {forwardRef} from "react";
import {useTheme} from "react-jss";
//
import {ButtonProps} from './Button.types';
import useStyles from './Button.styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const theme = useTheme();
    const cls = useStyles(theme);
    //
    return <button ref={ref}>test</button>
});

export default Button;