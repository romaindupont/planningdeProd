import React from 'react';
import Thead from './Thead';
import Tbody from './Tbody';

const Table = ({ search }) => {
  return (
    <table className="table-valo">
      <Thead />
      <Tbody search={search}/>
    </table>
  );
};

export default Table;
