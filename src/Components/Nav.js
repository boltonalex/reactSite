import React, {Component} from 'react';
import {Navbar, ButtonGroup, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Nav.css';

class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        Alex Bolton
                    </Navbar.Brand>
                </Navbar.Header>
                <ButtonGroup className='pull-right'>
                    <Button className='btn btn-primary' href='https://uk.linkedin.com/in/boltonalex' target='_blank'>
                      LinkedIn
                    </Button>
                    <Button className='btn btn-info' href='./pdf/alex-bolton-cv.pdf' target='_blank'>
                      CV
                    </Button>
                    <Button className='btn btn-info' href='mailto:contact@boltonalex.com?subject=I%20saw%20your%20website' target='_blank'>
                      SEND ME AN EMAIL
                    </Button>
                </ButtonGroup>
            </Navbar>
        )
    }
}
export default Navigation;
