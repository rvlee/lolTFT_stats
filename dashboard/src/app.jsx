/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Item from './items';

type Props = {||};

type State = {
  value: number
}

function TabPanel(props: any) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

class App extends React.Component<Props, State> {
  state: State = {
    value: 0,
  }

  handleChange(e: any, newValue: number) {
    this.setState({
      value: newValue,
    });
  }

  render() {
    const {
      value,
    } = this.state;

    return (
      <div>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange.bind(this)} aria-label="simple tabs example">
            <Tab label="Items" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
            <Tab label="Characters" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Item />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Character Component Goes Here
        </TabPanel>
      </div>
    );
  }
}

const dom = document.getElementById('App');
if (dom === null) {
  // Error
  console.error('dom does not exist');
} else {
  ReactDOM.render(<App />, dom);
}
