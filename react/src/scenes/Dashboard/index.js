import React, { Component } from 'react';
import UserLookup from './components/UserLookup';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Card from "@material/react-card";


export default class Dashboard extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Cell columns={6}>
            <Card>
              <div style={{padding: 1 + 'rem'}}>
                <h1>Member sign in</h1>
                <p>Please scan your member card. If you do not have your card, ask a lifeguard for help signing in.</p>
                <UserLookup />
              </div>
            </Card>
          </Cell>
        </Row>
      </Grid>
    );
  }
}
