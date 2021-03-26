import React from 'react';


const Popup = ()=> {

  return (
    `
		<div class="details-container">
		  <h5>${name}</h5>
		  <p>Expected to finish by ${end}</p>
		  <p>${progress}% completed!</p>
		</div>
	  `
  )
}
export default Popup;