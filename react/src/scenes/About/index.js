import React, { Component } from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';


export default class About extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <h1>About</h1>
            <p>[Reasons I made this ish]</p>
            https://github.com/material-components/material-components-web-react
          </Cell>
        </Row>
      </Grid>
    );
  }
}
