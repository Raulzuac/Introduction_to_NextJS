type PokemonPageProps ={
    params: {pokedex_number:number}
} 

export default function Page({params}:PokemonPageProps){
    return <p>{params.pokedex_number}</p>
}