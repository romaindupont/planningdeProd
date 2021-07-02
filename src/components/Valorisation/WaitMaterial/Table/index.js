import React from 'react';
import Thead from './Thead';
import Tbody from '../../../../containers/Valorisation/WaitMaterial/Table/Tbody';

const Table = ({ search }) => {
  return (
    <table className="WaitMaterial-table">
      <Thead />
      <Tbody search={search} />
    </table>
  );
};

export default Table;
