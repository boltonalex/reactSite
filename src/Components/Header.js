import React, {Component} from 'react';
import {Grid, PageHeader} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Header.css';
import headerBG from '../IMG/header-1b.jpg'


class Header extends Component {
    render() {
      var style = {
        backgroundImage: 'url(' + headerBG + ')'
      }
        return (
            <Grid className='header text-center' style={style}>
                <PageHeader>
                    Alex Bolton<br/>
                </PageHeader>
                <div className="separator line-separator">♦</div>
                <small>Frontend Developer</small>
            </Grid>
        )
    }
}

export default Header;
