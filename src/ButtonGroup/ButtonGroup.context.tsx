import {createContext, MouseEvent} from "react";

const ButtonGroupContext = createContext({
    onClick: (e: MouseEvent) => {}
});

export default ButtonGroupContext