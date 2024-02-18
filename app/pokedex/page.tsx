import { fetchAllPokemon } from '@/app/lib/querys';
import PokemonCard from '../ui/PokemonCard';
import SearchInput from '../ui/SearchInput';
export default async function Page() {

  const pokemons = await fetchAllPokemon()

  return (
    <div className='flex flex-col gap-4'>
      <SearchInput placeholder="Search pokemons..." />
      <div className='grid grid-cols-3 gap-3'>
        {pokemons.map(pokemon =>
          <PokemonCard key={pokemon.pokedex_number} pokemon={pokemon} />
        )}
      </div>
    </div>
  )
}
