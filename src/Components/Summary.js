import React, {Component} from 'react';
import {Grid, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Summary.css';

class Summary extends Component {
    render() {
        return (
          <div  className="summary">
            <Grid>
                <Row>
                    <ListGroup className='text-center'>
                        <ListGroupItem>
                            10+ years experience developing websites
                        </ListGroupItem>
                        <ListGroupItem>
                            Experienced in building static, dynamic and responsive sites
                        </ListGroupItem>
                        <ListGroupItem>
                            Experienced in scoping and planning delivery of software requirements
                        </ListGroupItem>
                        <ListGroupItem>
                            Experienced with testing, optimisation, analytics and AB testing
                        </ListGroupItem>
                        <ListGroupItem>
                            Experienced using CMSs
                        </ListGroupItem>
                        <ListGroupItem>
                            Experienced utilising MVC structure in (N2CMS)
                        </ListGroupItem>
                        <ListGroupItem>
                            Management of teams in agile environment
                        </ListGroupItem>
                        <ListGroupItem>
                            Experience creating CMS templates
                        </ListGroupItem>
                        <ListGroupItem>
                            UX consistency from modern browsers down to ie6
                        </ListGroupItem>
                    </ListGroup>
                </Row>
            </Grid>
          </div>

        )
    }
}

export default Summary;
