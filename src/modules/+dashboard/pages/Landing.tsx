import { H1, H2, H3 } from '@blueprintjs/core';
import React from 'react';
import './landing.scss';

declare var TogetherJS: any;

export default function Landing() {

    const activateTogether = function() {
        TogetherJS(); 
        return false;
    }

    return (
        <div>
            <section className="main">
                <H1>WELCOME TO</H1>
                <H2>RENTAL MANAGEMENT SYSTEM</H2>
                <H3>Please select Location</H3>

                <button onClick={(e) => activateTogether()}>Start TogetherJS</button>
            </section>
        </div >
    )
}
