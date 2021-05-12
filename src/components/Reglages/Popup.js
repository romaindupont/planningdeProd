import React from 'react';

const Popup = ({ setIsShowing, message }) => {
  console.log(message)
  const yesClick = () => {
    setIsShowing(false);
  }

  return (
    <div className="popup">
      <h1 className="popup-title">{message}</h1>
      <button className="popup--oui" onClick={yesClick}>Sortir</button>
    </div>
  );
};

export default Popup;
