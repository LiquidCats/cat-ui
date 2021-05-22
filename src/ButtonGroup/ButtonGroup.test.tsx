import {render} from "@testing-library/react";
import ButtonGroup from ".";

describe('<ButtonGroup/>',  () => {
    it('matches snapshot', () => {
        const {getByRole} = render(<ButtonGroup>test</ButtonGroup>);
        const group = getByRole('div');
        expect(group).toMatchSnapshot()
    })
})