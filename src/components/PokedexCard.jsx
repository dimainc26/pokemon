import React from 'react';
 
const PokedexCard = () => {
  const charmander = {
    name: 'Charmander',
    id: 4,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    type: 'Fire',
    description: 'Preferisce i posti caldi. Dicono che quando piove gli esce vapore dalla punta della coda.'
  };
 
  return (
<div className="pokedex-card">
<img src={charmander.image} alt={charmander.name} />
<h2>{charmander.name} #{charmander.id}</h2>
<p>Type: {charmander.type}</p>
<p>{charmander.description}</p>
</div>
  );
};
 
export default PokedexCard;