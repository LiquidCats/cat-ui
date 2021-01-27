export type ButtonWeight = "small"|"default"|"big";
export type ButtonVariants = "outlined"|"default"|"text";
export type ButtonColors = "primary"|"default"|"secondary";

export type ButtonProps = {
    weight: ButtonWeight,
    variant: ButtonVariants,
    color: ButtonColors,
};