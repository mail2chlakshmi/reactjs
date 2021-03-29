import React, { Component } from 'react';
import './Button.css';
import Icon from "@material-ui/core/icon";

class Button extends Component {
    constructor(props) {
        super(props);
        this.color = this.props.color ? " btn-" + this.props.color : "";
        this.variant = this.props.variant ? " btn-" + this.props.variant : "";
        this.disableShadow = this.props.disableShadow ? " disableShadow" : "";
        this.size = this.props.size ? " btn-" + this.props.size : "";
    }
   render() {
       return(
           <div className="btn-content">
              <button className={
                  "btn" +
                  this.color +
                  this.variant +
                  this.disableShadow +
                  this.size
              }
              disabled={this.props.disabled}>
                  {this.props.startIcon ? (
                      <Icon className="start-icon">
                          {this.props.startIcon}
                      </Icon>
                  ) : (
                      ""
                  )}
                  {this.props.children}
                  {this.props.endIcon ? (
                      <Icon className="end-icon">
                          {this.props.endIcon}
                      </Icon>
                  ) : (
                      ""
                  )}
              </button>
           </div>
       );
   }
}

export default Button;