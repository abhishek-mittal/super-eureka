import { H1, H2, H3, InputGroup } from '@blueprintjs/core';
import React, { SyntheticEvent } from 'react';
import './landing.scss';
import Iframe from 'react-iframe'


declare var TogetherJS: any;

export default function Landing() {

    const activateTogether = function (e: SyntheticEvent) {
        TogetherJS(e);
        return false;
    }

    return (
        <div>
            <section className="main">
                <H1>WELCOME TO Aomilo</H1>
                <InputGroup id="framer" placeholder="add url" />
                <Iframe url="https://www.youtube.com/embed/xDMP3i36naA"
                    width="800px"
                    height="600vh"
                    id="myId"
                    className="myClassname"
                    display="inline"
                    position="relative" />

                <button onClick={(e) => activateTogether(e)}>Start TogetherJS</button>
            </section>
        </div >
    )
}
