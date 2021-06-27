import {createContext, MouseEvent} from "react";

const ButtonGroupContext = createContext({
    onClick: (e: MouseEvent) => {},
    grouped: false,
});

export default ButtonGroupContext