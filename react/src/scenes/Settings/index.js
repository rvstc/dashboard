import React, {Component} from 'react';
import GapiSettings from './components/GapiSettings';
import {Cell, Grid, Row} from '@material/react-layout-grid';


export default class Settings extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <h1>Settings</h1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <GapiSettings />
          </Cell>
        </Row>
      </Grid>
    );
  }
}
