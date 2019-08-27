import React from 'react';
import {
  connect,
} from 'react-redux';

const BaseTwoLogo = (props: any) => {
  const {
    base,
    allItems,
  } = props;
  return (
    <div>
      {
        base.map((baseId, index) => {
          const item = allItems[baseId];
          return (
            <img className="table-img" key={`${baseId}${index}`} src={item.logo.src} alt={item.logo.alt} />
          );
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    allItems: state.item.allItems,
  }
);

module.exports = connect(mapStateToProps)(BaseTwoLogo);
