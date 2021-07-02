import React from 'react';
import Thead from './Thead';
import Tbody from '../../../containers/Valorisation/Table/Tbody';

const Table = ({ search, setFilterList }) => {
  return (
    <table className="table-valo">
      <Thead />
      <Tbody search={search} setFilterList={setFilterList} />
    </table>
  );
};

export default Table;
