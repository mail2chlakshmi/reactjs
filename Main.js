import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.css';
import Colors from './Colors';
import Typography from './Typography';
import Buttons from './Buttons';
import Inputs from './Inputs';
import Inputsreact from './Inputsreact';
import Inputsform from './Inputsform';
import Spaces from './Spaces';
import Grid from './Grid';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/">
                       <h1>Home</h1>
                    </Route>
                    <Route path="/Colors">
                        <Colors />
                    </Route>
                    <Route path="/Typography">
                        <Typography />
                    </Route>
                    <Route path="/Buttons">
                        <Buttons />
                    </Route>
                    <Route path="/Inputs">
                        <Inputs />
                    </Route>
                    <Route path="/Inputsreact">
                        <Inputsreact />
                    </Route>
                    <Route path="/Inputsform">
                        <Inputsform />
                    </Route>
                    <Route path="/Spaces">
                       <Spaces />
                    </Route>
                    <Route path="/Grid">
                        <Grid />
                    </Route>
                </Switch>
            </main>
        );
    }
}

export default Main;