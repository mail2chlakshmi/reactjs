import React, { Component } from 'react';
import './Inputsform.css';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Input } from 'semantic-ui-react';

const formValid = ({ formErrors, ...rest }) => {
     let valid = true;

     Object.values(formErrors).forEach(val => {
          val.length > 0 && (valid = false);
        });

        Object.values(rest).forEach(val => {
            val === null && (valid = false);
        });
          return valid;
};

class Inputsform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            formErrors: {
                userName: ""
            }
        };
    }

    handleSubmit = (event)=> {
        event.preventDefault();
        
        if (formValid(this.state)) {
            console.log(`
            --SUBMITTING--
             UserName: ${this.state.userName}
             `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "userName":
                formErrors.userName = 
                value.length < 3 ? "minimum 3 characters requried" : "";
              break;
            default:
              break;      
        }
        
         this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };   


    render() {
        const { formErrors } = this.state;

        return (
           <div className="wrapper">
              <div className="form-wrapper">
                  <h3>Inputs using Html and MaterialIO {this.state.userName}</h3>
                  <form onSubmit={this.handleSubmit} noValidate>
                      <div className="userName">
                          <TextField 
                            id="outlined-basic"
                            label="TextField Basic"
                            variant="outlined" />
                       </div>  
                       <div className="userName">   
                          <input 
                            type="text" 
                            placeholder="input Basic" 
                            name="userName"
                            onChange={this.handleChange} />
                      </div>
                      <div className="userName">
                          <TextField 
                             id="outlined-helperText" 
                            label="TextField Helper Text"
                            defaultValue="TextField Default Value"
                            Helper Text= "some important text"
                            variant="outlined" />
                      </div>
                      <div className="userName">
                          <input 
                            type="text" 
                            placeholder="no Helper Text in input" 
                            name="userName"
                            onChange={this.handleChange} />
                      </div>
                      <div className="userName">
                          <TextField
                             error
                             id="outlined-error-helper-text"
                             label="TextField Error"
                             defaultValue="TextField Error"
                             helperText="Incorrect entry."
                             variant="outlined" />
                      </div>
                      <div className="userName">
                          <input 
                            type="text" 
                            className={formErrors.userName.length > 0 ? "error" : null} 
                            placeholder="input Error Text" 
                            name="userName"
                            noValidate
                            onChange={this.handleChange} />
                            {formErrors.userName.length > 0 && (
                                <span className="errorMessage">{formErrors.userName}</span>
                            )}
                      </div>
                      <div className="userName">
                          <TextField 
                             disabled
                             id="outline-disabled"
                             label="TextField Disabled text"
                             defaultValue="TextField Disabled"
                             variant="outlined" />
                      </div>
                      <div className="userName">
                          <input 
                            disabled
                            type="text" 
                            placeholder="input disabled text" 
                            name="userName"
                            onChange={this.handleChange} />
                      </div>
                      <div className="userName">
                          <TextField 
                             id="outlined-icon-textfield"
                             label="TextField Start icon"
                             variant="outlined"
                             InputProps={{
                                 startAdornment: (
                                     <InputAdornment position="start">
                                         <AccountCircle />
                                     </InputAdornment>
                                 )
                             }} />
                      </div>
                      <div className="userName">
                           <Input 
                             icon='user' 
                             iconPosition='left' 
                             placeholder='Input user left' />
                      </div>
                      <div className="userName">
                          <TextField 
                             id="outlined-icon-textfield"
                             label="TextField End icon"
                             variant="outlined"
                             InputProps={{
                                 endAdornment: (
                                     <InputAdornment position="end">
                                         <AccountCircle />
                                     </InputAdornment>
                                 )
                             }} />
                      </div>
                      <div className="userName">
                           <Input  
                             icon='user' 
                             iconPosition='right' 
                             placeholder='Input user right' />
                      </div>
                      <div className="userName">
                         <TextField 
                          label="TextField Small Size" 
                          id="standard-size-small" 
                          size="small" 
                          variant="outlined" />
                      </div>
                      <div className="userName">
                         <input 
                           class="form-control form-control-sm" 
                           type="text" 
                           placeholder="form-control-sm" />
                      </div>
                      <div className="userName">
                         <TextField 
                          label="TextField normal Size" 
                          id="standard-size-normal" 
                          size="medium" 
                          variant="outlined" />
                      </div>
                      <div className="userName">
                         <input 
                             class="form-control" 
                             type="text" 
                             placeholder="form-control-default" />
                      </div>
                      <div className="userName">
                          <TextField 
                             id="outlined-primary"
                             label="TextField Primary"
                             variant="outlined"
                             color="primary" />
                      </div>
                      <div className="userName">
                          <input 
                            type="color"
                             />
                      </div>
                      <div className="userName">
                          <TextField 
                             id="outlined-secondary"
                             label="TextField Secondary"
                             variant="outlined"
                             color="secondary" />
                      </div>
                  </form>
               </div>
           </div>
        );
    }
}
export default Inputsform;