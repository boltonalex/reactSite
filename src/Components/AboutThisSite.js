import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/AboutThisSite.css';

class AboutThisSite extends Component {
    render() {
        return (
          <div className="AboutThisSite">

            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <Panel header='About This Page'>
                            <p>
                                This page has been built using React and Node.
                            </p>
                            <p>
                              I'm using the node-bootstrap for the layout, and node-sass to hot-compile the scss sheets.
                            </p>
                            <p>
                              I'm also using a sass mixin called <a href="https://github.com/josephfusco/angled-edges" target="_blank">angled-edges</a> to make the layout a bit more lively.
                            </p>
                            <p>
                              The code for this page, and the two apps that are linked above are all on my gitHub page: <a href="https://github.com/boltonalex/reactSite" target="_blank">https://github.com/boltonalex/reactSite</a>
                            </p>
                        </Panel>
                    </Col>

                </Row>
            </Grid>
          </div>
        )
    }
}

export default AboutThisSite;
