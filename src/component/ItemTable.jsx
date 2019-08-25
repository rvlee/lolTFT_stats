import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TableFactory from './TableFactory';

// css
require('../css/itemTable.css');

const ItemTable = (props: any) => {
  const {
    tableConfig,
    items,
  } = props;
  const headerComponent = tableConfig.map((config) => (
    <TableCell>{config.header}</TableCell>
  ));
  const list = items.map((item) => (
    <TableRow>
      {
        tableConfig.map((config) => (
          <TableCell>
            <TableFactory
              item={item}
              config={config}
            />
          </TableCell>
        ))
      }
    </TableRow>
  ));

  return (
    <Paper className="table-wrapper">
      <Table>
        <TableHead className="table-header">
          <TableRow>
            {headerComponent}
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {list}
        </TableBody>
      </Table>
    </Paper>

  );
};


module.exports = ItemTable;
