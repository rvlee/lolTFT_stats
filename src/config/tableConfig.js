const itemTableConfig = [
  {
    header: 'ICON',
    type: 'IMAGE',
    path: ['logo', 'src'],
    width: 10,
    align: '',
  },
  {
    header: 'NAME',
    type: 'TEXT',
    path: ['name'],
    width: 20,
    align: '',
  },
  {
    header: 'DESCRIPTION',
    type: 'TEXT',
    path: ['description'],
    width: 50,
    align: '',
  },
  {
    header: 'COMBINED',
    type: 'TWO_ICON',
    path: ['base'],
    width: 20,
    align: 'right',
  },
];

module.exports = {
  itemTableConfig,
};
