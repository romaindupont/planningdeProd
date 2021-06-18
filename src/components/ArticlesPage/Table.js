import React, {useState} from 'react';
import Tbody from '../../containers/ArticlesPage/Table/Tbody';
import Thead from './Thead';

const Table = ({ search }) => {
  return (
    <table>
      <Thead />
      <Tbody search={search} />
    </table>
  );
};

export default Table;
