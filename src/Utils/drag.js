
export function Drag(e, idRef) {
  const elemnt = document.getElementById(idRef);
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  let event = e;

  const dragElement = (event) => {
    const elemnt = document.getElementById(idRef);
    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;
    elemnt.onmousedown = dragMouseDown;
  }
const dragMouseDown = (event) => {
  event.preventDefault();
  pos3 = event.clientX;
  pos4 = event.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;

}
const elementDrag = (event) => {
  event.preventDefault();
  const elemnt = document.getElementById(idRef);
  pos1 = pos3 - event.clientX;
  pos2 = pos4 - event.clientY;
  pos3 = event.clientX;
  pos4 = event.clientY;
  elemnt.style.top = (elemnt.offsetTop - pos2) + "px";
  elemnt.style.left = (elemnt.offsetLeft - pos1) + "px";
}
const closeDragElement = () => {
  document.onmouseup = null;
  document.onmousemove = null;
}
};
