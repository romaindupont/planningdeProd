import React, {useState} from 'react';
import Tbody from '../../containers/ArticlesPage/Table/Tbody';
import Thead from './Thead';

const Table = () => {
  const handleChange = (e) => {
    console.log(e)
  };
  return (
    <table>
      <Thead />
      <Tbody />
    </table>
  );
};

export default Table;
