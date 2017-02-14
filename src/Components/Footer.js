import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Footer.css';
import LinkedIn from '../IMG/linkedin.png'

class Footer extends Component {
    render() {

        let d = new Date();
        return (
            <div className='footer'>
                <Grid>
                    <Row>
                        <Col sm={5} md={5} smOffset={1} mdOffset={1}>
                            <a href="./pdf/alex-bolton-cv.pdf" target="_blank">CV</a>
                            |
                            <a href="mailto:contact@boltonalex.com?subject=I%20saw%20your%20website">Email</a>
                            |
                            <a href="https://uk.linkedin.com/in/boltonalex" target="_blank"><img src={LinkedIn} alt='LinkedIn'/></a>
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
