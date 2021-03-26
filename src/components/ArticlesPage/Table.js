import React, {useState} from 'react';
import Thead from './Thead';
import Tbody from '../../containers/ArticlesPage/Table/Tbody';

const Table = ({articles})=> {

  const handleChange = (e) => {

    console.log(e)

  }
  return (
        <table>
          <Thead />
          <Tbody />
        </table>
  )
}
export default Table;
