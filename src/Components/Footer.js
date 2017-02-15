import React, {Component} from 'react';
import {Grid, Col, Row, ButtonGroup, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Footer.css';

class Footer extends Component {
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
        let d = new Date();
        return (
            <div className='footer'>
                <Grid>
                    <Row>
                        <Col sm={6} md={6}>
                            <ButtonGroup>
                                <OverlayTrigger placement="top" overlay={emailTip}>
                                    <Button className='btn btn-info email' href='mailto:contact@boltonalex.com?subject=I%20saw%20your%20website' target='_blank'>
                                        <span></span>
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={linkTip}>
                                    <Button className='btn btn-primary linkedin' href='https://uk.linkedin.com/in/boltonalex' target='_blank'>
                                        <span></span>
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={cvTip}>
                                    <Button className='btn btn-info cv' href='./pdf/alex-bolton-cv.pdf' target='_blank'>
                                        <span></span>
                                    </Button>
                                </OverlayTrigger>
                            </ButtonGroup>
                        </Col>
                        <Col sm={5} md={5}>
                            <p className='pull-right'>
                                © {d.getFullYear()} Alex Bolton
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Footer;
