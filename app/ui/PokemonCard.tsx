import Image from "next/image"
import Link from "next/link"
import TypeTag from "./TypeTag"
import { Pokemon } from "../lib/types"

type PokemonCardProps = {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const {
    pokedex_number,
    name,
    image_url,
    type_1,
    type_2
  } = pokemon

  const formatPokedexNumber = (n: number) => {
    const nLength = n.toString().length
    return (nLength == 1 ? "00" : nLength == 2 ? "0" : "") + n
  }

  return (
    <Link href={`/pokedex/${pokedex_number}`}>
      <div className="rounded-lg p-4 bg-gray-400 text-black overflow-hidden flex flex-col justify-center gap-3">
        <span className="text-lg font-extrabold">#{formatPokedexNumber(pokedex_number)} / {name}</span>
        <div className="bg-black rounded-full bg-opacity-60 p-5">
          <Image
            alt={image_url}
            src={image_url}
            width={150}
            height={150}
          />
        </div>
        <div className="flex w-full gap-2">
          <TypeTag type={type_1} />
          {!!type_2 && <TypeTag type={type_2} />}
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard