import React from 'react';
import BackToMenu from '../BackToMenu';
import Table from './Table';
import FormMachine from '../../containers/MachinesPage/FormMachine';

const MachinesPage = () => {
  return (
    <div className="machinesPage">
      <BackToMenu />
      <h1 className="machinesPage-title">Listes des Machines</h1>
      <div className="articlePage-list">
      <Table/>
      <FormMachine />
      </div>

    </div>
  )
}

export default MachinesPage
