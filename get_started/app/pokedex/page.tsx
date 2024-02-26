//  ? CREAR RUTA POKEDEX
// export default function Page() {
//   return (
//     <div>Pokedex page</div>
//   )
// }


// ? FETCH POKEMONS

import { fetchAllPokemon } from '@/app/lib/querys'
import { Metadata } from 'next'
import PokemonCard from '../ui/PokemonCard'
import PokemonPage from '../ui/PokemonPage'
import SearchInput from '@/app/ui/SearchInput'
import { Suspense } from 'react'
import { PokemonTableSqueleton } from '../ui/Squeletons'

export const metadata: Metadata = {
  title: 'Nextdex',
}


type PokedexPageProps = {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function Page({ searchParams }: PokedexPageProps) {

  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  // const pokemons = await fetchAllPokemon()

  return (
    <div className='flex flex-row flex-wrap gap-4'>
      <SearchInput/>
      <Suspense key={query + currentPage} fallback={<PokemonTableSqueleton />}>
        <PokemonPage query={query} currentPage={currentPage} />
      </Suspense>
      {/* {pokemons.map(poke =>
        <PokemonCard pokemon={poke} key={poke.pokedex_number} />
      )} */}
    </div>
  )
}

// ? TERMINADA

// import { fetchPokemonPages } from '@/app/lib/querys'
// import SearchInput from '@/app/ui/SearchInput'
// import PokemonPage from "@/app/ui/PokemonPage"
// import Pagination from '@/app/ui/Pagination'
// import { PokemonTableSqueleton } from '@/app/ui/Squeletons'
// import { Suspense } from 'react'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Nextdex',
// }

// type PokedexPageProps = {
//   searchParams?: {
//     query?: string;
//     page?: string;
//   };
// }

// export default async function Page({ searchParams }: PokedexPageProps) {

//   const query = searchParams?.query || ''
//   const currentPage = Number(searchParams?.page) || 1
//   const totalPages = await fetchPokemonPages(query);

//   return (
//     <div className='flex flex-col gap-4'>
//       <SearchInput placeholder="Search pokemons..." />
      // <Suspense key={query + currentPage} fallback={<PokemonTableSqueleton />}>
      //   <PokemonPage query={query} currentPage={currentPage} />
      // </Suspense>
//       <Pagination totalPages={totalPages} />
//     </div>
//   )
// }
