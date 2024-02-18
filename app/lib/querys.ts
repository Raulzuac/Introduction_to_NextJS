import { sql } from '@vercel/postgres'
import { Pokemon } from "./types"
import { unstable_noStore as noCache } from 'next/cache';


export async function fetchAllPokemon() {
  noCache()

  try {

    console.log('Fetching all pokemon data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Pokemon>`SELECT * FROM pokemon ORDER BY pokedex_number ASC`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchPokemonByPokedexNumber(pokedex_number: number) {
  noCache()

  try {
    console.log(`Fetching pokemon ${pokedex_number} data...`);

    const data = await sql<Pokemon>`SELECT * FROM pokemon WHERE pokedex_number = ${pokedex_number}`;

    console.log("[DATOS DEL POKEMON]",data.rows)

    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch pokemon ${pokedex_number} data.`);
  }
}


// TODO terminar
export async function fetchPokemonByName(name: number) {
  noCache()

  try {
    console.log(`Fetching pokemon ${name} data...`);

    const data = await sql<Pokemon>`SELECT * FROM pokemon WHERE name = ${name}`;

    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch pokemon ${name} data.`);
  }
}