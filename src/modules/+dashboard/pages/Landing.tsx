import { H1, H2, H3, InputGroup } from '@blueprintjs/core';
import React, { SyntheticEvent } from 'react';
import './landing.scss';
import Iframe from 'react-iframe'


declare var TogetherJS: any;

export default function Landing() {

    const [link, setLink] = React.useState("https://www.youtube.com/embed/xDMP3i36naA")

    const activateTogether = function (e: SyntheticEvent) {
        TogetherJS(e);
        return false;
    }

    const handleChane = (e: any) => {
        setLink(e.value)
    }

    return (
        <div>
            <section className="main">
                <H1>WELCOME TO Aomilo</H1>
                <div className="bp3-form-group .modifier">
                    <label className="bp3-label" >
                        Label
                        
                    </label>
                    <div className="bp3-form-content">
                        <div className="bp3-input-group .modifier">
                            <span className="bp3-icon bp3-icon-calendar"></span>
                            <input id="form-group-input" type="text" className="bp3-input"
                                style={{width: '200px'}} placeholder="Placeholder text" dir="auto" onInput={ e => handleChane(e.target)} />
                        </div>
                        <div className="bp3-form-helper-text">Please enter a value</div>
                    </div>
                </div>
                <div style={{width: "100vw", height:'100vh', backgroundColor: 'cyan'}}>
                    <Iframe url={link}
                        width="100%"
                        height="100%"
                        id="myId"
                        className="myClassname"
                        display="inline"
                        position="relative" allowFullScreen />

                </div>

                <button onClick={(e) => activateTogether(e) } data-end-togetherjs-html="End Session">Initiate Session</button>
            </section>
        </div >
    )
}
