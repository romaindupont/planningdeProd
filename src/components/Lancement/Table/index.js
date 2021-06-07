import React from 'react';
import Tbody from '../../../containers/Lancement/Tbody';
import Thead from './thead';

const Table = ({ search }) => {
  return (
    <table>
      <Thead />
      <Tbody search={search} />
    </table>
  );
};

export default Table;
