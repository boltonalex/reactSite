import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/CaseStudy.css';
import weather from './../IMG/weather.jpg';
import text from './../IMG/text.jpg';

class CaseStudy extends Component {
    render() {
        return (
          <div className="caseStudy">

            <Grid>
                <Row>
                    <Col xs={10} xsOffset={1} md={4} mdOffset={1}>
                        <Panel header='App Name : Lorem Text Generator'>
                            <img alt="Screenshot of text generator app" src={text}/>
                            <p>
                                React and Node project.
                            </p>
                            <p>
                                The project is set up using webpack. It calls to the randomtext.me api.
                            </p>
                            <p>
                                This project uses the following tools: axios, babel and bootstrap.
                            </p>
                            <Button href="textGenerator/" target="_blank">Take a look</Button>

                        </Panel>
                    </Col>
                    <Col xs={10} xsOffset={1} md={4} mdOffset={2}>

                        <Panel header='App Name : Weather Tool'>

                            <img alt="Screenshot of weather display app" src={weather}/>
                            <p>
                                React and Node project.
                            </p>
                            <p>
                                A cron job made in node calls to the DarkSky weather api, writes the current temperature and the unix timestamp to a json file.
                            </p>
                            <p>
                                The cron task uses the following tools: fs and request.
                            </p>
                            <p>
                                The front end is built using ReactJs and uses the following tools: axios, react-bootstrap and react-timestamp.
                            </p>
                            <Button href="weather/" target="_blank">Take a look</Button>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
          </div>
        )
    }
}

export default CaseStudy;
