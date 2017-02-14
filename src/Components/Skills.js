import React, {Component} from 'react';
import {Grid, Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Skills.css';

class Skills extends Component {
    render() {
        return (
          <div className="skills">
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <ListGroup className='text-center'>
                            <ListGroupItem>
                                <strong>Languages
                                </strong>
                                (HTML, CSS, Javascript, React, node.js, AJAX, JSON, C#)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>CMSs
                                </strong>
                                (N2CMS, Drupal, Joomla, Cushy)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>CSS
                                </strong>
                                (CSS3, SCSS, media queries, modernizr)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Salesforce
                                </strong>
                                (CLM, Veeva, Vault, approved email)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>HTML E-mail
                                </strong>
                                (Campaign Monitor, MailChimp, Veeva Approved E-mail)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Version Control
                                </strong>
                                (Git, SVN, Bitbucket)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Operating systems
                                </strong>
                                (mac, windows, linux)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Adobe experience
                                </strong>
                                (Photoshop, Illustrator, InDesign, Flash, Premier, After Effects)
                            </ListGroupItem>

                        </ListGroup>
                    </Col>
                    <Col xs={12} md={6}>

                        <ListGroup className='text-center'>
                            <ListGroupItem>
                                <strong>Google analytics
                                </strong>
                                (custom variables, campaigns, custom reporting)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Project management
                                </strong>
                                (Ganttic, DoneDone, ScrumDo, Basecamp)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Editors
                                </strong>
                                (Atom, Sublime Text, Visual Studio)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>E-Commerce
                                </strong>
                                (Magento)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>API
                                </strong>
                                (Fitbit API, DarkSky, randomtext.me)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Team management
                                </strong>
                                (co-ordinating developers and designers both senior and junior to me on tight deadlines)
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Experience with iOS development
                                </strong>
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Experience with publishing to Apple App store
                                </strong>
                            </ListGroupItem>

                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
          </div>

        )
    }
}

export default Skills;
