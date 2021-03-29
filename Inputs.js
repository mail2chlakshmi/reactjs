import React, { Component } from 'react';
import './Inputs.css';
import Input from './Input';

export default class Inputs extends Component {
    render() {
        return (
            <div>
                <h1>Inputs Page</h1>
                <div className="input-gallery">
                    <div className="row">
                        <div className="code">Input</div>
                        <Input />
                    </div>
                    <div className="row">
                        <div className="code">Input error</div>
                        <Input error />
                    </div>
                    <div className="row">
                        <div className="code">Input disabled</div>
                        <Input disabled />
                    </div>
                    <div className="row">
                        <div className="code">Input helperText "some interesting text"</div>
                        <Input helperText="some interesting text" />
                    </div>
                    <div className="row">
                        <div className="code">Input helperText error</div>
                        <Input helperText="some interesting text" error />
                    </div>
                    <div className="row">
                        <div className="code">Input startIcon</div>
                        <Input startIcon="call" />
                    </div>
                    <div className="row">
                        <div className="code">Input endIcon</div>
                        <Input endIcon="call" />
                    </div>
                    <div className="row">
                        <div className="code">Input size sm</div>
                        <Input size="sm" />
                    </div>
                    <div className="row">
                        <div className="code">Input size md</div>
                        <Input size="md" />
                    </div>
                    <div className="row">
                        <div className="code">Input size lg</div>
                        <Input size="lg" />
                    </div>
                    <div className="row">
                        <div className="code">Input fullWith</div>
                        <Input fullWith />
                    </div>
                    <div className="row">
                        <div className="code">Input multiline row</div>
                        <Input multiline row="4" />
                    </div>
                </div>
            </div>
        );
    }
}