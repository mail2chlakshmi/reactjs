import React, { Component } from 'react';
import './Buttons.css';
import Button from './Button';

class Buttons extends Component {
    render() {
        return (
            <>
            <h1>Buttons Page</h1>
            <div className="btn-gallary">
                <div className="content">
                    <div className="code">
                        &lt;Button color="default"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="default">Default</Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="secondary"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="secondary">Secondary</Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="danger"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="danger">Danger</Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="default" variant="text"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="default" variant="text">
                        Default Text
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="primary" variant="text"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="primary" variant="text">
                    Primary Text
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="secondary" variant="outline"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="secondary" variant="outline">
                        Secondary Outline
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="danger" variant="outline"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="danger" variant="outline">
                        Danger Outline
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="default" disableShadow&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="default" disableShadow>
                        Default DS
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="primary" disableShadow&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="primary" disableShadow>
                        Primary DS
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="secondary" disabled&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="secondary" disabled>
                        Secondary disabled
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="danger" disabled&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="danger" disabled>
                        Danger disabled
                    </Button>
                </div>
                <div className="content" style={{ "gridTemplateColumns": "span 2" }}>
                    <div className="code">
                       &lt;Button color="default" variant="text" disabled&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="default" variant="text" disabled>
                        Default Text
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="secondary" startIcon="local_grocery_store"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="secondary" startIcon="local_grocery_store">
                        Secondary startIcon
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="danger" startIcon="local_grocery_store"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="danger" startIcon="local_grocery_store">
                        Danger startIcon
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="default" endIcon="local_grocery_store"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="default" endIcon="local_grocery_store">
                        Default endIcon
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="primary" endIcon="local_grocery_store"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="primary" endIcon="local_grocery_store">
                        Primary endIcon
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="secondary" size="sm"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="secondary" size="sm">
                        Secondary Size
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="danger" size="sm"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="danger" size="sm">
                        Danger Size
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="default" size="md"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="default" size="md">
                        Default Size
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="primary" size="md"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="primary" size="md">
                        Primary Size
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="secondary" size="lg"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="secondary" size="lg">
                        Secondary Size
                    </Button>
                </div>
                <div className="content">
                    <div className="code">
                        &lt;Button color="danger" size="lg"&gt;Default&lt;/Button&gt;
                    </div>
                    <Button color="danger" size="lg">
                        Danger Size
                    </Button>
                </div>
            </div>
            </>
        );
    }
}

export default Buttons;