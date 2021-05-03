import React from 'react';


const PopupMessage = ({popupText, openPopup,setOpenPopup,popupWindow,changePopup})=> {
  const okClick = () => {
    changePopup(false);
  }
  return (
    <div className="popupMessage">
    <h1 className="popupMessage-title"><span className="popupMessage-span"><span>&#33;</span></span>{popupText}<span className="popupMessage-span"><span>&#33;</span></span></h1>
    <button className="popupMessage--oui" onClick={okClick}>OK</button>
  </div>
  )
}
export default PopupMessage;
