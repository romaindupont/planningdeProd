import React from 'react';
import Th from '../../../containers/Ordonnancement/Th';


const Thead = ()=> {
  return (
          <thead>
            <tr>
              {/* <th className="search">Sélection</th> */}
              <Th searchName="Sélection" name="selection" type="number" placeholder="filtre indisponible" />
              <Th searchName="Lancement n°" name="numero" type="number" placeholder="Filtre par n°" />
              <Th searchName="Référence" name="reference" type="text" placeholder="Filtre par référence" />
              <Th searchName="Début" name="debut" type="text" placeholder="Filtre par date de début" />
              <Th searchName="Fin" name="fin" type="text" placeholder="Filtre par date de fin" />
              <Th searchName="id" name="id" type="number" placeholder="Filtre par id" />
              <Th searchName="Machine" name="machine" type="text" placeholder="Filtre par machine" />
              <Th searchName="Progression" name="progression" type="text" placeholder="Filtre par avancement" />
            </tr>
          </thead>
  );
};

export default Thead;
