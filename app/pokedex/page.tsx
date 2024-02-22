import { fetchPokemonPages } from '@/app/lib/querys'
import SearchInput from '@/app/ui/SearchInput'
import PokemonPage from "@/app/ui/PokemonPage"
import Pagination from '@/app/ui/Pagination'
import { PokemonTableSqueleton } from '@/app/ui/Squeletons'
import { Suspense } from 'react'
import { Metadata } from 'next'

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
  const totalPages = await fetchPokemonPages(query);

  console.log(totalPages)

  return (
    <div className='flex flex-col gap-4'>
      <SearchInput placeholder="Search pokemons..." />
      <Suspense key={query + currentPage} fallback={<PokemonTableSqueleton />}>
        <PokemonPage query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </div>
  )
}
