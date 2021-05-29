import React, {forwardRef, memo, SVGAttributes} from "react";
import {SvgIcon} from "./index";
import {SvgIconProps} from "./SvgIcon.types";

export default function createSvgIcon(path: string, displayName: string) {
    const Component = (props: SVGAttributes<SVGSVGElement> & SvgIconProps, ref: any) => (
        <SvgIcon ref={ref} {...props}>{path}</SvgIcon>
    )

    if (process.env.NODE_ENV !== 'production') {
        Component.displayName = `${displayName}Icon`;
    }

    return memo(forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement> & SvgIconProps>(Component));
}