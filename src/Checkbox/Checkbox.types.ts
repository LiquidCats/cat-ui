import {FormEventHandler, HTMLAttributes} from "react";

export type CheckboxPlacement = 'left'|'right'
export type CheckboxColors = 'primary'|'default'|'secondary'

export type CheckboxProps = {
    disabled?: boolean,
    selected?: boolean,
    color?: CheckboxColors,
    placement?: CheckboxPlacement,
    onChange?: FormEventHandler<HTMLInputElement>,
    inputProps?: HTMLAttributes<HTMLInputElement>,
    value?: any,
} & HTMLAttributes<HTMLLabelElement>;

export type StyleCheckboxProps = CheckboxProps & {active?: boolean};