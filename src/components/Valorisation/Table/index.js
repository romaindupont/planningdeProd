import React from 'react';
import Thead from './Thead';
import Tbody from '../../../containers/Valorisation/Table/Tbody';

const Table = ({ search, total, setTotal }) => {
  return (
    <table className="table-valo">
      <Thead />
      <Tbody search={search} total={total} setTotal={setTotal}/>
    </table>
  );
};

export default Table;
