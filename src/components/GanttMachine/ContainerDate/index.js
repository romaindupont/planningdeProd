import React from 'react';

const ContainerDate = ({ dt }) => {
  return (
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
  );
};

export default ContainerDate;
