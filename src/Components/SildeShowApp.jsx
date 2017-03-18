import React, { Component } from 'react';
import { SlideshowButton } from './SlideshowButton';
import { LivePreview } from './LivePreview';


export class SlideShowApp extends Component{
    constructor(props, context) {
        super(props, context);

        thos.state = {
        };
    }

    componentWillUnmount(){
    }

    componentDidMount(){
    }

    render() {
        return(
            <div>
                <SlideshowButton />
                <textarea />
                <LivePreview /> 
            </div>
        );
    }
}

SlideShowApp.defaultProps = {
    
}