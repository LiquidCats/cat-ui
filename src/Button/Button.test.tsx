import {render} from "@testing-library/react";
import Button from ".";

describe('<Button/>', () => {
    it('matches snapshot', () => {
        const {getByRole} = render(<Button>click</Button>);
        const btn = getByRole('button');
        expect(btn).toMatchSnapshot()
    })
})