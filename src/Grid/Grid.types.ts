export type GridSpacing = 0
    |1
    |2
    |3
    |4
    |5
    |6
    |7
    |9
    |10
export type GridAlignContent ='stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
export type GridAlignItems = 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'baseline'
export type GridDirection = 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
export type GridJustify = 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
export type GridWrap = 'nowrap'
    | 'wrap'
    | 'wrap-reverse'
export type GridSizing = false
    | 'auto'
    | true
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
export type GridBreakpoints = 'xs'|'sm'|'md'|'lg'|'xl'|'xxl';

export type GridWidthKey = {
    [k in GridBreakpoints]?: GridSizing
}
export type GridProps = {
    container?: boolean,
    item?: boolean,
    spacing?: GridSpacing,
    alignItems?: GridAlignItems,
    alignContent?: GridAlignContent,
    direction?: GridDirection,
    justify?: GridJustify,
    wrap?: GridWrap,
} & GridWidthKey;