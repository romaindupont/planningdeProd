import React from 'react';
import BackToMenu from '../BackToMenu';

const GanttMachine = ({ open_close, name, changeValue }) => {
  return (
    <>
    <BackToMenu />
    <div className="ganttMachine">
      <table>
      <thead>
            <tr>
              <th></th>
              <th>id</th>
              <th>Référence</th>
              <th>Machine</th>
              <th>Tps Op. en min</th>
              <th>liaison</th>
              <th>niveau nom.</th>
            </tr>
          </thead>
      </table>
    </div>
    </>
  );
};

export default GanttMachine;
