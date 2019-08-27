const itemTableConfig = [
  {
    header: 'ICON',
    type: 'IMAGE',
    path: ['logo', 'src'],
    width: 10,
    align: 'center',
  },
  {
    header: 'NAME',
    type: 'TEXT',
    path: ['name'],
    width: 20,
    align: 'center',
  },
  {
    header: 'DESCRIPTION',
    type: 'TEXT',
    path: ['description'],
    width: 50,
    align: 'center',
  },
  {
    header: 'COMBINED',
    type: 'TWO_ICON',
    path: ['connect'],
    width: 20,
    align: 'right',
  },
];

module.exports = {
  itemTableConfig,
};
