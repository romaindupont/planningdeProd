import React from 'react';
import Thead from './thead';
import Tbody from './tbody';

const Table = ({search,setSearch})=> {
  return (
        <table>
          <Thead search={search} setSearch={setSearch}/>
          <Tbody search={search} setSearch={setSearch}/>
        </table>
  )
}
export default Table;
