import React, { Component } from 'react';
import './Input.css';
import Icon from '@material-ui/core/icon';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.er = this.props.error ? " error " : "";
        this.startIcon = this.props.startIcon ? " has-start-icon " : "";
        this.endIcon = this.props.endIcon ? " has-end-icon " : "";
        this.size = this.props.size ? " " + this.props.size : "";
        this.fullWith = this.props.fullWith ? " full-with " : "";
    }
    render() {
        return(
            <div className={
                "input-field" +
                 this.er +
                 this.startIcon +
                 this.endIcon +
                 this.size +
                 this.fullWith
                }>
                    <label>Label</label>
                    <br/>
                    {this.props.multiline ? (
                        <textarea rows={this.props.row} />
                    ) : (
                        <input 
                           type="text"
                           placeholder="Placeholder"
                           disabled={this.props.disabled} />
                    )}
                    {this.props.helperText ? (
                        <>
                            <br/>
                            <span className="helper">{this.props.helperText}</span>
                        </>
                    ) : null }

                    {this.props.startIcon ? (
                        <Icon className="start-icon">{this.props.startIcon}</Icon>
                    ) : null}
                    {this.props.endIcon ? (
                        <Icon className="end-icon">{this.props.endIcon}</Icon>
                    ) : null}
                </div>
        );
    }
}
