import React, {memo} from "react";
import Grid from "./Grid";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Checkbox from "./Checkbox";
import Container from "./Container";

const Gallery = memo(() => (
    <Container>
        <Grid container>
            <Grid item md={4}>
                <h2>Weight</h2>
                <div><Button fixedWidth weight="small">small</Button></div>
                <div><Button fixedWidth weight="default">default</Button></div>
                <div><Button fixedWidth={180} weight="big">big with long text</Button></div>
            </Grid>
            <Grid item md={4}>
                <h2>Color</h2>
                <div><Button color="primary">primary</Button></div>
                <div><Button color="default">default</Button></div>
                <div><Button color="secondary">secondary</Button></div>
            </Grid>
            <Grid item md={4}>
                <h2>Variant</h2>
                <div><Button variant="outlined">outlined</Button></div>
                <div><Button variant="default">default</Button></div>
                <div><Button variant="text">text</Button></div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item md={4}>
                <ButtonGroup>
                    <Button color="primary" variant="default">test 3</Button>
                    <Button color="default" variant="default">test 2</Button>
                    <Button color="secondary" variant="default">test 1</Button>
                </ButtonGroup>
            </Grid>
            <Grid item md={4}>
                <ButtonGroup>
                    <Button color="primary" variant="outlined">test 3</Button>
                    <Button color="default" variant="outlined">test 2</Button>
                    <Button color="secondary" variant="outlined">test 1</Button>
                </ButtonGroup>
            </Grid>
            <Grid item md={4}>
                <ButtonGroup>
                    <Button color="primary" variant="text">test 3</Button>
                    <Button color="default" variant="text">test 2</Button>
                    <Button color="secondary" variant="text">test 1</Button>
                </ButtonGroup>
            </Grid>
            <Grid item md={4}>
                <ButtonGroup>
                    <Button color="primary" variant="default" disabled>test 3</Button>
                    <Button color="default" variant="default" disabled>test 2</Button>
                    <Button color="secondary" variant="default" disabled>test 1</Button>
                </ButtonGroup>
            </Grid>
            <Grid item md={4}>
                <ButtonGroup>
                    <Button color="primary" variant="outlined" disabled>test 3</Button>
                    <Button color="default" variant="outlined" disabled>test 2</Button>
                    <Button color="secondary" variant="outlined" disabled>test 1</Button>
                </ButtonGroup>
            </Grid>
            <Grid item md={4}>
                <ButtonGroup>
                    <Button color="primary" variant="text" disabled>test 3</Button>
                    <Button color="default" variant="text" disabled>test 2</Button>
                    <Button color="secondary" variant="text" disabled>test 1</Button>
                </ButtonGroup>
            </Grid>
        </Grid>

        <Grid container>
            <Grid item xs={12}>
                <Checkbox color="primary">primary</Checkbox>
                <Checkbox color="default">default</Checkbox>
                <Checkbox color="secondary">secondary</Checkbox>
                <Checkbox disabled>disabled</Checkbox>
            </Grid>
            <Grid item xs={12}>
                <Checkbox color="primary" placement="right">primary</Checkbox>
                <Checkbox color="default" placement="right">default</Checkbox>
                <Checkbox color="secondary" placement="right">secondary</Checkbox>
                <Checkbox placement="right" disabled>disabled</Checkbox>
            </Grid>
            <Grid item xs={12}>
                <Checkbox color="primary" selected>primary</Checkbox>
                <Checkbox color="default" selected>default</Checkbox>
                <Checkbox color="secondary" selected>secondary</Checkbox>
                <Checkbox selected disabled>disabled</Checkbox>
            </Grid>
        </Grid>

        <Grid container>
            <Grid item xs={12}>
                <Checkbox color="primary">primary</Checkbox>
                <Checkbox color="default">default</Checkbox>
                <Checkbox color="secondary">secondary</Checkbox>
                <Checkbox disabled>disabled</Checkbox>
            </Grid>
            <Grid item xs={12}>
                <Checkbox color="primary" placement="right">primary</Checkbox>
                <Checkbox color="default" placement="right">default</Checkbox>
                <Checkbox color="secondary" placement="right">secondary</Checkbox>
                <Checkbox placement="right" disabled>disabled</Checkbox>
            </Grid>
            <Grid item xs={12}>
                <Checkbox color="primary" selected>primary</Checkbox>
                <Checkbox color="default" selected>default</Checkbox>
                <Checkbox color="secondary" selected>secondary</Checkbox>
                <Checkbox selected disabled>disabled</Checkbox>
            </Grid>
        </Grid>
    </Container>
))


if (process.env.NODE_ENV !== 'production') {
    Gallery.displayName = 'Gallery'
}

export default Gallery;