import React from 'react';
import Thead from './thead';
import Tbody from '../../../containers/Lancement/Tbody';

const Table = ({ search })=> {
  return (
    <table>
          <Thead />
          <Tbody search={search} />
    </table>
  );
};

export default Table;
