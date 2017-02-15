import React, {Component} from 'react';
import {Navbar, ButtonGroup, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Nav.css';

class Navigation extends Component {
    render() {
        const emailTip = (
            <Tooltip id="tooltip">Send me an email.</Tooltip>
        );
        const linkTip = (
            <Tooltip id="tooltip">Go to my LinkedIn profile.</Tooltip>
        );
        const cvTip = (
            <Tooltip id="tooltip">Take a look at my CV.</Tooltip>
        );
        return (
            <Navbar>
                <ButtonGroup className='pull-right'>
                    <OverlayTrigger placement="bottom" overlay={emailTip}>
                        <Button className='btn btn-info email' href='mailto:contact@boltonalex.com?subject=I%20saw%20your%20website' target='_blank'>
                            <span></span>
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" overlay={linkTip}>
                        <Button className='btn btn-primary linkedin' href='https://uk.linkedin.com/in/boltonalex' target='_blank'>
                            <span></span>
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" overlay={cvTip}>
                        <Button className='btn btn-info cv' href='./pdf/alex-bolton-cv.pdf' target='_blank'>
                            <span></span>
                        </Button>
                    </OverlayTrigger>
                </ButtonGroup>
            </Navbar>
        )
    }
}
export default Navigation;
