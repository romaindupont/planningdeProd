import { DiffDay } from './diffDay';

export function addSpanForTasks(tasks) {
  const begin = document.querySelectorAll('.ganttMachine-container-bloc--day--touch--start');
    for ( let i = 0 ; i < begin.length ; i++ ) {
      const myDataset = begin[i].dataset.myId;
      const newSpan = document.createElement('span');
      newSpan.classList.add('progress');
      newSpan.dataset.myId = myDataset;
      const startEnd = tasks.find((task) => task.id == myDataset);
      const differenceDay = DiffDay(startEnd.end, startEnd.start);
      if (differenceDay == 0) {
        newSpan.style.width = `calc(85px * calc(${startEnd.progress}/100))`;
      }
      if (startEnd.progress == 100) {
        newSpan.style.width = `calc(85px * (${differenceDay} + 1) * calc(${startEnd.progress}/100))`;
        newSpan.style.borderRadius = '10px';
        newSpan.style.background = 'rgba(38,93,125, 0.8)';
      }
      else {
        newSpan.style.width = `calc(85px * ${differenceDay} * calc(${startEnd.progress}/100))`;
      }
      begin[i].append(newSpan);
    }
};
