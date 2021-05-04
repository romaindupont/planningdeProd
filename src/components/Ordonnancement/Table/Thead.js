import React from 'react';
import Th from './Th';


const Thead = ({search,setSearch})=> {
  return (
          <thead>
            <tr>
              <th className="search"></th>
              <Th searchName="Lancement n°" name="numero" type="number" placeholder="Filtre par n°" search={search} setSearch={setSearch}/>
              <Th searchName="Référence" name="reference" type="text" placeholder="Filtre par référence" search={search} setSearch={setSearch}/>
              <Th searchName="Début" name="debut" type="text" placeholder="Filtre par date de début" search={search} setSearch={setSearch}/>
              <Th searchName="Fin" name="fin" type="text" placeholder="Filtre par date de fin" search={search} setSearch={setSearch}/>
              <Th searchName="id" name="id" type="number" placeholder="Filtre par id" search={search} setSearch={setSearch}/>
              <Th searchName="Machine" name="machine" type="text" placeholder="Filtre par machine" search={search} setSearch={setSearch}/>
              <Th searchName="Progression" name="progression" type="text" placeholder="Filtre par avancement" search={search} setSearch={setSearch}/>
            </tr>
          </thead>
  )
}
export default Thead;
