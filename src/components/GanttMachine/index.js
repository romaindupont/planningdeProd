import React, { useState } from 'react';
import BackToMenu from '../BackToMenu';
import { DateTime,Interval } from "luxon";

const GanttMachine = ({ open_close, name, changeValue }) => {
  const [ openDate, setOpenDate ] = useState()
  const dt = DateTime.now();
  let startDate = DateTime.fromISO("2021-05-07", { locale: "fr" }).toFormat('dd/MM/yyyy');
  let endDate = DateTime.fromISO("2021-05-11", { locale: "fr" }).toFormat('dd/MM/yyyy');
/*   let i = DateTime.fromISO("2021-05-09").until(DateTime.fromISO("2021-05-11"));
  console.log(i.length('day')) */
  //const monthn1 = dt.plus([{months: 1}])
  return (
    <>
    <BackToMenu />
    <div className="ganttMachine">
      <div className="ganttMachine-container">
        <div className="ganttMachine-container-date">
          <div className="ganttMachine-container-date--day">{ dt.minus({days:11}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.minus({days:10}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.minus({days:9}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.minus({days:8}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.minus({days:7}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.minus({days:6}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.minus({days:5}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.minus({days:4}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.minus({days:3}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.minus({days:2}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.minus({days:1}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:1}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:2}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:3}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:4}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:5}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:6}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:7}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:8}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:9}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:10}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:11}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:12}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:13}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:14}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:15}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:16}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:17}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:18}).toFormat('dd/MM/yyyy') }</div>
          <div className="ganttMachine-container-date--day">{ dt.plus({days:19}).toFormat('dd/MM/yyyy') }</div>
        </div>
        <div className="ganttMachine-container-bloc">
          <div className="ganttMachine-container-bloc--day">
            <span className={(startDate==dt.minus({days:11}).toFormat('dd/MM/yyyy')) ? "ganttMachine-container-bloc--day--touch" : (endDate==dt.minus({days:11}).toFormat('dd/MM/yyyy')) ? "ganttMachine-container-bloc--day--touch" : (startDate>dt.minus({days:11}).toFormat('dd/MM/yyyy') && endDate<dt.minus({days:11}).toFormat('dd/MM/yyyy')) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--day" }></span>
          </div>
          <div className="ganttMachine-container-bloc--day">
            <span className={(startDate==dt.minus({days:10}).toFormat('dd/MM/yyyy')) ? "ganttMachine-container-bloc--day--touch" : (endDate==dt.minus({days:10}).toFormat('dd/MM/yyyy')) ? "ganttMachine-container-bloc--day--touch" : (startDate<dt.minus({days:10}).toFormat('dd/MM/yyyy') && endDate>dt.minus({days:10}).toFormat('dd/MM/yyyy')) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--day" }></span>
          </div>
          <div className={(startDate==dt.minus({days:9}).toFormat('dd/MM/yyyy')) ? "ganttMachine-container-bloc--day--touch" : (endDate==dt.minus({days:9}).toFormat('dd/MM/yyyy')) ? "ganttMachine-container-bloc--day--touch" : (startDate<dt.minus({days:9}).toFormat('dd/MM/yyyy') && endDate>dt.minus({days:9}).toFormat('dd/MM/yyyy')) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--day" }></div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.minus({days:8}).toFormat('dd/MM/yyyy')) ? 1 : (endDate==dt.minus({days:8}).toFormat('dd/MM/yyyy')) ? 1 : (startDate<dt.minus({days:8}).toFormat('dd/MM/yyyy') && endDate>dt.minus({days:8}).toFormat('dd/MM/yyyy')) ? 1 : 0 }</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.minus({days:7}).toFormat('dd/MM/yyyy')) ? 1 : (endDate==dt.minus({days:7}).toFormat('dd/MM/yyyy')) ? 1 : (startDate<dt.minus({days:7}).toFormat('dd/MM/yyyy') && endDate>dt.minus({days:7}).toFormat('dd/MM/yyyy')) ? 1 : 0 }</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.minus({days:6}).toFormat('dd/MM/yyyy')) ? 1 : (endDate==dt.minus({days:6}).toFormat('dd/MM/yyyy')) ? 1 : (startDate<dt.minus({days:6}).toFormat('dd/MM/yyyy') && endDate>dt.minus({days:6}).toFormat('dd/MM/yyyy')) ? 1 : 0 }</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.minus({days:5}).toFormat('dd/MM/yyyy')) ? 1 : (endDate==dt.minus({days:5}).toFormat('dd/MM/yyyy')) ? 1 : (startDate<dt.minus({days:5}).toFormat('dd/MM/yyyy') && endDate>dt.minus({days:5}).toFormat('dd/MM/yyyy')) ? 1 : 0 }</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.minus({days:4}).toFormat('dd/MM/yyyy')) ? 1 : (endDate==dt.minus({days:4}).toFormat('dd/MM/yyyy')) ? 1 : (startDate<dt.minus({days:4}).toFormat('dd/MM/yyyy') && endDate>dt.minus({days:4}).toFormat('dd/MM/yyyy')) ? 1 : 0 }</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.minus({days:3}).toFormat('dd/MM/yyyy')) ? 1 : (endDate==dt.minus({days:3}).toFormat('dd/MM/yyyy')) ? 1 : (startDate<dt.minus({days:3}).toFormat('dd/MM/yyyy') && endDate>dt.minus({days:3}).toFormat('dd/MM/yyyy')) ? 1 : 0 }</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.minus({days:2}).toFormat('dd/MM/yyyy')) ? 1 : (endDate==dt.minus({days:2}).toFormat('dd/MM/yyyy')) ? 1 : (startDate<dt.minus({days:2}).toFormat('dd/MM/yyyy') && endDate>dt.minus({days:2}).toFormat('dd/MM/yyyy')) ? 1 : 0 }</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.minus({days:1}).toFormat('dd/MM/yyyy')) ? 1 : (endDate==dt.minus({days:1}).toFormat('dd/MM/yyyy')) ? 1 : (startDate>dt.minus({days:1}).toFormat('dd/MM/yyyy') && endDate>dt.minus({days:1}).toFormat('dd/MM/yyyy')) ? 1 : 0 }</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:1}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:2}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:3}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:4}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:5}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:6}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:7}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:8}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:9}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:10}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:11}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:12}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:13}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate==dt.plus({days:14}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate=dt.plus({days:15}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate=dt.plus({days:16}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate=dt.plus({days:17}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate=dt.plus({days:18}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
          <div className="ganttMachine-container-bloc--day">{(startDate=dt.plus({days:19}).toFormat('dd/MM/yyyy')) ? 1 : 0}</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default GanttMachine;
